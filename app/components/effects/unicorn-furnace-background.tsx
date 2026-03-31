import { useEffect, useRef, useState, type CSSProperties } from "react";
import { assetUrl } from "../../lib/asset-url";
import type { ActiveBreakpoint } from "../../lib/use-active-breakpoint";
import type { UnicornHeroLayoutConfig } from "./unicorn-hero-background";
import type {
  UnicornStudioApi,
  UnicornStudioBaseScene,
} from "./unicorn-studio-types";

type UnicornFurnaceBackgroundProps = {
  breakpoint?: ActiveBreakpoint;
  className?: string;
  layout?: UnicornHeroLayoutConfig;
};

type UnicornSceneLayer = {
  id?: string;
  src?: string;
};

type UnicornScenePayload = {
  layers?: UnicornSceneLayer[];
};

type UnicornStudioScene = UnicornStudioBaseScene;
type UnicornFurnaceScene = UnicornStudioBaseScene & {
  refresh?: () => void;
  renderFrame?: () => void;
};
type UnicornFurnaceWindow = Window & {
  UnicornStudio?: UnicornStudioApi;
  __portfolioUnicornFurnaceRuntimePromise__?: Promise<UnicornStudioApi>;
};

const runtimeUrl = assetUrl("/effects/unicorn-furnace/unicorn-runtime.txt");
const sceneUrl = assetUrl("/effects/unicorn-furnace/scene.json");
const furnaceBaseUrl = assetUrl("/effects/unicorn-furnace/furnace-base.png");
const furnaceOverlayUrl = assetUrl("/effects/unicorn-furnace/furnace-overlay.png");
const FURNACE_ARTBOARD_WIDTH = 1440;
const FURNACE_ARTBOARD_HEIGHT = 1230;
const FURNACE_FADE_IN_MS = 520;
const FURNACE_REVEAL_DELAY_MS = 140;
const EDGE_FADE_GAIN = 1.9;
let furnaceWarmupPromise: Promise<void> | null = null;
let runtimeSourcePromise: Promise<string> | null = null;
let furnaceImageWarmupPromise: Promise<void> | null = null;

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

function preloadImageAsset(src: string) {
  return new Promise<void>((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      if ("decode" in image) {
        image.decode().catch(() => undefined).finally(() => resolve());
        return;
      }

      resolve();
    };
    image.onerror = () => reject(new Error(`Falha ao pré-carregar ${src}`));
    image.src = src;

    if (image.complete) {
      resolve();
    }
  });
}

function warmupImageAssets() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (furnaceImageWarmupPromise) {
    return furnaceImageWarmupPromise;
  }

  furnaceImageWarmupPromise = Promise.all([
    preloadImageAsset(furnaceBaseUrl),
    preloadImageAsset(furnaceOverlayUrl),
  ])
    .then(() => undefined)
    .catch((error) => {
      furnaceImageWarmupPromise = null;
      throw error;
    });

  return furnaceImageWarmupPromise;
}

