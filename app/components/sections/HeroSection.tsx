import React from "react";

const imgSlideshowImage = "/visual-ir-assets/fig.webp";
const imgVectorContainer = "/visual-ir-assets/vector-container.svg";

interface HeroSectionProps {
  id?: string;
  className?: string;
}

export default function HeroSection({ id, className = "" }: HeroSectionProps = {}) {
  return (
    <div id={id} className={`w-[996px] max-lg:w-full ${className}`.trim()}>
      {/* ====== Desktop ====== */}
      <div className="max-[768.99px]:hidden content-stretch flex flex-col gap-[48px] items-center leading-[0] relative shrink-0 w-full" data-name="Container" data-node-id="1:89">
            <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Container" data-node-id="1:90">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container" data-node-id="1:91">
                <div className="figma-font-halant-ptbr flex flex-col justify-center min-w-full not-italic relative shrink-0 text-[#393737] text-[0px] text-center tracking-[-3.5px] w-[min-content]" data-node-id="1:92">
                  <p className="text-[70px] max-lg:text-[clamp(36px,8vw,70px)]">
                    <span className="figma-font-georgia not-italic tracking-[-3.5px] leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">Claude e Codex são</span>
                    <span className="leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">{` `}</span>
                    <span className="figma-font-halant-ptbr not-italic text-[#888787] tracking-[-3.5px] leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">funcionários,</span>
                  </p>
                </div>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Container" data-node-id="1:93">
                  <div className="col-1 flex h-[111px] items-center justify-center ml-[366.83px] mt-0 relative row-1 w-[139.466px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "247" } as React.CSSProperties}>
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
                  <div className="figma-font-halant-ptbr col-1 flex flex-col justify-center ml-0 mt-[11.4px] not-italic relative row-1 text-[#393737] text-[0px] text-center tracking-[-3.5px] whitespace-nowrap" data-node-id="1:111">
                    <p className="text-[70px] max-lg:text-[clamp(36px,8vw,70px)]">
                      <span className="figma-font-halant-ptbr not-italic text-[#888787] tracking-[-3.5px] leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">mas</span>
                      <span className="leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">{` `}</span>
                      <span className="figma-font-georgia not-italic tracking-[-3.5px] leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">produto</span>
                    </p>
                  </div>
                  <div className="figma-font-georgia col-1 flex flex-col justify-center ml-[524.75px] mt-[11.4px] not-italic relative row-1 text-[#393737] text-[70px] max-lg:text-[clamp(36px,8vw,70px)] text-center tracking-[-3.5px] whitespace-nowrap" data-node-id="1:112">
                    <p className="leading-[90px] max-lg:leading-[clamp(44px,10vw,90px)]">nasce no Figma</p>
                  </div>
                </div>
              </div>
              <div className="figma-font-geist flex flex-col font-normal justify-center opacity-50 relative shrink-0 text-[20px] max-lg:text-[clamp(16px,2.2vw,20px)] text-black text-center w-[792px] max-lg:w-full" data-node-id="1:113">
                <p className="leading-[32px] max-lg:leading-[clamp(24px,3.2vw,32px)]">Oi, eu sou o Victor. Aqui eu vou te contar sobre o que andei fazendo nestes quase 10 anos entre milhares de produtos e serviços que são usados por milhões de pessoas.</p>
              </div>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Container" data-node-id="1:114">
              <div className="col-1 h-[383px] ml-0 mt-0 relative row-1 w-[792px]" data-name="Illustration" data-node-id="1:115">
                <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] border border-solid border-white content-stretch flex flex-col gap-[20px] items-start left-[calc(50%+0.5px)] pb-[20px] pt-[16px] rounded-[20px] top-0 w-[793px]" data-name="Container-illustration" data-node-id="1:125">
                  <div className="border-[rgba(255,255,255,0.06)] border-b border-solid content-stretch flex gap-[6px] h-[20px] items-start px-[16px] relative shrink-0 w-full" data-name="Pagination Dots Container" data-node-id="1:126">
                    <div className="bg-[#a3a3a3] opacity-50 rounded-[100px] shrink-0 size-[10px]" data-name="Container" data-node-id="1:127" />
                    <div className="bg-[#6a6a6a] rounded-[16777200px] shrink-0 size-[10px]" data-name="Container" data-node-id="1:128" />
                    <div className="bg-[#a3a3a3] opacity-50 rounded-[16777200px] shrink-0 size-[10px]" data-name="Container" data-node-id="1:129" />
                  </div>
                  <div className="content-stretch flex flex-col items-start px-[20px] pb-[0px] relative shrink-0 w-full" data-name="Code Container" data-node-id="1:130">
                    <pre className="figma-font-geist-mono text-[14px] leading-[22px] text-[rgba(255,255,255,0.5)] m-0 whitespace-pre-wrap" data-node-id="1:131">
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
              <div className="col-1 h-[20px] ml-[753px] mt-[362px] relative row-1 w-[16px]" data-name="Vector Container" data-node-id="1:495">
                <div className="absolute inset-[-15%_-21.48%_-25%_-25%]">
                  <img alt="" className="block max-w-none size-full" src={imgVectorContainer} />
                </div>
              </div>
            </div>
      </div>

      {/* ====== Tablet ====== */}
      <div className="hidden min-[768px]:flex min-[769px]:hidden flex-col items-center mx-[-24px]" style={{ width: "calc(100% + 48px)" }} data-name="HeroSection-tablet" data-node-id="68:57">
        <div className="content-stretch flex flex-col gap-[52px] items-center relative shrink-0 w-full">
          <div className="backdrop-blur-[25px] bg-[rgba(0,0,0,0.55)] flex h-[30px] items-center justify-center px-[12px] rounded-[18px] shrink-0" data-name="Badge" data-node-id="68:58">
            <div className="flex gap-[7px] items-center" data-node-id="68:59">
              <div className="bg-[#80f571] rounded-[50px] shrink-0 size-[8px]" data-node-id="68:60" />
              <div className="figma-font-geist font-medium text-[12px] text-white whitespace-nowrap" data-node-id="68:61">
                <p className="leading-[normal]">Open to Work</p>
              </div>
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[509px]" data-node-id="68:62">
            <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-node-id="68:63">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="68:64">
                <div className="figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#393737] text-[40px] text-center tracking-[-0.8px] w-full" data-node-id="68:65">
                  <p className="leading-[48px]">Claude e Codex</p>
                  <p className="leading-[48px]">
                    <span>{`são `}</span>
                    <span className="text-[#888787]">funcionários,</span>
                  </p>
                </div>
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="68:66">
                  <div className="figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#888787] text-[40px] text-center tracking-[-0.8px] whitespace-nowrap" data-node-id="68:67">
                    <p className="leading-[48px]">{`mas `}</p>
                  </div>
                  <div className="h-[56px] relative shrink-0 w-[70px]" data-node-id="68:68">
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                      src={imgSlideshowImage}
                      style={{
                        filter:
                          "drop-shadow(0.565px 0.565px 0.182px rgba(0,0,0,0.5)) drop-shadow(1.445px 1.445px 1.254px rgba(0,0,0,0.48)) drop-shadow(2.897px 2.897px 3.946px rgba(0,0,0,0.46)) drop-shadow(5.492px 5.492px 9.87px rgba(0,0,0,0.41)) drop-shadow(10.917px 10.917px 23.794px rgba(0,0,0,0.32)) drop-shadow(24px 24px 59.382px rgba(0,0,0,0.09))",
                      }}
                    />
                  </div>
                  <div className="figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#393737] text-[40px] text-center tracking-[-0.8px] whitespace-nowrap" data-node-id="68:69">
                    <p className="leading-[48px]">produto</p>
                  </div>
                </div>
                <div className="figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#393737] text-[40px] text-center tracking-[-0.8px] w-full" data-node-id="68:70">
                  <p className="leading-[48px]">nasce no Figma</p>
                </div>
              </div>
            </div>

            <div className="bg-[rgba(0,0,0,0.8)] border border-solid border-white content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] rounded-[20px] shrink-0 w-full" data-name="Container-illustration" data-node-id="68:71">
              <div className="border-[rgba(255,255,255,0.06)] border-b border-solid content-stretch flex items-center justify-between px-[16px] relative shrink-0 w-full" data-node-id="68:72">
                <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0" data-node-id="68:73">
                  <div className="bg-[#a3a3a3] opacity-50 rounded-full shrink-0 size-[8px]" data-node-id="68:74" />
                  <div className="bg-[#6a6a6a] rounded-full shrink-0 size-[8px]" data-node-id="68:75" />
                  <div className="bg-[#a3a3a3] opacity-50 rounded-full shrink-0 size-[8px]" data-node-id="68:76" />
                </div>
                <div className="h-[14px] relative shrink-0 w-[11.2px]" data-node-id="68:77">
                  <div className="absolute inset-[-21.43%_-32.2%_-35.71%_-35.71%]">
                    <img alt="" className="block max-w-none size-full" src={imgVectorContainer} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-full" data-node-id="68:78">
                <pre className="figma-font-geist-mono text-[10px] leading-[14px] text-[rgba(255,255,255,0.5)] m-0 whitespace-pre-wrap w-full" data-node-id="68:79">
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

const agent = new `}<span className="text-[#ffdd54]">Jade</span>{` ({ creator: builder, context: ecosystem });
await agent.run();`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== Mobile ====== */}
      <div className="hidden max-md:flex flex-col gap-[52px] items-center mx-[-12px]" style={{ width: 'calc(100% + 24px)' }} data-name="HeroSection-mobile" data-node-id="13:7056">
        {/* Badge */}
        <div className="backdrop-blur-[25px] bg-[rgba(0,0,0,0.55)] flex h-[30px] items-center justify-center px-[12px] rounded-[18px] shrink-0" data-name="Badge" data-node-id="13:7057">
          <div className="flex gap-[7px] items-center" data-node-id="13:7058">
            <div className="bg-[#80f571] rounded-[50px] shrink-0 size-[8px]" data-node-id="13:7059" />
            <div className="figma-font-geist font-medium text-[12px] text-white whitespace-nowrap" data-node-id="13:7060">
              <p className="leading-[normal]">Open to Work</p>
            </div>
          </div>
        </div>

        {/* Content: title + code block */}
        <div className="flex flex-col gap-[24px] items-start w-full" data-node-id="13:7061">
          {/* Title group */}
          <div className="flex flex-col gap-[12px] items-center w-full" data-node-id="13:7062">
            <div className="flex flex-col items-center w-full" data-node-id="13:7063">
              {/* "Claude e Codex / são funcionários," */}
              <div className="figma-font-georgia not-italic text-[30px] text-[#393737] text-center tracking-[-0.6px] w-full" data-node-id="13:7064">
                <p className="leading-[38px]">{`Claude e Codex `}</p>
                <p className="leading-[38px]">
                  <span>{`são `}</span>
                  <span className="text-[#888787]">funcionários,</span>
                </p>
              </div>

              {/* "mas [image] produto" */}
              <div className="flex gap-[8px] items-center justify-center w-full" data-node-id="13:7065">
                <span className="figma-font-georgia not-italic text-[30px] text-[#888787] tracking-[-0.6px] leading-[38px]">{`mas `}</span>
                <div className="h-[46px] relative shrink-0 w-[58px]" data-node-id="13:7067">
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgSlideshowImage}
                    style={{
                      filter:
                        "drop-shadow(0.565px 0.565px 0.182px rgba(0,0,0,0.5)) drop-shadow(1.445px 1.445px 1.254px rgba(0,0,0,0.48)) drop-shadow(2.897px 2.897px 3.946px rgba(0,0,0,0.46)) drop-shadow(5.492px 5.492px 9.87px rgba(0,0,0,0.41)) drop-shadow(10.917px 10.917px 23.794px rgba(0,0,0,0.32)) drop-shadow(24px 24px 59.382px rgba(0,0,0,0.09))",
                    }}
                  />
                </div>
                <span className="figma-font-georgia not-italic text-[30px] text-[#393737] tracking-[-0.6px] leading-[38px]">produto</span>
              </div>

              {/* "nasce no Figma" */}
              <div className="figma-font-georgia not-italic text-[30px] text-[#393737] tracking-[-0.6px] text-center" data-node-id="13:7069">
                <p className="leading-[38px]">nasce no Figma</p>
              </div>
            </div>
          </div>

          {/* Code block */}
          <div className="bg-[rgba(0,0,0,0.8)] border border-solid border-white flex flex-col gap-[16px] items-start pb-[16px] rounded-[14px] w-full" data-name="Container-illustration" data-node-id="13:7071">
            {/* Dot row */}
            <div className="border-b border-[rgba(255,255,255,0.06)] border-solid flex items-center justify-between px-[14px] py-[10px] w-full" data-node-id="13:7072">
              <div className="flex gap-[4px] items-center" data-node-id="13:7073">
                <div className="bg-[#a3a3a3] opacity-50 rounded-full shrink-0 size-[8px]" data-node-id="13:7074" />
                <div className="bg-[#a3a3a3] opacity-50 rounded-full shrink-0 size-[8px]" data-node-id="13:7075" />
                <div className="bg-[#a3a3a3] opacity-50 rounded-full shrink-0 size-[8px]" data-node-id="13:7076" />
              </div>
              <div className="h-[14px] relative shrink-0 w-[11.2px]" data-node-id="13:7077">
                <div className="absolute inset-[-21.43%_-32.2%_-35.71%_-35.71%]">
                  <img alt="" className="block max-w-none size-full" src={imgVectorContainer} />
                </div>
              </div>
            </div>

            {/* Code content */}
            <div className="flex items-start px-[14px] w-full" data-node-id="13:7079">
              <pre className="figma-font-geist-mono text-[10px] leading-[14px] text-[rgba(255,255,255,0.5)] m-0 whitespace-pre-wrap flex-1" data-node-id="13:7080">{`import { Designer } from '@victor/core';
import { Figma, AI, Vibe, Research } from './MyWorkflow';

const victor = new Designer({ origin: 'pencil-on-paper' });
const builder = victor.evolveToBuilder();

const ecosystem = builder.build([
  new ProductThinking(),
  new DesignSystems(),
  new AIOrchestration(),
  new ShipItAnyway(),
]);

const agent = new `}<span className="text-[#ffdd54]">Jade</span>{` ({ creator: builder, context: ecosystem });
await agent.run();`}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
