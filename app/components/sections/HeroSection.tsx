import React, { useRef } from "react";
import { RevealOnMount } from "../effects/reveal-on-mount";
import { UnicornFurnaceBackground } from "../effects/unicorn-furnace-background";
import {
  UnicornHeroBackground,
  type UnicornHeroLayoutConfig,
} from "../effects/unicorn-hero-background";
import {
  HeroTitleImageReveal,
  HeroTitleTextReveal,
} from "../effects/hero-title-reveal";
import SectionActionButtons from "./SectionActionButtons";
import { assetUrl } from "../../lib/asset-url";
import { useActiveBreakpoint } from "../../lib/use-active-breakpoint";

const imgSlideshowImage = assetUrl("/visual-ir-assets/fig.webp");

/* ── Unicorn Furnace: ajuste aqui, aplica em todos os breakpoints ── */
const furnaceShader = {
  enabled: true,
  center: true,
  flip: false,
  mirror: false,
  useVignette: true,
  left: "0%",
  right: "0%",
  bottom: "-35%",
  opacity: 1,
  desktop: {
    top: "auto",
    size: "max(100%, 100vw)",
    vignette: {
      topFade: "0%",
      bottomFade: "10%",
      leftFade: "0%",
      rightFade: "0%",
    },
  },
  tablet: {
    top: "auto",
    size: "max(100%, 100vw)",
    vignette: {
      topFade: "0%",
      bottomFade: "0%",
      leftFade: "0%",
      rightFade: "0%",
    },
  },
  mobile: {
    top: "auto",
    size: "max(100%, 100vw)",
    vignette: {
      topFade: "0%",
      bottomFade: "0%",
      leftFade: "0%",
      rightFade: "0%",
    },
  },
} satisfies UnicornHeroLayoutConfig;

function getNegativeBottomOffset(bottom: string, sectionMinHeight: string) {
  const normalizedBottom = bottom.trim();

  if (normalizedBottom.endsWith("%")) {
    const value = Number.parseFloat(normalizedBottom);

    if (value < 0) {
      const heightExpression =
        sectionMinHeight.startsWith("calc(") && sectionMinHeight.endsWith(")")
          ? `(${sectionMinHeight.slice(5, -1)})`
          : sectionMinHeight;

      return `calc(${heightExpression} * ${Math.abs(value) / 100})`;
    }
  }

  if (normalizedBottom.endsWith("px")) {
    const value = Number.parseFloat(normalizedBottom);

    if (value < 0) {
      return `${Math.abs(value)}px`;
    }
  }

  return undefined;
}

/* ── Unicorn White: ajuste aqui, aplica em todos os breakpoints ── */
const shader = {
  enabled: false,
  center: true,
  flip: false,
  mirror: false,
  useVignette: false,
  left: "0%",
  right: "0%",
  bottom: "0%",
  opacity: 1,
  desktop: {
    top: "-300px",
    size: "max(100%, 100vw)",
    vignette: {
      topFade: "0%",
      bottomFade: "0%",
      leftFade: "40%",
      rightFade: "40%",
    },
  },
  tablet: {
    top: "-300px",
    size: "max(100%, 100vw)",
    vignette: {
      topFade: "0%",
      bottomFade: "0%",
      leftFade: "5%",
      rightFade: "5%",
    },
  },
  mobile: {
    top: "-300px",
    size: "max(100%, 100vw)",
    vignette: {
      topFade: "0%",
      bottomFade: "0%",
      leftFade: "5%",
      rightFade: "5%",
    },
  },
} satisfies UnicornHeroLayoutConfig;

interface HeroSectionProps {
  id?: string;
  className?: string;
  heroEffectReady?: boolean;
}

