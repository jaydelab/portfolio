import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

type SplashIntroProps = {
  children: ReactNode;
};

const SPLASH_TEXT = "UX Victor";
const LETTER_EASE: [number, number, number, number] = [0.56, 0.22, 0.05, 0.99];
const LETTER_DURATION = 1.14;
const LETTER_STAGGER = 0.075;
const LETTER_START_DELAY = 0.08;
const LAST_CHARACTER_DELAY =
  LETTER_START_DELAY + (SPLASH_TEXT.length - 1) * LETTER_STAGGER;
const WORDMARK_FINISH_SECONDS = LAST_CHARACTER_DELAY + LETTER_DURATION;
const WORDMARK_HOLD_SECONDS = 0.16;
const CURTAIN_DURATION = 0.84;
const CURTAIN_DELAY_SECONDS = WORDMARK_FINISH_SECONDS + WORDMARK_HOLD_SECONDS;
const COMPLETE_MS = Math.round(
  (CURTAIN_DELAY_SECONDS + CURTAIN_DURATION) * 1000
);

/** Tempo total da splash em segundos — exportado para coordenação. */
export const SPLASH_DURATION_S = CURTAIN_DELAY_SECONDS + CURTAIN_DURATION;

function LogoGlyph() {
  return (
    <span className="relative mr-3 inline-flex h-7 w-7 shrink-0 items-center justify-center">
      <span className="absolute h-3.5 w-3.5 rounded-[4px] border border-white/70" />
      <span className="absolute h-1.5 w-1.5 rounded-full bg-white" />
    </span>
  );
}

function AnimatedCharacter({
  character,
  delay,
}: {
  character: string;
  delay: number;
}) {
  return (
    <motion.span
      initial={{ filter: "blur(11px)", opacity: 0.001, y: "110vh" }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: LETTER_DURATION,
        ease: LETTER_EASE,
        type: "tween",
      }}
      className="inline-block"
    >
      {character === " " ? "\u00A0" : character}
    </motion.span>
  );
}

export function SplashIntro({ children }: SplashIntroProps) {
  const [phase, setPhase] = useState<"splash" | "done">("splash");

  useEffect(() => {
    // Respeita prefers-reduced-motion — pula splash inteira
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    const prevOverflow = document.body.style.overflow;
    const prevTouch = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const timer = window.setTimeout(() => {
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouch;
      setPhase("done");
    }, COMPLETE_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouch;
    };
  }, []);

  return (
    <>
      {phase === "done" ? children : null}

      {phase === "splash" ? (
        <div className="pointer-events-none fixed inset-0 z-[9999] bg-transparent">
          <motion.div
            initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{
              delay: CURTAIN_DELAY_SECONDS,
              duration: CURTAIN_DURATION,
              ease: [0.76, 0, 0.24, 1],
              type: "tween",
            }}
            className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]"
          >
            <div className="relative flex items-center text-[38px] font-semibold tracking-[-0.04em] text-white">
              <motion.span
                initial={{ filter: "blur(11px)", opacity: 0.001, y: "110vh" }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{
                  delay: 0.04,
                  duration: LETTER_DURATION,
                  ease: LETTER_EASE,
                  type: "tween",
                }}
              >
                <LogoGlyph />
              </motion.span>

              <span
                className="inline-flex whitespace-nowrap"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {SPLASH_TEXT.split("").map((character, index) => (
                  <AnimatedCharacter
                    key={`${character}-${index}`}
                    character={character}
                    delay={LETTER_START_DELAY + index * LETTER_STAGGER}
                  />
                ))}
              </span>
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  );
}
