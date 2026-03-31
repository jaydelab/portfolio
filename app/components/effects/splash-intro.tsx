import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

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
/** Tempo total da splash em segundos — exportado para coordenação. */
export const SPLASH_DURATION_S = CURTAIN_DELAY_SECONDS + CURTAIN_DURATION;
const FONT_STABILIZE_TIMEOUT_MS = 1600;

async function waitForFontsStable() {
  if (typeof document === "undefined" || !("fonts" in document)) {
    return;
  }

  await Promise.race([
    document.fonts.ready.catch(() => undefined),
    new Promise((resolve) => window.setTimeout(resolve, FONT_STABILIZE_TIMEOUT_MS)),
  ]);

  await new Promise<void>((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => resolve());
    });
  });
}

function LogoGlyph() {
  return (
    <span className="relative inline-flex h-[62px] w-[62px] shrink-0 items-center justify-center">
      <svg
        aria-hidden="true"
        className="block h-[62px] w-[62px] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.12)]"
        fill="none"
        viewBox="0 0 24 28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.36008 22.159C9.08087 22.6608 8.54109 22.9979 7.9669 22.9982L5.64418 22.9998C4.91975 22.9985 4.26737 22.8002 4.04097 21.8602C3.97867 21.6016 4.00593 21.1216 4.00599 20.8373L4.00608 19.3857L4.00962 9.61191C4.00968 9.43854 4.1505 9.29816 4.32387 9.29865C4.4913 9.29912 4.6265 9.42849 4.62799 9.59591C4.63865 10.7971 4.62851 14.954 4.6285 15.3327L4.62925 17.6641C4.62889 17.8139 4.62378 18.0441 4.62211 18.2835C4.61814 18.8525 5.04921 19.5972 5.33211 19.1035C5.63286 18.5787 5.92472 18.0494 6.21859 17.5199L7.88866 14.5124L12.708 5.83273C13.1014 5.17437 13.4568 4.46023 13.8429 3.79345C14.1177 3.31896 14.6207 2.99985 15.169 2.99999L18.6359 3.00086C19.239 3.00101 19.6313 3.66686 19.3376 4.19367L17.6031 7.32561L12.6414 16.254L10.106 20.8197L9.36008 22.159Z"
          fill="url(#splash-logo-fill)"
          fillOpacity="0.5"
          shapeRendering="geometricPrecision"
        />
        <path
          d="M5.64551 22.4998C5.31815 22.4992 5.07972 22.4522 4.91113 22.3523C4.7637 22.2649 4.61433 22.1041 4.52734 21.7429C4.5113 21.6761 4.50098 21.5445 4.5 21.3562C4.49955 21.2685 4.50134 21.1784 4.50293 21.0896C4.50447 21.0035 4.50584 20.9143 4.50586 20.8376L4.50586 19.4363C4.60973 19.5644 4.78623 19.7307 5.04395 19.7605C5.36218 19.7973 5.58526 19.6165 5.71582 19.4314L5.76562 19.3523L6.65625 17.7625L8.32617 14.7546L13.1377 6.0896C13.3404 5.7503 13.5317 5.3983 13.7178 5.05444C13.9055 4.7076 14.0868 4.36938 14.2754 4.0437C14.4701 3.70767 14.8169 3.49967 15.1689 3.49976L18.6357 3.50073C18.8586 3.50079 19.0082 3.75762 18.9014 3.94995L18.9004 3.9519L17.167 7.08374L17.166 7.08276L12.2041 16.0115L9.66992 20.5769L9.66895 20.5759L8.92285 21.9158C8.72619 22.2691 8.34822 22.4975 7.9668 22.4978L5.64551 22.4998Z"
          shapeRendering="geometricPrecision"
          stroke="url(#splash-logo-stroke)"
          strokeOpacity="0.3"
        />
        <defs>
          <linearGradient
            id="splash-logo-fill"
            gradientUnits="userSpaceOnUse"
            x1="17.5251"
            x2="17.2057"
            y1="2.88357"
            y2="18.5439"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient
            id="splash-logo-stroke"
            cx="0"
            cy="0"
            gradientTransform="matrix(14.2156 16.4557 -17.6422 25.1993 4.89219 2.99976)"
            gradientUnits="userSpaceOnUse"
            r="1"
          >
            <stop offset="0.309213" stopColor="white" />
            <stop offset="0.593551" stopColor="white" stopOpacity="0" />
            <stop offset="0.70117" stopColor="white" stopOpacity="0" />
            <stop offset="0.880693" stopColor="white" />
          </radialGradient>
        </defs>
      </svg>
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
      let cancelled = false;

      void (async () => {
        await waitForFontsStable();
        if (cancelled) return;
        setPhase("done");
        onComplete?.();
      })();

      return () => {
        cancelled = true;
      };
    }

    const prevOverflow = document.body.style.overflow;
    const prevTouch = document.body.style.touchAction;
    let cancelled = false;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const timer = window.setTimeout(() => {
      void (async () => {
        await waitForFontsStable();
        if (cancelled) return;

        document.body.style.overflow = prevOverflow;
        document.body.style.touchAction = prevTouch;
        setPhase("done");
        onComplete?.();
      })();
    }, COMPLETE_MS);

    return () => {
      cancelled = true;
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
