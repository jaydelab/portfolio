import { useEffect, useRef, type CSSProperties, type RefObject } from "react";
import { assetUrl } from "../../lib/asset-url";
import type { ActiveBreakpoint } from "../../lib/use-active-breakpoint";
import type { UnicornStudioApi } from "./unicorn-studio-types";

type UnicornHeroLayoutBreakpoint = {
  vignette: {
    bottomFade: string;
    leftFade: string;
    rightFade: string;
    topFade: string;
  };
  size: string;
  top: string;
};

export type UnicornHeroLayoutConfig = {
  bottom: string;
  center: boolean;
  desktop: UnicornHeroLayoutBreakpoint;
  enabled: boolean;
  flip: boolean;
  left: string;
  mirror: boolean;
  mobile: UnicornHeroLayoutBreakpoint;
  opacity: number;
  right: string;
  tablet: UnicornHeroLayoutBreakpoint;
  useVignette: boolean;
};

type UnicornHeroBackgroundProps = {
  className?: string;
  breakpoint?: ActiveBreakpoint;
  layout?: UnicornHeroLayoutConfig;
  visibilityTargetRef?: RefObject<HTMLElement | null>;
};

type UnicornStudioScene = {
  curtain?: {
    canvas?: HTMLCanvasElement;
    render?: () => void;
    renderer?: {
      nextRender?: {
        execute?: unknown;
      };
    };
  };
  destroy?: () => void;
  getDynamicLayers?: () => Array<{ local?: { currentFrameMouseValues?: unknown } }>;
  handleStateEffects?: (
    layers?: Array<{ local?: { currentFrameMouseValues?: unknown } }>,
  ) => void;
  local?: {
    dynamicLayersCache?: Array<{ local?: { currentFrameMouseValues?: unknown } }>;
  };
  interactivity?: {
    mouse?: {
      disableMobile?: boolean;
    };
  };
  fps?: number;
  frameDuration?: number;
  lastTime?: number;
  paused?: boolean;
  refresh?: () => void;
  renderFrame?: () => void;
  destroyed?: boolean;
};

type UnicornHeroWindow = Window & {
  UnicornStudio?: UnicornStudioApi;
  __portfolioUnicornRuntimePromise__?: Promise<UnicornStudioApi>;
  __portfolioUnicornSceneWarmupPromise__?: Promise<void>;
};

const runtimeUrl = assetUrl("/effects/unicorn-campo-luminoso/unicorn-runtime.txt");
const sceneTemplateUrl = assetUrl("/effects/unicorn-campo-luminoso/scene.performance.json");
let runtimeSourcePromise: Promise<string> | null = null;
let sceneTemplatePromise: Promise<string> | null = null;
const DEFAULT_HERO_FPS = 60;
const SCROLL_HERO_FPS = 18;
const SCROLL_SETTLE_MS = 160;
const EDGE_FADE_GAIN = 1.9;

function canUseWebGL() {
  if (typeof window === "undefined") {
    return false;
  }

  const canvas = document.createElement("canvas");
  const context =
    canvas.getContext("webgl2") ??
    canvas.getContext("webgl") ??
    canvas.getContext("experimental-webgl");

  return Boolean(context && "getExtension" in context);
}

async function fetchRuntimeSource() {
  if (runtimeSourcePromise) {
    return runtimeSourcePromise;
  }

  runtimeSourcePromise = fetch(runtimeUrl)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Falha ao carregar runtime: ${response.status}`);
      }

      return response.text();
    })
    .catch((error) => {
      runtimeSourcePromise = null;
      throw error;
    });

  return runtimeSourcePromise;
}

function loadRuntime() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Window indisponível."));
  }

  const unicornWindow = window as UnicornHeroWindow;

  if (unicornWindow.UnicornStudio) {
    return Promise.resolve(unicornWindow.UnicornStudio);
  }

  if (unicornWindow.__portfolioUnicornRuntimePromise__) {
    return unicornWindow.__portfolioUnicornRuntimePromise__;
  }

  unicornWindow.__portfolioUnicornRuntimePromise__ = fetchRuntimeSource()
    .then((source) => {
      const script = document.createElement("script");
      script.async = false;
      script.text = source;
      document.head.appendChild(script);

      if (!unicornWindow.UnicornStudio) {
        throw new Error("Runtime UnicornStudio não carregou.");
      }

      return unicornWindow.UnicornStudio;
    })
    .catch((error) => {
      unicornWindow.__portfolioUnicornRuntimePromise__ = undefined;
      throw error;
    });

  return unicornWindow.__portfolioUnicornRuntimePromise__;
}

async function fetchSceneTemplate() {
  if (sceneTemplatePromise) {
    return sceneTemplatePromise;
  }

  sceneTemplatePromise = fetch(sceneTemplateUrl)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Falha ao carregar cena: ${response.status}`);
      }

      return response.text();
    })
    .catch((error) => {
      sceneTemplatePromise = null;
      throw error;
    });

  return sceneTemplatePromise;
}

