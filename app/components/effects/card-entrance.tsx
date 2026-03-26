import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

type CardEntranceProps = {
  children: ReactNode;
  /** Classes CSS repassadas ao container externo. */
  className?: string;
};

/**
 * Wrapper que aplica:
 * 1. Entrada 3D (rotateX + scale + opacity) ao montar.
 * 2. Saída suave ao rolar (fade conforme o card sobe no viewport).
 *
 * O children permanece intacto — o efeito é puramente no wrapper.
 * Usa apenas transform + opacity para performance.
 */
export function CardEntrance({ children, className = "" }: CardEntranceProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const entryProgress = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 26,
    mass: 0.9,
    stiffness: 140,
  });

  const exitProgress = useTransform(smoothProgress, [0.5, 0.85], [0, 1]);

  const visibilityProgress = useTransform(() => {
    const entered = entryProgress.get();
    const exiting = exitProgress.get();
    return Math.max(0, Math.min(1, entered * (1 - exiting)));
  });

  const opacity = useTransform(visibilityProgress, [0, 0.45, 1], [0, 0.92, 1]);
  const rotateX = useTransform(visibilityProgress, [0, 1], [35, 0]);
  const scale = useTransform(visibilityProgress, [0, 1], [0.8, 1]);
  const y = useTransform(visibilityProgress, [0, 1], [-10, 0]);

  useEffect(() => {
    if (shouldReduceMotion) {
      entryProgress.set(1);
      return;
    }

    entryProgress.set(0);
    const controls = animate(entryProgress, 1, {
      duration: 1.45,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [entryProgress, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <div className={className || undefined}>{children}</div>;
  }

  return (
    <div
      ref={containerRef}
      className={`[perspective:3962px] ${className}`.trim()}
    >
      <motion.div
        style={{
          opacity,
          rotateX,
          scale,
          transformOrigin: "center center",
          transformStyle: "preserve-3d",
          willChange: "transform, opacity",
          y,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
