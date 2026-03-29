import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { assetUrl } from "../../lib/asset-url";

type SplashIntroProps = {
  children: ReactNode;
  onComplete?: () => void;
};

const SPLASH_TEXT = "UX Victor";
const LETTER_EASE: [number, number, number, number] = [0.56, 0.22, 0.05, 0.99];
const LETTER_DURATION = 0.72;
const LETTER_STAGGER = 0.05;
const LETTER_START_DELAY = 0.04;
const LAST_CHARACTER_DELAY =
  LETTER_START_DELAY + (SPLASH_TEXT.length - 1) * LETTER_STAGGER;
const WORDMARK_FINISH_SECONDS = LAST_CHARACTER_DELAY + LETTER_DURATION;
const WORDMARK_HOLD_SECONDS = 0.08;
const CURTAIN_DURATION = 0.48;
const CURTAIN_DELAY_SECONDS = WORDMARK_FINISH_SECONDS + WORDMARK_HOLD_SECONDS;
const COMPLETE_MS = Math.round(
  (CURTAIN_DELAY_SECONDS + CURTAIN_DURATION) * 1000
);
const imgSplashLogo = assetUrl("/visual-ir-assets/splash-logo.svg");

/** Tempo total da splash em segundos — exportado para coordenação. */
export const SPLASH_DURATION_S = CURTAIN_DELAY_SECONDS + CURTAIN_DURATION;

function LogoGlyph() {
  return (
    <span className="relative inline-flex h-[62px] w-[62px] shrink-0 items-center justify-center">
      <img alt="" className="block h-[62px] w-[62px]" src={imgSplashLogo} />
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
      initial={{ opacity: 0.001, y: "110vh" }}
      animate={{ opacity: 1, y: 0 }}
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

export function SplashIntro({ children, onComplete }: SplashIntroProps) {
  const [phase, setPhase] = useState<"splash" | "done">("splash");

  useEffect(() => {
    // Respeita prefers-reduced-motion — pula splash inteira
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      onComplete?.();
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
      onComplete?.();
    }, COMPLETE_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouch;
    };
  }, [onComplete]);

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
            <div className="relative flex items-center gap-4 text-[38px] font-semibold leading-none tracking-[-0.04em] text-white">
              <motion.span
                initial={{ opacity: 0.001, y: "110vh" }}
                animate={{ opacity: 1, y: 0 }}
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
                className="inline-flex items-center whitespace-nowrap"
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