async function fetchRuntimeSource() {
  if (runtimeSourcePromise) {
    return runtimeSourcePromise;
  }

  runtimeSourcePromise = fetch(runtimeUrl)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Falha ao aquecer runtime Furnace: ${response.status}`);
      }

      return response.text();
    })
    .catch((error) => {
      runtimeSourcePromise = null;
      throw error;
    });

  return runtimeSourcePromise;
}

export function warmupUnicornFurnaceEffect() {
  if (typeof window === "undefined" || !canUseWebGL()) {
    return Promise.resolve();
  }

  if (furnaceWarmupPromise) {
    return furnaceWarmupPromise;
  }

  furnaceWarmupPromise = Promise.all([
    fetchRuntimeSource(),
    fetch(sceneUrl).then((response) => {
      if (!response.ok) {
        throw new Error(`Falha ao aquecer cena Furnace: ${response.status}`);
      }

      return response.text();
    }),
    warmupImageAssets(),
  ])
    .then(() => undefined)
    .catch((error) => {
      furnaceWarmupPromise = null;
      throw error;
    });

  return furnaceWarmupPromise;
}

function loadRuntime() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Window indisponível."));
  }

  const unicornWindow = window as UnicornFurnaceWindow;

  if (unicornWindow.UnicornStudio) {
    return Promise.resolve(unicornWindow.UnicornStudio);
  }

  if (unicornWindow.__portfolioUnicornFurnaceRuntimePromise__) {
    return unicornWindow.__portfolioUnicornFurnaceRuntimePromise__;
  }

  unicornWindow.__portfolioUnicornFurnaceRuntimePromise__ = fetchRuntimeSource()
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
      unicornWindow.__portfolioUnicornFurnaceRuntimePromise__ = undefined;
      throw error;
    });

  return unicornWindow.__portfolioUnicornFurnaceRuntimePromise__;
}

async function buildSceneObjectUrl() {
  const response = await fetch(sceneUrl);

  if (!response.ok) {
    throw new Error(`Falha ao carregar cena Furnace: ${response.status}`);
  }

  const scene = (await response.json()) as UnicornScenePayload;

  scene.layers = (scene.layers ?? []).map((layer) => {
    if (layer.id === "image") {
      return {
        ...layer,
        src: furnaceBaseUrl,
      };
    }

    if (layer.id === "image1" || layer.id === "image2") {
      return {
        ...layer,
        src: furnaceOverlayUrl,
      };
    }

    return layer;
  });

  return URL.createObjectURL(new Blob([JSON.stringify(scene)], { type: "application/json" }));
}

function getFurnaceBackgroundStyle(
  layout: UnicornHeroLayoutConfig | undefined,
  breakpoint: ActiveBreakpoint,
): CSSProperties {
  if (!layout) {
    return {
      bottom: "0",
      width: "max(100%, 100vw)",
      left: "50%",
      transform: "translateX(-50%)",
      aspectRatio: `${FURNACE_ARTBOARD_WIDTH} / ${FURNACE_ARTBOARD_HEIGHT}`,
    } satisfies CSSProperties;
  }

  const vignette = layout[breakpoint].vignette;
  const leftFade = `calc(${vignette.leftFade} * ${EDGE_FADE_GAIN})`;
  const rightFade = `calc(${vignette.rightFade} * ${EDGE_FADE_GAIN})`;
  const topFade = `calc(${vignette.topFade} * ${EDGE_FADE_GAIN})`;
  const bottomFade = `calc(${vignette.bottomFade} * ${EDGE_FADE_GAIN})`;
  const mask = layout.useVignette
    ? [
        `linear-gradient(to right, transparent 0%, black ${leftFade}, black calc(100% - ${rightFade}), transparent 100%)`,
        `linear-gradient(to bottom, transparent 0%, black ${topFade}, black calc(100% - ${bottomFade}), transparent 100%)`,
      ].join(", ")
    : undefined;
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
    aspectRatio: `${FURNACE_ARTBOARD_WIDTH} / ${FURNACE_ARTBOARD_HEIGHT}`,
  } satisfies CSSProperties;
}

export function UnicornFurnaceBackground({
  breakpoint = "desktop",
  className = "",
  layout,
}: UnicornFurnaceBackgroundProps) {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const container = sceneRef.current;

    if (!container) {
      return undefined;
    }

    if (!canUseWebGL()) {
      return undefined;
    }

    let disposed = false;
    let scene: UnicornFurnaceScene | null = null;
    let sceneObjectUrl: string | null = null;
    let revealFrameA = 0;
    let revealFrameB = 0;
    let refreshFrame = 0;
    let revealTimer = 0;
    setIsVisible(false);

    const refreshScene = () => {
      if (!scene || disposed) {
        return;
      }

      window.cancelAnimationFrame(refreshFrame);
      refreshFrame = window.requestAnimationFrame(() => {
        scene?.refresh?.();
        scene?.renderFrame?.();
      });
    };

    const handleViewportChange = () => {
      refreshScene();
    };

    Promise.all([warmupUnicornFurnaceEffect(), loadRuntime(), buildSceneObjectUrl()])
      .then(([, runtime, nextSceneObjectUrl]) => {
        sceneObjectUrl = nextSceneObjectUrl;

        return runtime.addScene({
          element: container,
          filePath: nextSceneObjectUrl,
          interactivity: {
            mouse: {
              disableMobile: false,
            },
          },
          lazyLoad: false,
        });
      })
      .then((nextScene) => {
        if (disposed) {
          nextScene?.destroy?.();
          return;
        }

        scene = nextScene;
        refreshScene();
        revealFrameA = window.requestAnimationFrame(() => {
          revealFrameB = window.requestAnimationFrame(() => {
            revealTimer = window.setTimeout(() => {
              if (!disposed) {
                setIsVisible(true);
              }
            }, FURNACE_REVEAL_DELAY_MS);
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });

    window.addEventListener("resize", handleViewportChange, { passive: true });
    window.addEventListener("orientationchange", handleViewportChange, { passive: true });

    return () => {
      disposed = true;
      window.cancelAnimationFrame(revealFrameA);
      window.cancelAnimationFrame(revealFrameB);
      window.cancelAnimationFrame(refreshFrame);
      window.clearTimeout(revealTimer);
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("orientationchange", handleViewportChange);
      scene?.destroy?.();

      if (sceneObjectUrl) {
        URL.revokeObjectURL(sceneObjectUrl);
      }
    };
  }, [breakpoint]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncPreference);
    };
  }, []);

  const backgroundStyle = getFurnaceBackgroundStyle(layout, breakpoint);
  const resolvedOpacity =
    typeof backgroundStyle.opacity === "number" ? backgroundStyle.opacity : 1;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`.trim()}
      style={{
        ...backgroundStyle,
        opacity: isVisible ? resolvedOpacity : 0,
        transitionDuration: prefersReducedMotion ? "0ms" : `${FURNACE_FADE_IN_MS}ms`,
        transitionProperty: "opacity",
        transitionTimingFunction: "var(--ui-transition-standard)",
        willChange: "opacity",
      }}
    >
      <div className="absolute inset-0" ref={sceneRef} />
    </div>
  );
}
