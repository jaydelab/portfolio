import { useState, useEffect, useRef, useCallback } from "react";
import Portfolio2026_1_86 from "./generated/Portfolio2026_1_86";
import "../styles/visual-ir.css";

const DESIGN_WIDTH = 1440;
const MIN_SCALE_WIDTH = 1024;
const MARGIN_AT_1440 = 120;
const MARGIN_AT_1024 = 32;
const CONTENT_WIDTH = DESIGN_WIDTH - 2 * MARGIN_AT_1440; // 1200

export default function App() {
  const [scale, setScale] = useState(1);
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
      setStageHeight(stageRef.current.scrollHeight);
    }
  }, []);

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

  const isScaling = scale < 1;
  const scaledWidth = DESIGN_WIDTH * scale;
  const offsetX = isScaling ? (window.innerWidth - scaledWidth) / 2 : 0;

  return (
    <div className="visual-ir-page">
      <div
        style={
          isScaling
            ? {
                width: "100%",
                height: stageHeight ? stageHeight * scale : undefined,
                overflow: "hidden",
              }
            : undefined
        }
      >
        <div
          ref={stageRef}
          className="visual-ir-stage"
          style={
            isScaling
              ? {
                  width: `${DESIGN_WIDTH}px`,
                  maxWidth: "none",
                  transform: `translateX(${offsetX}px) scale(${scale})`,
                  transformOrigin: "top left",
                }
              : undefined
          }
        >
          <Portfolio2026_1_86 />
        </div>
      </div>
    </div>
  );
}

