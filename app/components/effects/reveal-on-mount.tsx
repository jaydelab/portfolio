import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const REVEAL_EASE: [number, number, number, number] = [0.44, 0, 0.56, 1];

type RevealOnMountProps = {
  children: ReactNode;
  /** Atraso antes do início da animação (segundos). */
  delay?: number;
  /** Duração da animação (segundos). */
  duration?: number;
  /** Classes CSS repassadas ao wrapper. */
  className?: string;
};

/**
 * Wrapper que aplica reveal (blur → nítido, fade-in, slide-up)
 * ao montar. Renderiza como `<div>` com as classes fornecidas —
 * o estado final é visualmente idêntico ao conteúdo sem wrapper.
 */
export function RevealOnMount({
  children,
  delay = 0,
  duration = 0.55,
  className = "",
}: RevealOnMountProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className || undefined}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: REVEAL_EASE }}
      className={className || undefined}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
