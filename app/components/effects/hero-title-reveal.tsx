import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

const TITLE_TEXT_EASE: [number, number, number, number] = [0.44, 0, 0.56, 1];
const TITLE_IMAGE_SPRING = {
  damping: 30,
  mass: 1.4,
  stiffness: 137,
} as const;

type HeroTitleTextRevealProps = {
  text: string;
  delay: number;
  className?: string;
  noWrap?: boolean;
};

type HeroTitleImageRevealProps = {
  children: ReactNode;
  delay: number;
  direction?: "x" | "y";
  className?: string;
};

type HeroTitleHighlightRevealProps = {
  text: string;
  delay: number;
  className?: string;
};

export function HeroTitleTextReveal({
  text,
  delay,
  className = "",
  noWrap = true,
}: HeroTitleTextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const scopeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(scopeRef, { amount: 0.45, once: true });

  if (shouldReduceMotion) {
    return <span className={className || undefined}>{text}</span>;
  }

  const words = text.split(" ");

  return (
    <span ref={scopeRef} className={`inline ${noWrap ? "whitespace-nowrap" : ""} ${className}`.trim()}>
      {words.map((word, wordIndex) => {
        const charactersBeforeWord = words
          .slice(0, wordIndex)
          .reduce((total, currentWord) => total + currentWord.length, 0);

        return (
          <span key={`${text}-word-${wordIndex}`} className="inline">
            {word.split("").map((character, charIndex) => (
              <motion.span
                key={`${text}-${wordIndex}-${charIndex}`}
                initial={{ filter: "blur(10px)", opacity: 0.001, y: 10 }}
                animate={isInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : { filter: "blur(10px)", opacity: 0.001, y: 10 }}
                transition={{
                  delay: delay + (charactersBeforeWord + wordIndex + charIndex) * 0.024,
                  duration: 0.4,
                  ease: TITLE_TEXT_EASE,
                }}
                className="inline-block"
              >
                {character}
              </motion.span>
            ))}
            {wordIndex < words.length - 1 ? " " : null}
          </span>
        );
      })}
    </span>
  );
}

export function HeroTitleImageReveal({
  children,
  delay,
  direction = "y",
  className = "",
}: HeroTitleImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const scopeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(scopeRef, { amount: 0.45, once: true });

  if (shouldReduceMotion) {
    return <span className={className || undefined}>{children}</span>;
  }

  return (
    <motion.span
      ref={scopeRef}
      initial={{
        opacity: 0.001,
        x: direction === "x" ? 20 : 0,
        y: direction === "y" ? 20 : 0,
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : {
              opacity: 0.001,
              x: direction === "x" ? 20 : 0,
              y: direction === "y" ? 20 : 0,
            }
      }
      transition={{
        ...TITLE_IMAGE_SPRING,
        delay,
        type: "spring",
      }}
      className={`inline-flex shrink-0 ${className}`.trim()}
    >
      {children}
    </motion.span>
  );
}

export function HeroTitleHighlightReveal({
  text,
  delay,
  className = "",
}: HeroTitleHighlightRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const scopeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(scopeRef, { amount: 0.45, once: true });

  if (shouldReduceMotion) {
    return <span className={className || undefined}>{text}</span>;
  }

  return (
    <motion.span
      ref={scopeRef}
      initial={{ filter: "blur(10px)", opacity: 0.001, y: 10 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : { filter: "blur(10px)", opacity: 0.001, y: 10 }}
      transition={{
        delay,
        duration: 0.42,
        ease: TITLE_TEXT_EASE,
      }}
      className={className || undefined}
    >
      {text}
    </motion.span>
  );
}