function withHighPerformanceWebGLContext<T>(run: () => Promise<T>) {
  const originalGetContext = HTMLCanvasElement.prototype.getContext;
  const patchedGetContext = function patchedGetContext(
    this: HTMLCanvasElement,
    contextId: string,
    options?: unknown,
  ) {
    if (contextId === "webgl2" || contextId === "webgl") {
      const webglOptions =
        options && typeof options === "object"
          ? {
              ...(options as WebGLContextAttributes),
              desynchronized: true,
              powerPreference: "high-performance" as const,
            }
          : {
              desynchronized: true,
              powerPreference: "high-performance" as const,
            };

      return Reflect.apply(
        originalGetContext as (...args: unknown[]) => unknown,
        this,
        [contextId, webglOptions],
      ) as ReturnType<HTMLCanvasElement["getContext"]>;
    }

    return Reflect.apply(
      originalGetContext as (...args: unknown[]) => unknown,
      this,
      [contextId, options],
    ) as ReturnType<HTMLCanvasElement["getContext"]>;
  };

  HTMLCanvasElement.prototype.getContext =
    patchedGetContext as typeof HTMLCanvasElement.prototype.getContext;

  return run().finally(() => {
    HTMLCanvasElement.prototype.getContext = originalGetContext;
  });
}

function warmupSceneAsset() {
  if (typeof window === "undefined" || !canUseWebGL()) {
    return;
  }

  const unicornWindow = window as UnicornHeroWindow;

  if (!unicornWindow.__portfolioUnicornSceneWarmupPromise__) {
    unicornWindow.__portfolioUnicornSceneWarmupPromise__ = fetch(sceneTemplateUrl)
      .then(() => undefined)
      .catch(() => undefined);
  }
}

function optimizeScene(scene: UnicornStudioScene) {
  const canvas = scene.curtain?.canvas;
  if (canvas) {
    canvas.style.contain = "paint";
    canvas.style.willChange = "transform";
    canvas.style.transform = "translateZ(0)";
    canvas.style.backfaceVisibility = "hidden";
  }

  return scene;
}

function setSceneFrameRate(scene: UnicornStudioScene, fps: number) {
  scene.fps = fps;
  scene.frameDuration = 1000 / fps;
  scene.lastTime = 0;
}

function getEdgeFadeMask(vignette: UnicornHeroLayoutBreakpoint["vignette"]) {
  const leftFade = `calc(${vignette.leftFade} * ${EDGE_FADE_GAIN})`;
  const rightFade = `calc(${vignette.rightFade} * ${EDGE_FADE_GAIN})`;
  const topFade = `calc(${vignette.topFade} * ${EDGE_FADE_GAIN})`;
  const bottomFade = `calc(${vignette.bottomFade} * ${EDGE_FADE_GAIN})`;
  const horizontalMask = `linear-gradient(to right, transparent 0%, black ${leftFade}, black calc(100% - ${rightFade}), transparent 100%)`;
  const verticalMask = `linear-gradient(to bottom, transparent 0%, black ${topFade}, black calc(100% - ${bottomFade}), transparent 100%)`;

  return `${horizontalMask}, ${verticalMask}`;
}

