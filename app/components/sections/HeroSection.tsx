import React from "react";

const imgSlideshowImage = "/visual-ir-assets/fig.webp";
const imgVectorContainer = "/visual-ir-assets/vector-container.svg";

interface HeroSectionProps {
  id?: string;
  className?: string;
}

export default function HeroSection({ id, className = "" }: HeroSectionProps = {}) {
  return (
    <div id={id} className={`content-stretch flex flex-col gap-[48px] max-md:gap-[24px] items-center leading-[0] relative shrink-0 w-[996px] max-lg:w-full ${className}`.trim()} data-name="Container" data-node-id="1:89">
            <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Container" data-node-id="1:90">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container" data-node-id="1:91">
                <div className="figma-font-halant-ptbr flex flex-col justify-center min-w-full not-italic relative shrink-0 text-[#393737] text-[0px] text-center tracking-[-3.5px] w-[min-content]" data-node-id="1:92">
                  <p className="text-[70px] max-lg:text-[clamp(36px,8vw,70px)]">
                    <span className="figma-font-georgia not-italic tracking-[-3.5px] leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">Claude e Codex são</span>
                    <span className="leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">{` `}</span>
                    <span className="figma-font-halant-ptbr not-italic text-[#888787] tracking-[-3.5px] leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">funcionários,</span>
                  </p>
                </div>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid max-md:flex max-md:flex-col max-md:items-center max-md:w-full place-items-start relative shrink-0" data-name="Container" data-node-id="1:93">
                  <div className="col-1 flex h-[111px] max-md:hidden items-center justify-center ml-[366.83px] max-md:ml-0 mt-0 relative row-1 w-[139.466px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "247" } as React.CSSProperties}>
                    <div className="flex-none h-full w-full">
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
                  </div>
                  <div className="figma-font-halant-ptbr col-1 flex flex-col justify-center ml-0 mt-[11.4px] not-italic relative row-1 text-[#393737] text-[0px] text-center tracking-[-3.5px] whitespace-nowrap max-md:whitespace-normal" data-node-id="1:111">
                    <p className="text-[70px] max-lg:text-[clamp(36px,8vw,70px)]">
                      <span className="figma-font-halant-ptbr not-italic text-[#888787] tracking-[-3.5px] leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">mas</span>
                      <span className="leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">{` `}</span>
                      <span className="figma-font-georgia not-italic tracking-[-3.5px] leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">produto</span>
                    </p>
                  </div>
                  <div className="figma-font-georgia col-1 flex flex-col justify-center ml-[524.75px] max-md:ml-0 mt-[11.4px] not-italic relative row-1 text-[#393737] text-[70px] max-lg:text-[clamp(36px,8vw,70px)] text-center tracking-[-3.5px] whitespace-nowrap max-md:whitespace-normal" data-node-id="1:112">
                    <p className="leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">nasce no Figma</p>
                  </div>
                </div>
              </div>
              <div className="figma-font-geist flex flex-col font-normal justify-center opacity-50 relative shrink-0 text-[20px] max-lg:text-[clamp(16px,2.2vw,20px)] text-black text-center w-[792px] max-lg:w-full" data-node-id="1:113">
                <p className="leading-[32px] max-lg:leading-[clamp(24px,3.2vw,32px)]">Oi, eu sou o Victor. Aqui eu vou te contar sobre o que andei fazendo nestes quase 10 anos entre milhares de produtos e serviços que são usados por milhões de pessoas.</p>
              </div>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid max-md:flex max-md:flex-col max-md:w-full place-items-start relative shrink-0" data-name="Container" data-node-id="1:114">
              <div className="col-1 h-[383px] max-md:h-[240px] ml-0 mt-0 relative row-1 w-[792px] max-md:w-full max-md:relative max-md:translate-x-0 max-md:left-auto max-md:top-auto" data-name="Illustration" data-node-id="1:115">
                <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] border border-solid border-white content-stretch flex flex-col gap-[20px] items-start left-[calc(50%+0.5px)] pb-[20px] pt-[16px] rounded-[20px] top-0 w-[793px] max-md:relative max-md:translate-x-0 max-md:left-auto max-md:top-auto max-md:w-full max-md:h-[240px]" data-name="Container-illustration" data-node-id="1:125">
                  <div className="border-[rgba(255,255,255,0.06)] border-b border-solid content-stretch flex gap-[6px] h-[20px] items-start px-[16px] relative shrink-0 w-full" data-name="Pagination Dots Container" data-node-id="1:126">
                    <div className="bg-[#a3a3a3] opacity-50 rounded-[100px] shrink-0 size-[10px]" data-name="Container" data-node-id="1:127" />
                    <div className="bg-[#6a6a6a] rounded-[16777200px] shrink-0 size-[10px]" data-name="Container" data-node-id="1:128" />
                    <div className="bg-[#a3a3a3] opacity-50 rounded-[16777200px] shrink-0 size-[10px]" data-name="Container" data-node-id="1:129" />
                  </div>
                  <div className="content-stretch flex flex-col items-start px-[20px] pb-[0px] relative shrink-0 w-full" data-name="Code Container" data-node-id="1:130">
                    <pre className="figma-font-geist-mono text-[14px] max-md:text-[12px] leading-[22px] text-[rgba(255,255,255,0.5)] m-0 whitespace-pre-wrap" data-node-id="1:131">
{`import { Designer } from '@victor/core';
import { Figma, AI, Vibe, Research } from './MyWorkflow';

const victor = new Designer({ origin: 'pencil-on-paper' });
const builder = victor.evolveToBuilder();

const ecosystem = builder.build([
  new ProductThinking(),
  new DesignSystems(),
  new AIOrchestration(),
  new ShipItAnyway(),
]);

const agent = new `}<span className="text-[#EAB308]">Jade</span>{` ({ creator: builder, context: ecosystem });
await agent.run();`}
                    </pre>
                  </div>
                </div>
              </div>
              <div className="col-1 h-[20px] ml-[753px] mt-[362px] relative row-1 w-[16px] max-md:hidden" data-name="Vector Container" data-node-id="1:495">
                <div className="absolute inset-[-15%_-21.48%_-25%_-25%]">
                  <img alt="" className="block max-w-none size-full" src={imgVectorContainer} />
                </div>
              </div>
            </div>
          </div>
  );
}