export default function HeroSection({
  id,
  className = "",
  heroEffectReady = true,
}: HeroSectionProps = {}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const activeBreakpoint = useActiveBreakpoint();
  const heroMinHeight =
    activeBreakpoint === "desktop"
      ? "calc(100vh - 208px)"
      : activeBreakpoint === "tablet"
        ? "clamp(440px, calc(62svh - 100px), 600px)"
        : "clamp(360px, calc(56svh - 80px), 460px)";
  const furnaceOverflowBottom =
    furnaceShader.enabled && heroEffectReady
      ? getNegativeBottomOffset(furnaceShader.bottom, heroMinHeight)
      : undefined;

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`w-full relative flex flex-col justify-start ${className}`.trim()}
      style={{ marginBottom: furnaceOverflowBottom, minHeight: heroMinHeight }}
    >
      <h1 className="sr-only">Claude e Codex são funcionários, mas produto nasce no Figma</h1>

      {furnaceShader.enabled && heroEffectReady ? (
        <UnicornFurnaceBackground breakpoint={activeBreakpoint} layout={furnaceShader} />
      ) : null}

      {shader.enabled && heroEffectReady ? (
        <UnicornHeroBackground
          breakpoint={activeBreakpoint}
          layout={shader}
          visibilityTargetRef={sectionRef}
        />
      ) : null}

      {/* ====== Desktop ====== */}
      {activeBreakpoint === "desktop" ? (
      <div className="max-lg:hidden content-stretch flex flex-col gap-[48px] items-center leading-[0] relative z-10 shrink-0 w-full max-w-[996px] mx-auto" data-name="Container" data-node-id="1:89">
            <div className="content-stretch flex flex-col gap-[24px] items-center relative z-10 shrink-0 w-full" data-name="Container" data-node-id="1:90">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container" data-node-id="1:91">
                <div className="figma-font-halant-ptbr flex flex-col justify-center min-w-full not-italic relative shrink-0 text-[#393737] text-[0px] text-center tracking-[-3.5px] w-[min-content]" data-node-id="1:92">
                  <p className="text-[70px] max-lg:text-[clamp(36px,8vw,70px)]">
                    <HeroTitleTextReveal
                      className="figma-font-georgia not-italic tracking-[-3.5px] leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]"
                      delay={0.08}
                      text="Claude e Codex são"
                    />
                    <span className="leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">{` `}</span>
                    <HeroTitleTextReveal
                      className="figma-font-georgia not-italic text-[#888787] tracking-[-3.5px] leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]"
                      delay={0.24}
                      text="funcionários,"
                    />
                  </p>
                </div>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Container" data-node-id="1:93">
                  <HeroTitleImageReveal
                    className="col-1 flex h-[111px] items-center justify-center ml-[366.83px] mt-0 relative row-1 w-[139.466px]"
                    delay={0.6}
                    direction="y"
                  >
                  <div
                    className="flex-none h-full w-full"
                    style={{ "--transform-inner-width": "1200", "--transform-inner-height": "247" } as React.CSSProperties}
                  >
                      <div className="h-full overflow-visible relative w-full" data-name="slideshow" data-node-id="1:94">
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none pointer-events-none size-full"
                          src={imgSlideshowImage}
                          style={{
                            filter:
                              "drop-shadow(0.565px 0.565px 0.091px rgba(0, 0, 0, 0.50)) drop-shadow(1.445px 1.445px 0.627px rgba(0, 0, 0, 0.48)) drop-shadow(2.897px 2.897px 1.973px rgba(0, 0, 0, 0.46)) drop-shadow(5.492px 5.492px 4.935px rgba(0, 0, 0, 0.41)) drop-shadow(10.917px 10.917px 11.897px rgba(0, 0, 0, 0.32)) drop-shadow(24px 24px 29.691px rgba(0, 0, 0, 0.09))",
                          }}
                        />
                      </div>
                  </div>
                  </HeroTitleImageReveal>
                  <div className="figma-font-halant-ptbr col-1 flex flex-col justify-center ml-0 mt-[11.4px] not-italic relative row-1 text-[#393737] text-[0px] text-center tracking-[-3.5px] whitespace-nowrap" data-node-id="1:111">
                    <p className="text-[70px] max-lg:text-[clamp(36px,8vw,70px)]">
                      <HeroTitleTextReveal
                        className="figma-font-georgia not-italic text-[#888787] tracking-[-3.5px] leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]"
                        delay={0.36}
                        text="mas"
                      />
                      <span className="leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">{` `}</span>
                      <HeroTitleTextReveal
                        className="figma-font-georgia not-italic tracking-[-3.5px] leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]"
                        delay={0.52}
                        text="produto"
                      />
                    </p>
                  </div>
                  <div className="figma-font-georgia col-1 flex flex-col justify-center ml-[524.75px] mt-[11.4px] not-italic relative row-1 text-[#393737] text-[70px] max-lg:text-[clamp(36px,8vw,70px)] text-center tracking-[-3.5px] whitespace-nowrap" data-node-id="1:112">
                    <p className="leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">
                      <HeroTitleTextReveal
                        className="figma-font-georgia not-italic tracking-[-3.5px]"
                        delay={0.72}
                        text="nasce no Figma"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <RevealOnMount delay={0.5} className="shrink-0">
              <div className="figma-font-geist flex flex-col font-normal justify-center opacity-50 relative shrink-0 text-[20px] max-lg:text-[clamp(16px,2.2vw,20px)] text-black text-center w-[792px] max-lg:w-full" data-node-id="1:113">
                <p className="leading-[32px] max-lg:leading-[clamp(24px,3.2vw,32px)]">Oi, eu sou o Victor. Aqui eu vou te contar sobre o que andei fazendo nestes quase 10 anos entre milhares de produtos e serviços que são usados por milhões de pessoas.</p>
              </div>
              </RevealOnMount>
              <RevealOnMount delay={0.58} className="shrink-0">
                <SectionActionButtons />
              </RevealOnMount>
            </div>
      </div>
      ) : null}

      {/* ====== Tablet ====== */}
      {activeBreakpoint === "tablet" ? (
      <div className="hidden min-[768px]:flex min-[1024px]:hidden flex-col items-center relative z-10 w-full" data-name="HeroSection-tablet" data-node-id="68:57">
        <div className="content-stretch flex flex-col gap-[24px] items-center relative z-10 shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[509px]" data-node-id="68:62">
            <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-node-id="68:63">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="68:64">
                <div className="figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#393737] text-[40px] text-center tracking-[-0.8px] w-full" data-node-id="68:65">
                  <p className="leading-[48px]">
                    <HeroTitleTextReveal
                      className="figma-font-georgia not-italic tracking-[-0.8px]"
                      delay={0.08}
                      text="Claude e Codex"
                    />
                  </p>
                  <p className="leading-[48px]">
                    <HeroTitleTextReveal
                      className="figma-font-georgia not-italic tracking-[-0.8px]"
                      delay={0.18}
                      text="são"
                    />
                    <span>{` `}</span>
                    <HeroTitleTextReveal
                      className="figma-font-georgia not-italic text-[#888787] tracking-[-0.8px]"
                      delay={0.28}
                      text="funcionários,"
                    />
                  </p>
                </div>
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="68:66">
                  <div className="figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#888787] text-[40px] text-center tracking-[-0.8px] whitespace-nowrap" data-node-id="68:67">
                    <p className="leading-[48px]">
                      <HeroTitleTextReveal
                        className="figma-font-georgia not-italic text-[#888787] tracking-[-0.8px]"
                        delay={0.42}
                        text="mas"
                      />
                    </p>
                  </div>
                  <HeroTitleImageReveal
                    className="h-[56px] relative shrink-0 w-[70px]"
                    delay={0.6}
                    direction="y"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                      src={imgSlideshowImage}
                      style={{
                        filter:
                        "drop-shadow(0.565px 0.565px 0.182px rgba(0,0,0,0.5)) drop-shadow(1.445px 1.445px 1.254px rgba(0,0,0,0.48)) drop-shadow(2.897px 2.897px 3.946px rgba(0,0,0,0.46)) drop-shadow(5.492px 5.492px 9.87px rgba(0,0,0,0.41)) drop-shadow(10.917px 10.917px 23.794px rgba(0,0,0,0.32)) drop-shadow(24px 24px 59.382px rgba(0,0,0,0.09))",
                      }}
                    />
                  </HeroTitleImageReveal>
                  <div className="figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#393737] text-[40px] text-center tracking-[-0.8px] whitespace-nowrap" data-node-id="68:69">
                    <p className="leading-[48px]">
                      <HeroTitleTextReveal
                        className="figma-font-georgia not-italic tracking-[-0.8px]"
                        delay={0.52}
                        text="produto"
                      />
                    </p>
                  </div>
                </div>
                <div className="figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#393737] text-[40px] text-center tracking-[-0.8px] w-full" data-node-id="68:70">
                  <p className="leading-[48px]">
                    <HeroTitleTextReveal
                      className="figma-font-georgia not-italic tracking-[-0.8px]"
                      delay={0.72}
                      text="nasce no Figma"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <RevealOnMount delay={0.58} className="shrink-0">
            <SectionActionButtons />
          </RevealOnMount>
        </div>
      </div>
      ) : null}

      {/* ====== Mobile ====== */}
      {activeBreakpoint === "mobile" ? (
      <div className="hidden max-md:flex flex-col gap-[24px] items-center relative z-10 w-full" data-name="HeroSection-mobile" data-node-id="13:7056">
        {/* Content: title + code block */}
        <div className="relative z-10 flex flex-col gap-[24px] items-start w-full" data-node-id="13:7061">
          {/* Title group */}
          <div className="flex flex-col gap-[12px] items-center w-full" data-node-id="13:7062">
            <div className="flex flex-col items-center w-full" data-node-id="13:7063">
              {/* "Claude e Codex são funcionários," — inline recomposition at 390+ */}
              <div className="figma-font-georgia not-italic text-[clamp(30px,7.5vw,40px)] text-[#393737] text-center tracking-[-0.6px] leading-[clamp(38px,9.5vw,50px)] w-full" data-node-id="13:7064">
                <HeroTitleTextReveal
                  className="figma-font-georgia not-italic tracking-[-0.6px]"
                  delay={0.08}
                  text="Claude e Codex"
                />
                <span>{` `}</span>
                <br className="min-[390px]:hidden" />
                <HeroTitleTextReveal
                  className="figma-font-georgia not-italic tracking-[-0.6px]"
                  delay={0.18}
                  text="são"
                />
                <span>{` `}</span>
                <HeroTitleTextReveal
                  className="figma-font-georgia not-italic text-[#888787] tracking-[-0.6px]"
                  delay={0.28}
                  text="funcionários,"
                />
              </div>

              {/* "mas [image] produto" — merges "nasce no Figma" at 540+ */}
              <div className="flex flex-wrap gap-x-[8px] gap-y-0 items-center justify-center w-full" data-node-id="13:7065">
                <HeroTitleTextReveal
                  className="figma-font-georgia not-italic text-[clamp(30px,7.5vw,40px)] text-[#888787] tracking-[-0.6px] leading-[clamp(38px,9.5vw,50px)]"
                  delay={0.42}
                  text="mas"
                />
                <HeroTitleImageReveal
                  className="h-[clamp(46px,11.5vw,62px)] relative shrink-0 w-[clamp(58px,14.5vw,78px)]"
                  delay={0.6}
                  direction="y"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgSlideshowImage}
                    style={{
                      filter:
                        "drop-shadow(0.565px 0.565px 0.182px rgba(0,0,0,0.5)) drop-shadow(1.445px 1.445px 1.254px rgba(0,0,0,0.48)) drop-shadow(2.897px 2.897px 3.946px rgba(0,0,0,0.46)) drop-shadow(5.492px 5.492px 9.87px rgba(0,0,0,0.41)) drop-shadow(10.917px 10.917px 23.794px rgba(0,0,0,0.32)) drop-shadow(24px 24px 59.382px rgba(0,0,0,0.09))",
                    }}
                  />
                </HeroTitleImageReveal>
                <HeroTitleTextReveal
                  className="figma-font-georgia not-italic text-[clamp(30px,7.5vw,40px)] text-[#393737] tracking-[-0.6px] leading-[clamp(38px,9.5vw,50px)]"
                  delay={0.52}
                  text="produto"
                />
                <span className="hidden min-[540px]:inline">
                  <HeroTitleTextReveal
                    className="figma-font-georgia not-italic text-[clamp(30px,7.5vw,40px)] text-[#393737] tracking-[-0.6px] leading-[clamp(38px,9.5vw,50px)]"
                    delay={0.72}
                    text="nasce no Figma"
                  />
                </span>
              </div>

              {/* "nasce no Figma" — hides at 540+ where it merges into flex row */}
              <div className="min-[540px]:hidden figma-font-georgia not-italic text-[clamp(30px,7.5vw,40px)] text-[#393737] tracking-[-0.6px] text-center" data-node-id="13:7069">
                <p className="leading-[clamp(38px,9.5vw,50px)]">
                  <HeroTitleTextReveal
                    className="figma-font-georgia not-italic tracking-[-0.6px]"
                    delay={0.72}
                    text="nasce no Figma"
                  />
                </p>
              </div>
            </div>
          </div>
          <RevealOnMount delay={0.58} className="flex w-full justify-center">
            <SectionActionButtons />
          </RevealOnMount>
        </div>
      </div>
      ) : null}
    </div>
  );
}