function getHeroBackgroundStyle(
  layout: UnicornHeroLayoutConfig | undefined,
  breakpoint: ActiveBreakpoint,
): CSSProperties {
  if (!layout) {
    return {
      top: "-300px",
      bottom: "0",
      width: "max(100%, 100vw)",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#f7f7f7",
    } satisfies CSSProperties;
  }

  const vignette = layout[breakpoint].vignette;
  const mask = layout.useVignette ? getEdgeFadeMask(vignette) : undefined;
  const centerX = layout.center ? "translateX(-50%)" : "";
  const flipY = layout.flip ? "scaleY(-1)" : "";
  const mirrorX = layout.mirror ? "scaleX(-1)" : "";
  const transform = `${centerX} ${flipY} ${mirrorX}`.trim() || undefined;

  return {
    position: "absolute",
    width: layout[breakpoint].size,
    top: layout[breakpoint].top,
    ...(layout.center ? { left: "50%" } : { left: layout.left, right: layout.right }),
    transform,
    bottom: layout.bottom,
    opacity: layout.opacity,
    overflow: "visible",
    maskImage: mask,
    WebkitMaskImage: mask,
    ...(layout.useVignette
      ? {
          maskComposite: "intersect",
          WebkitMaskComposite: "destination-in",
        }
      : null),
    backgroundColor: "#f7f7f7",
  } satisfies CSSProperties;
}

export function UnicornHeroBackground({
  className = "",
  breakpoint = "desktop",
  layout,
  visibilityTargetRef,
}: UnicornHeroBackgroundProps) {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = sceneRef.current;
    if (!container) {
      return undefined;
    }

    if (!canUseWebGL()) {
      return undefined;
    }

    let disposed = false;
    let scene: UnicornStudioScene | null = null;
    let observer: IntersectionObserver | null = null;
    let scrollReleaseTimer = 0;
    let isVisible = true;
    const resolvedDpi = Math.min(Math.max(window.devicePixelRatio || 1, 1), 1.25);
    warmupSceneAsset();

    const applyPausedState = () => {
      if (!scene) {
        return;
      }

      scene.paused = !isVisible;

      if (!scene.paused) {
        scene.renderFrame?.();
      }
    };

    const releaseScrollBudget = () => {
      if (!scene) {
        return;
      }

      setSceneFrameRate(scene, DEFAULT_HERO_FPS);
      applyPausedState();
    };

    const handleScrollActivity = () => {
      if (!scene || !isVisible) {
        return;
      }

      setSceneFrameRate(scene, SCROLL_HERO_FPS);
      window.clearTimeout(scrollReleaseTimer);
      scrollReleaseTimer = window.setTimeout(releaseScrollBudget, SCROLL_SETTLE_MS);
    };

    Promise.all([loadRuntime(), fetchSceneTemplate()])
      .then(([runtime]) => {
        return withHighPerformanceWebGLContext(() =>
          runtime.addScene({
            dpi: resolvedDpi,
            element: container,
            filePath: sceneTemplateUrl,
            fps: DEFAULT_HERO_FPS,
            interactivity: {
              mouse: {
                disableMobile: false,
              },
            },
            lazyLoad: false,
            production: true,
            scale: 1,
          }),
        );
      })
      .then((nextScene) => {
        if (disposed) {
          nextScene?.destroy?.();
          return;
        }

        scene = optimizeScene(nextScene);
        setSceneFrameRate(scene, DEFAULT_HERO_FPS);

        const target = visibilityTargetRef?.current;
        if (target && typeof IntersectionObserver !== "undefined") {
          observer = new IntersectionObserver(
            ([entry]) => {
              if (!scene) {
                return;
              }

              isVisible = entry?.isIntersecting ?? true;
              applyPausedState();
            },
            {
              root: null,
              threshold: 0.08,
            },
          );

          observer.observe(target);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    window.addEventListener("scroll", handleScrollActivity, { passive: true });
    window.addEventListener("wheel", handleScrollActivity, { passive: true });
    window.addEventListener("touchmove", handleScrollActivity, { passive: true });

    return () => {
      disposed = true;
      window.clearTimeout(scrollReleaseTimer);
      window.removeEventListener("scroll", handleScrollActivity);
      window.removeEventListener("wheel", handleScrollActivity);
      window.removeEventListener("touchmove", handleScrollActivity);
      observer?.disconnect();
      scene?.destroy?.();
    };
  }, [visibilityTargetRef]);

  const backgroundStyle = getHeroBackgroundStyle(layout, breakpoint);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`.trim()}
      style={backgroundStyle}
    >
      <div className="absolute inset-0" ref={sceneRef} />
    </div>
  );
}
