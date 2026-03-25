const imgBackground = "/visual-ir-assets/background.webp";
const imgHowIBuildAiBackground = "/visual-ir-assets/how-i-build-ai-background.webp";
const imgHowIBuildAiBlur = "/visual-ir-assets/how-i-build-ai-blur.svg";
const imgHowIBuildAiScreen = "/visual-ir-assets/how-i-build-ai-screen.webp";
const imgHowIBuildAiTabletBackground = "/visual-ir-assets/how-i-build-ai-tablet-background.webp";
const imgHowIBuildAiTabletBlur = "/visual-ir-assets/how-i-build-ai-tablet-blur.svg";
const imgHowIBuildAiTabletScreen = "/visual-ir-assets/how-i-build-ai-tablet-screen.webp";

interface HighlightsSectionProps {
  id?: string;
  className?: string;
}

export default function HighlightsSection({ id, className = "" }: HighlightsSectionProps = {}) {
  return (
    <>
      <div id={id} className={`content-stretch flex flex-col gap-[843px] max-md:gap-[96px] max-sm:gap-[72px] h-[1274px] items-center max-md:items-start pb-[35px] max-md:pb-[24px] pt-[82px] max-md:pt-[48px] px-[36px] max-md:px-[20px] max-sm:px-[16px] relative shrink-0 w-full max-w-[1200px] max-md:h-auto max-lg:hidden ${className}`.trim()} data-name="Background" data-node-id="1:988">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground} />
        <div className="content-stretch flex flex-col gap-[12px] max-md:gap-[10px] items-center max-md:items-start leading-[0] relative shrink-0 text-center max-md:text-left w-[792px] max-md:w-full" data-name="Container" data-node-id="1:989">
          <div className="figma-font-georgia flex flex-col justify-center not-italic relative shrink-0 text-[48px] max-lg:text-[clamp(28px,4.8vw,48px)] text-white tracking-[-0.96px] whitespace-nowrap max-md:whitespace-normal" data-node-id="1:990">
            <p className="leading-[normal]">O que eu andei construindo com IA</p>
          </div>
          <div className="figma-font-geist bg-clip-text bg-gradient-to-r max-md:bg-none flex flex-col font-light from-[#cfcfcf] justify-center mix-blend-color-dodge max-md:mix-blend-normal relative shrink-0 text-[18px] max-md:text-[16px] text-[transparent] max-md:text-[#dce0e6] to-[#cfcfcf] tracking-[0.5px] max-md:tracking-[0.2px] via-1/2 via-[#dce0e6] w-[792px] max-md:w-full" data-node-id="1:991" style={{ fontFeatureSettings: "'ordn'" }}>
            <p className="leading-[27px]">Nos últimos meses construí meus próprios produtos. Um deles resolve uma fricção entre design e desenvolvimento que procurei por anos e nunca encontrei, e que hoje existe só no meu repositório e no meu terminal. Eu orquestro agentes, automatizo processos, crio MCPs, CLIs e tenho meu próprio software nativo pra macOS. Uso IA pra fazer meu trabalho render e ir em lugares onde a skill técnica ainda domina, mas não de qualquer jeito ou sozinho. Não vou me rotular, mas sou curioso o bastante para aprender e executar todos os dias.</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-center justify-center max-md:justify-start pb-[11px] pt-[10px] px-[12px] max-md:px-[10px] relative shrink-0 max-md:w-full max-md:overflow-x-auto max-md:flex-nowrap scrollbar-hide" data-name="Dock" data-node-id="1:992">
          <div className="absolute bg-[rgba(255,255,255,0.5)] max-md:bg-[rgba(13,18,26,0.28)] inset-0 mix-blend-overlay max-md:mix-blend-normal rounded-[20px]" data-name="Dock Background" data-node-id="1:993" style={{ backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)", clipPath: "inset(0.3px round 19.7px)" }} />
          <div className="absolute border border-solid border-white inset-0 mix-blend-overlay pointer-events-none rounded-[20px]" />
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:994">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:995">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-1.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:996">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-2.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:997">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-3.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:998">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-4.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:999">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-5.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:1000">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-6.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:1001">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-7.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon Container" data-node-id="1:1002">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon Container.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:1007">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-8.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:1008">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-9.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:1009">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-10.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:1010">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-11.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:1011">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-12.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:1012">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-13.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:1013">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-14.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:1014">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-15.svg" />
          </div>
          <div className="relative shrink-0 size-[50px] max-md:shrink-0" data-name="Icon" data-node-id="1:1015">
            <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-16.svg" />
          </div>
        </div>
      </div>

      <div className="hidden min-[768px]:flex min-[1024px]:hidden justify-center mx-[-24px] w-[calc(100%+48px)]" data-name="HowIBuildWitfhAI-tablet" data-node-id="68:373">
        <div className="h-[788px] overflow-clip relative rounded-[16px] shrink-0 w-[684px]" data-node-id="68:374">
          <div className="absolute inset-0 bg-[#1a1a1a]" data-node-id="68:375" />
          <div className="-translate-x-1/2 absolute flex h-[460px] items-center justify-center left-1/2 mix-blend-plus-lighter top-[-74px] w-[684px]" data-node-id="68:376">
            <div className="-rotate-90 flex-none">
              <div className="h-[684px] relative w-[460px]">
                <div className="absolute inset-[-20.11%_-36.5%]">
                  <img alt="" className="block max-w-none size-full" src={imgHowIBuildAiTabletBlur} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 h-[521px] inset-x-0" data-node-id="68:377">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHowIBuildAiTabletBackground} />
          </div>
          <div className="absolute bottom-[93px] h-[486px] inset-x-0" data-node-id="68:378">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHowIBuildAiTabletScreen} />
          </div>

          <div className="absolute flex flex-col gap-[12px] left-[50px] top-[42px] w-[584px]" data-node-id="68:379">
            <div className="figma-font-georgia flex flex-col justify-center not-italic text-[32px] text-white tracking-[-0.64px] w-full" data-node-id="68:380">
              <p className="leading-[44px]">O que eu andei construindo com IA</p>
            </div>
            <div className="bg-clip-text bg-gradient-to-r figma-font-geist flex flex-col font-light from-[#cfcfcf] justify-center mix-blend-color-dodge relative text-[14px] text-[transparent] to-[#cfcfcf] via-1/2 via-[#dce0e6] w-full" style={{ fontFeatureSettings: "'ordn' 1", letterSpacing: "-0.1px" }} data-node-id="68:381">
              <p className="leading-[22px]">Nos últimos meses construí meus próprios produtos. Um deles resolve uma fricção entre design e desenvolvimento que procurei por anos e nunca encontrei, e que hoje existe só no meu repositório e no meu terminal. Eu orquestro agentes, automatizo processos, crio MCPs, CLIs e tenho meu próprio software nativo pra macOS. Uso IA pra fazer meu trabalho render e ir em lugares onde a skill técnica ainda domina, mas não de qualquer jeito ou sozinho. Não vou me rotular, mas sou curioso o bastante para aprender e executar todos os dias.</p>
            </div>
          </div>

          <div className="absolute bottom-[36px] h-[40px] left-1/2 -translate-x-1/2 w-[620px]" data-node-id="68:382">
            <div className="border border-solid border-white content-stretch flex gap-[8px] h-full items-center justify-center px-[10px] py-[8px] relative rounded-[12px] w-full">
              <div
                aria-hidden="true"
                className="absolute bg-[rgba(255,255,255,0.5)] inset-0 mix-blend-overlay pointer-events-none rounded-[12px]"
                style={{
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                }}
              />
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-1.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-2.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-3.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-4.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-5.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-6.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-7.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon Container.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-8.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-9.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-10.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-11.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-12.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-13.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-14.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-15.svg" /></div>
              <div className="relative shrink-0 size-[24px]"><img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-16.svg" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden max-md:flex flex-col w-full max-w-[480px] mx-auto mt-[62px]" data-name="HowIBuildWitfhAI-mobile">
        <div className="h-[915px] overflow-clip relative rounded-[14px] w-full" data-name="HowIBuildWitfhAI" data-node-id="67:2437">
          <div className="absolute inset-0 bg-[#1a1a1a]" data-name="background-color" data-node-id="67:2439" />
          <div className="-translate-x-1/2 absolute flex h-[411px] items-center justify-center left-[calc(50%+120px)] mix-blend-plus-lighter top-[-7px] w-[746px]" data-name="blur-effect" data-node-id="67:2440">
            <div className="-rotate-90 flex-none">
              <div className="h-[746px] relative w-[411px]">
                <div className="absolute inset-[-20.11%_-36.5%]">
                  <img alt="" className="block max-w-none size-full" src={imgHowIBuildAiBlur} />
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute h-[1094px] left-[calc(50%+51px)] top-[340px] w-[824px]" data-name="background" data-node-id="67:2442">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHowIBuildAiBackground} />
          </div>
          <div className="-translate-x-1/2 absolute bottom-[238px] h-[225px] left-1/2 w-[316px]" data-name="screen-illustration" data-node-id="67:2441">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHowIBuildAiScreen} />
          </div>

          <div className="absolute flex flex-col gap-[12px] inset-x-[20px] leading-[0] top-[20px]" data-name="Container" data-node-id="67:2504">
            <div className="figma-font-georgia flex flex-col justify-center not-italic relative shrink-0 text-[24px] text-white tracking-[-0.48px] w-full" data-node-id="67:2505">
              <p className="leading-[34px]">O que eu andei construindo com IA</p>
            </div>
            <div className="bg-clip-text bg-gradient-to-r figma-font-geist flex flex-col font-light from-[#cfcfcf] justify-center mix-blend-color-dodge relative shrink-0 text-[14px] text-transparent to-[#cfcfcf] tracking-[-0.1px] via-1/2 via-[#dce0e6] w-full" data-node-id="67:2506" style={{ fontFeatureSettings: "'ordn' 1" }}>
              <p className="leading-[22px]">Nos últimos meses construí meus próprios produtos. Um deles resolve uma fricção entre design e desenvolvimento que procurei por anos e nunca encontrei, e que hoje existe só no meu repositório e no meu terminal. Eu orquestro agentes, automatizo processos, crio MCPs, CLIs e tenho meu próprio software nativo pra macOS. Uso IA pra fazer meu trabalho render e ir em lugares onde a skill técnica ainda domina, mas não de qualquer jeito ou sozinho. Não vou me rotular, mas sou curioso o bastante para aprender e executar todos os dias.</p>
            </div>
          </div>

          <div className="absolute content-stretch flex h-[293px] items-start justify-center left-[12px] overflow-hidden p-[16px] right-[12px] rounded-tl-[20px] rounded-tr-[20px] top-[697px]" data-name="Dock Background" data-node-id="67:2443">
            <div
              aria-hidden="true"
              className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-tl-[20px] rounded-tr-[20px]"
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                clipPath: "inset(0.3px round 19.7px 19.7px 0 0)",
              }}
            />
            <div aria-hidden="true" className="absolute border border-solid border-white inset-0 mix-blend-overlay pointer-events-none rounded-tl-[20px] rounded-tr-[20px]" />
            <div className="grid grid-cols-4 grid-rows-4 gap-[12px] h-[216px] relative w-[216px]" data-node-id="67:2444">
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2445">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2447">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-2.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2449">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-1.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2451">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon Container.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2460">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-5.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2462">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-9.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2464">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-7.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2466">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-4.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2468">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-6.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2477">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-8.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2482">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-15.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2486">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-14.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2490">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-10.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2492">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-13.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2497">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-16.svg" />
              </div>
              <div className="relative shrink-0 size-[45px]" data-node-id="67:2499">
                <img alt="" className="block size-full" src="/visual-ir-assets/dock/Icon-12.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
