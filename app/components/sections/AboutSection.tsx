import React from "react";

const imgCursor = "/visual-ir-assets/e1e3a69ff31cc36cd5f62ddb48cd950143bf850e.svg";

export default function AboutSection() {
  return (
          <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0" data-name="Sobre" data-node-id="1:497">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[486px]" data-name="Info Container" data-node-id="1:498">
              <div className="backdrop-blur-[30px] border border-solid border-white content-stretch flex h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[300px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Label Container" data-node-id="1:499" style={{ backgroundImage: "linear-gradient(-13.6093deg, rgba(255, 255, 255, 0.15) 34.408%, rgba(153, 153, 153, 0.15) 83.485%)" }}>
                <div className="figma-font-geist flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#232323] text-[13px] whitespace-nowrap" data-node-id="1:500">
                  <p className="leading-[normal]">Sobre mim</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] h-[464px] items-start relative shrink-0 w-full" data-name="Text Container" data-node-id="1:501">
                <div className="figma-font-georgia flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#393737] text-[48px] tracking-[-1.44px] w-full" data-node-id="1:502">
                  <p className="leading-[64px]">A parte que não cabe na minha bio do Linkedin</p>
                </div>
                <div className="figma-font-geist flex flex-col font-normal justify-center opacity-60 relative shrink-0 text-[18px] text-black tracking-[-0.2px] w-full whitespace-pre-wrap leading-[27px]" data-node-id="1:503">
                  <p className="mb-0">Aos 12 anos eu já criava sites, jogos e qualquer coisa que coubesse numa tela. Eu não era um prodígio, só muito curioso, e sigo com este padrão até hoje. Foi assim com Design, com Produto e também com Inteligência Artificial.</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">Tenho 26 anos, orgulho de ser pai da Jade e já acumulei 9 anos de profissão criando produtos que milhões de pessoas usam, sim, foram muitas xícaras de café até chegar aqui.</p>
                  <p className="mb-0">&nbsp;</p>
                  <p>Eu não posso prometer mudar o mundo, mas prometo que o meu trabalho e minhas idéias ajudarão a impulsionar o seu negócio, os seus produtos e a experiência dos seus usuários.</p>
                </div>
              </div>
            </div>
            <div className="h-[604px] overflow-clip relative shrink-0 w-[690px]" data-name="Profile Image Container" data-node-id="1:504">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute -scale-x-100 max-w-none object-cover size-full" src="/visual-ir-assets/profile-image-container.png" />
                <div className="absolute bg-gradient-to-b from-[39.024%] from-[rgba(247,247,247,0)] inset-0 to-[#f7f7f7] via-[68.132%] via-[rgba(247,247,247,0.5)]" />
              </div>
              {/* Ghost layer removed: hidden div loading imgCapturaDeTela (node 1:505) */}
              <div className="absolute h-[40px] left-[78px] top-[175px] w-[94px]" data-name="Nametag Container" data-node-id="1:506">
                <div className="absolute backdrop-blur-[20px] bg-[#2979ff] border border-[rgba(255,255,255,0.8)] border-solid content-stretch flex items-center left-0 overflow-clip px-[16px] py-[8px] rounded-[31px] top-0" data-name="Nametag" data-node-id="1:507">
                  <div className="figma-font-geist flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#e6e9ee] text-[12px] whitespace-nowrap" data-node-id="1:508">
                    <p className="leading-[normal]">Victor</p>
                  </div>
                </div>
                <div className="absolute flex h-[24.693px] items-center justify-center left-[74px] top-[18px] w-[25.633px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
                  <div className="flex-none rotate-120 skew-x-[0.52deg]">
                    <div className="h-[19.401px] relative w-[17.489px]" data-name="Cursor" data-node-id="1:509">
                      <div className="absolute inset-[2.31%_-3.29%_-150.66%_-172.69%]">
                        <img alt="" className="block max-w-none size-full" src={imgCursor} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}
