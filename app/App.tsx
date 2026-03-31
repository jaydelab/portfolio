import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import Portfolio2026_1_86 from "./generated/Portfolio2026_1_86";
import { SplashIntro } from "./components/effects/splash-intro";
import SmoothScroll from "./components/effects/smooth-scroll";
import { warmupUnicornFurnaceEffect } from "./components/effects/unicorn-furnace-background";
import "../styles/visual-ir.css";

const DESIGN_WIDTH = 1440;
const MIN_SCALE_WIDTH = 1024;
const MARGIN_AT_1440 = 120;
const MARGIN_AT_1024 = 32;
const CONTENT_WIDTH = DESIGN_WIDTH - 2 * MARGIN_AT_1440; // 1200
const HERO_EFFECT_START_DELAY_MS = 180;

export default function App() {
  const [scale, setScale] = useState(1);
  const [isSplashDone, setIsSplashDone] = useState(false);
  const [isHeroEffectReady, setIsHeroEffectReady] = useState(false);
  const [stageHeight, setStageHeight] = useState<number | undefined>(undefined);
  const stageRef = useRef<HTMLDivElement>(null);

  const updateScale = useCallback(() => {
    const vw = window.innerWidth;

    if (vw >= DESIGN_WIDTH) {
      setScale(1);
    } else if (vw >= MIN_SCALE_WIDTH) {
      const t = (DESIGN_WIDTH - vw) / (DESIGN_WIDTH - MIN_SCALE_WIDTH);
      const targetMargin = MARGIN_AT_1440 + (MARGIN_AT_1024 - MARGIN_AT_1440) * t;
      setScale((vw - 2 * targetMargin) / CONTENT_WIDTH);
    } else {
      setScale(1);
    }
  }, []);

  const updateHeight = useCallback(() => {
    if (stageRef.current) {
      const measuredHeight = stageRef.current.getBoundingClientRect().height;
      setStageHeight(scale > 0 ? measuredHeight / scale : measuredHeight);
    }
  }, [scale]);

  const handleSplashComplete = useCallback(() => {
    setIsSplashDone(true);
  }, []);

  useEffect(() => {
    warmupUnicornFurnaceEffect().catch((error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    if (!isSplashDone) return;

    let frameA = 0;
    let frameB = 0;
    let heroEffectTimer = 0;

    frameA = window.requestAnimationFrame(() => {
      frameB = window.requestAnimationFrame(() => {
        heroEffectTimer = window.setTimeout(() => {
          setIsHeroEffectReady(true);
        }, HERO_EFFECT_START_DELAY_MS);
      });
    });

    return () => {
      window.cancelAnimationFrame(frameA);
      window.cancelAnimationFrame(frameB);
      window.clearTimeout(heroEffectTimer);
    };
  }, [isSplashDone]);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale]);

  useEffect(() => {
    updateHeight();
    const ro = new ResizeObserver(() => updateHeight());
    if (stageRef.current) ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, [updateHeight]);

  useLayoutEffect(() => {
    updateHeight();
    const frame = window.requestAnimationFrame(updateHeight);

    return () => window.cancelAnimationFrame(frame);
  }, [scale, updateHeight]);

  const isScaling = scale < 1;
  const scaledWidth = DESIGN_WIDTH * scale;
  const offsetX = isScaling ? (window.innerWidth - scaledWidth) / 2 : 0;

  // Calcula a escala adicional necessária apénas para o footer (que é 1392px de largura e pode vazar)
  const unscaledVw = isScaling ? window.innerWidth / scale : window.innerWidth;
  const maxFooterWidth = unscaledVw - 48; // 48px = 24px padding de cada lado no root container
  const footerScale = isScaling && maxFooterWidth < 1392 ? maxFooterWidth / 1392 : 1;

  return (
    <SmoothScroll>
    <SplashIntro onComplete={handleSplashComplete}>
    <div className="visual-ir-page">
      <div
        style={
          isScaling
            ? {
                width: "100%",
                height: stageHeight ? stageHeight * scale : undefined,
                overflow: "clip",
              }
            : undefined
        }
      >
        <div
          ref={stageRef}
          className="visual-ir-stage"
          style={
            (isScaling
              ? {
                  width: `${DESIGN_WIDTH}px`,
                  maxWidth: "none",
                  transform: `translateX(${offsetX}px) scale(${scale})`,
                  transformOrigin: "top left",
                  "--footer-scale": footerScale,
                }
              : {}) as React.CSSProperties
          }
        >
          <Portfolio2026_1_86 heroEffectReady={isHeroEffectReady} />
        </div>
      </div>
    </div>
    </SplashIntro>
    </SmoothScroll>
  );
}
