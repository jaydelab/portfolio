import CheckListItem from "../ui/CheckListItem";

const img0031 = "/visual-ir-assets/0031.webp";
const imgCaseIntro = "/visual-ir-assets/case-intro.webp";
const imgCaseWapPhone = "/visual-ir-assets/case-wap-phone.webp";
const imgCaseNovoMercado = "/visual-ir-assets/case-novomercado.webp";
const imgCaseArrow = "/visual-ir-assets/case-arrow.svg";
const imgLogoWap = "/visual-ir-assets/logo-wap.svg";
const imgCaseIntroTabletNovoMercado = "/visual-ir-assets/case-intro-tablet-nm.webp";
const imgCaseIntroTabletNovoMercadoLogo = "/visual-ir-assets/case-intro-tablet-nm-logo.svg";
const imgCaseIntroTabletWapLogo = "/visual-ir-assets/case-intro-wap-logo-tablet.svg";

interface CaseStudyIntroProps {
  id?: string;
  className?: string;
}

export default function CaseStudyIntro({ id, className = "" }: CaseStudyIntroProps = {}) {
  return (
    <div id={id || "cases"} className={`content-stretch flex flex-col gap-[52px] max-lg:gap-[24px] items-center justify-center relative shrink-0 w-full max-w-[1200px] ${className}`.trim()} data-name="Container" data-node-id="1:510">
            <div className="max-[768.99px]:hidden figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#393737] text-[56px] max-lg:text-[clamp(30px,5.5vw,56px)] text-center tracking-[-2.8px] w-full" data-node-id="1:511">
              <p className="leading-[68px] max-lg:leading-[clamp(38px,6.8vw,68px)]">Um novo negócio, uma barreira e uma reunião</p>
            </div>
            <div className="max-[768.99px]:hidden content-stretch flex max-lg:flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="1:512">
              <div className="h-[843px] max-lg:h-[400px] relative shrink-0 w-[690px] max-lg:w-full" data-name="003 1" data-node-id="1:513">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[120.78%] left-[-52.17%] max-w-none top-[-11.04%] w-[196.96%]" src={img0031} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[40px] max-lg:gap-[24px] items-start relative shrink-0 w-[486px] max-lg:w-full" data-name="Container" data-node-id="1:514">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="1:515">
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Container" data-node-id="1:516">
                    <div className="figma-font-geist flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#393737] text-[18px] whitespace-nowrap" data-node-id="1:517">
                      <p className="leading-[normal]">O problema</p>
                    </div>
                  </div>
                  <div className="figma-font-geist flex flex-col font-normal justify-center leading-[0] min-w-full opacity-60 relative shrink-0 text-[16px] text-black w-[min-content]" data-node-id="1:518">
                    <p className="leading-[26px]">{`Uma software house brasileira tinha acabado de nascer, tinha um time técnico forte, primeiros clientes na mesa e capacidade real de entrega. Mas o portfólio que era sua vitrine contava outra história, e não declarava presença digital. `}</p>
                  </div>
                  <div className="figma-font-geist-mono flex flex-col font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#f54e2d] text-[15px] w-[min-content]" data-node-id="1:519">
                    <p className="leading-[21px]">Então, como podemos fazer o mercado levar a sério uma empresa com grande potencial, mas que não tem muitas histórias pra contar?</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="1:520">
                  <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container" data-node-id="1:521">
                    <div className="figma-font-geist flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#393737] text-[18px] whitespace-nowrap" data-node-id="1:522">
                      <p className="leading-[normal]">A solução</p>
                    </div>
                  </div>
                  <div className="figma-font-geist flex flex-col font-normal justify-center leading-[0] opacity-60 relative shrink-0 text-[16px] text-black w-full" data-node-id="1:523">
                    <p className="leading-[26px]">Antes de abrir o Figma, mergulhei no contexto e entendi que esse portfólio precisava se vender só de olhar. Projetei cada seção pra responder uma objeção antes dela virar pergunta, e ao mesmo tempo exalar capacidade técnica real. O objetivo era claro: atrair clientes e converter leads. Minha missão foi entregar um resultado que gerasse números e entregasse valor real.</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="1:524">
                  <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container" data-node-id="1:525">
                    <div className="figma-font-geist flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#393737] text-[18px] whitespace-nowrap" data-node-id="1:526">
                      <p className="leading-[normal]">O processo</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[11.5px] items-start leading-[0] px-[4px] relative shrink-0 w-full" data-name="Container" data-node-id="1:527">
                    <CheckListItem label="Problema e briefing" />
                    <CheckListItem label="Pesquisas e copywright" />
                    <CheckListItem label="Arquitetura e fluxos" small />
                    <CheckListItem label="Wireframes mobile first" />
                    <CheckListItem label="Viabilidade técnica" />
                    <CheckListItem label="Performance e acessibilidade" />
                    <CheckListItem label="UI com componentes, tokens e variáveis" />
                    <CheckListItem label="Protótipo navegável" />
                    <CheckListItem label="Testes e análise pós-lançamento" />
                  </div>
                </div>
              </div>
            </div>

      {/* ====== Tablet ====== */}
      <div className="hidden min-[768px]:flex min-[769px]:hidden flex-col gap-[16px] items-start mx-[-24px] px-[42px] w-[calc(100%+48px)]" data-name="CaseStudies-tablet" data-node-id="68:97">
        <div className="figma-font-georgia not-italic text-[32px] text-[#393737] tracking-[-0.64px] w-[272px]" data-node-id="68:98">
          <p className="leading-[44px]">Últimos trabalhos</p>
        </div>

        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="68:594">
          <div className="bg-white border border-[rgba(3,3,2,0.12)] border-solid content-stretch flex flex-col gap-[32px] items-center justify-end overflow-clip pb-[12px] pt-[16px] relative rounded-[20px] shadow-[0px_50px_40px_0px_rgba(0,0,0,0.01),0px_50px_40px_0px_rgba(0,0,0,0.02),0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)] shrink-0 w-[334px]" data-node-id="68:99">
              <div className="content-stretch flex flex-col gap-[12px] items-start px-[24px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
                  <div className="figma-font-georgia flex-1 not-italic text-[18px] text-[#393737] tracking-[-0.36px]" data-node-id="68:102">
                    <p className="leading-[26px]">Um novo negócio, uma barreira e uma reunião</p>
                  </div>
                  <div className="bg-[#363636] flex flex-col items-start overflow-clip p-px rounded-[50px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.17),0px_23px_14px_0px_rgba(0,0,0,0.1),0px_41px_17px_0px_rgba(0,0,0,0.03)] shrink-0 size-[32px]" data-node-id="68:103">
                    <div className="border border-[#4b4b4b] border-solid flex flex-[1_0_0] items-center justify-center min-h-px min-w-px rounded-[50px] w-full">
                      <div className="h-[10px] relative shrink-0 w-[12px]">
                        <div className="absolute inset-[-2.5%_-2.08%]">
                          <img alt="" className="block max-w-none size-full" src={imgCaseArrow} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[214px] overflow-clip relative rounded-[12px] shrink-0 w-[310px]" data-node-id="68:107">
                <div className="absolute h-[289px] left-0 top-0 w-[310px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCaseIntro} />
                </div>
              </div>
            </div>

            <div className="bg-white border border-[rgba(3,3,2,0.12)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-[326px] items-start min-h-px min-w-px overflow-clip pt-[16px] relative rounded-[20px] shadow-[0px_50px_40px_0px_rgba(0,0,0,0.01),0px_50px_40px_0px_rgba(0,0,0,0.02),0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)]" data-node-id="68:109">
              <div className="content-stretch flex flex-col gap-[12px] items-start px-[20px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
                  <div className="figma-font-georgia flex-1 not-italic text-[18px] text-[#393737] tracking-[-0.36px]" data-node-id="68:106">
                    <p className="leading-[26px]">Um novo negócio, uma barreira e uma reunião</p>
                  </div>
                  <div className="bg-[#363636] flex flex-col items-start overflow-clip p-px rounded-[50px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.17),0px_23px_14px_0px_rgba(0,0,0,0.1),0px_41px_17px_0px_rgba(0,0,0,0.03)] shrink-0 size-[32px]" data-node-id="68:107">
                    <div className="border border-[#4b4b4b] border-solid flex flex-[1_0_0] items-center justify-center min-h-px min-w-px rounded-[50px] w-full">
                      <div className="h-[10px] relative shrink-0 w-[12px]">
                        <div className="absolute inset-[-2.5%_-2.08%]">
                          <img alt="" className="block max-w-none size-full" src={imgCaseArrow} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[226px] overflow-clip relative shrink-0 w-full" data-node-id="68:117">
                <div className="absolute h-[554px] right-[55px] top-0 w-[543px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCaseWapPhone} />
                </div>
                <div className="absolute h-[16px] left-[20px] top-0 w-[30px]">
                  <img alt="" className="absolute block max-w-none opacity-100 size-full" src={imgCaseIntroTabletWapLogo} />
                </div>
                <div className="absolute h-[432px] right-[-235px] top-[-175px] w-[424px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCaseWapPhone} />
                </div>
              </div>
            </div>
          </div>

        <div className="bg-white border border-[rgba(3,3,2,0.12)] border-solid content-stretch flex flex-col gap-[32px] h-[326px] items-start overflow-clip pt-[16px] relative rounded-[20px] shadow-[0px_50px_40px_0px_rgba(0,0,0,0.01),0px_50px_40px_0px_rgba(0,0,0,0.02),0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)] shrink-0 w-[684px]" data-node-id="68:123">
          <div className="content-stretch flex flex-col gap-[12px] items-start px-[20px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
              <div className="figma-font-georgia flex-1 not-italic text-[18px] text-[#393737] tracking-[-0.36px]" data-node-id="68:126">
                <p className="leading-[26px]">Um novo negócio, uma barreira e uma reunião</p>
              </div>
              <div className="bg-[#363636] flex flex-col items-start overflow-clip p-px rounded-[50px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.17),0px_23px_14px_0px_rgba(0,0,0,0.1),0px_41px_17px_0px_rgba(0,0,0,0.03)] shrink-0 size-[32px]" data-node-id="68:127">
                <div className="border border-[#4b4b4b] border-solid flex flex-[1_0_0] items-center justify-center min-h-px min-w-px rounded-[50px] w-full">
                  <div className="h-[10px] relative shrink-0 w-[12px]">
                    <div className="absolute inset-[-2.5%_-2.08%]">
                      <img alt="" className="block max-w-none size-full" src={imgCaseArrow} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-node-id="68:131">
            <div className="absolute h-[581px] right-[-10px] top-[-129px] w-[734px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCaseIntroTabletNovoMercado} />
            </div>
            <div className="absolute inset-[0.41%_87.56%_93.9%_2.92%]">
              <img alt="" className="absolute block max-w-none size-full" src={imgCaseIntroTabletNovoMercadoLogo} />
            </div>
          </div>
        </div>
      </div>

      {/* ====== Mobile ====== */}
      <div className="hidden max-md:flex flex-col gap-[16px] items-start w-full mt-[62px]" data-name="CaseStudies-mobile">
        <div className="figma-font-georgia not-italic text-[24px] text-[#393737] tracking-[-0.48px] w-full">
          <p className="leading-[34px]">Últimos trabalhos</p>
        </div>

        {/* Card 1 */}
        <div className="bg-white border border-[rgba(3,3,2,0.12)] border-solid flex flex-col gap-[32px] items-center justify-end overflow-clip pb-[12px] pt-[16px] rounded-[20px] shadow-[0px_50px_40px_0px_rgba(0,0,0,0.01),0px_50px_40px_0px_rgba(0,0,0,0.02),0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)] w-full" data-name="case01" data-node-id="67:2163">
          <div className="flex flex-col gap-[12px] items-start px-[20px] w-full">
            <div className="flex gap-[8px] items-start w-full">
              <div className="flex flex-[1_0_0] flex-col figma-font-georgia not-italic text-[18px] text-[#393737] tracking-[-0.36px] min-h-px min-w-px">
                <p className="leading-[26px]">Um novo negócio, uma barreira e uma reunião</p>
              </div>
              <div className="bg-[#363636] flex flex-col items-start overflow-clip p-px rounded-[50px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.17),0px_23px_14px_0px_rgba(0,0,0,0.1),0px_41px_17px_0px_rgba(0,0,0,0.03)] shrink-0 size-[32px]">
                <div className="border border-[#4b4b4b] border-solid flex flex-[1_0_0] items-center justify-center min-h-px min-w-px rounded-[50px] w-full">
                  <div className="h-[10px] relative shrink-0 w-[12px]">
                    <div className="absolute inset-[-2.5%_-2.08%]">
                      <img alt="" className="block max-w-none size-full" src={imgCaseArrow} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[214px] overflow-clip relative rounded-[12px] shrink-0 w-[248px]">
            <div className="absolute h-[239px] left-[-4px] top-0 w-[256px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCaseIntro} />
            </div>
          </div>
        </div>

        {/* Card 2 - WAP */}
        <div className="bg-white border border-[rgba(3,3,2,0.12)] border-solid flex flex-col gap-[32px] h-[326px] items-start overflow-clip pt-[16px] rounded-[20px] shadow-[0px_50px_40px_0px_rgba(0,0,0,0.01),0px_50px_40px_0px_rgba(0,0,0,0.02),0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)] w-full" data-name="case01" data-node-id="67:2173">
          <div className="flex flex-col gap-[12px] items-start px-[20px] w-full">
            <div className="flex gap-[8px] items-start w-full">
              <div className="flex flex-[1_0_0] flex-col figma-font-georgia not-italic text-[18px] text-[#393737] tracking-[-0.36px] min-h-px min-w-px">
                <p className="leading-[26px]">Um novo negócio, uma barreira e uma reunião</p>
              </div>
              <div className="bg-[#363636] flex flex-col items-start overflow-clip p-px rounded-[50px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.17),0px_23px_14px_0px_rgba(0,0,0,0.1),0px_41px_17px_0px_rgba(0,0,0,0.03)] shrink-0 size-[32px]">
                <div className="border border-[#4b4b4b] border-solid flex flex-[1_0_0] items-center justify-center min-h-px min-w-px rounded-[50px] w-full">
                  <div className="h-[10px] relative shrink-0 w-[12px]">
                    <div className="absolute inset-[-2.5%_-2.08%]">
                      <img alt="" className="block max-w-none size-full" src={imgCaseArrow} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[226px] overflow-clip relative shrink-0 w-full">
            <div className="absolute h-[506px] right-[25px] top-0 w-[496px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCaseWapPhone} />
            </div>
            <div className="absolute inset-[0_81.76%_92.92%_7.35%]">
              <img alt="" className="absolute block max-w-none size-full" src={imgLogoWap} />
            </div>
            <div className="absolute h-[358px] right-[-194px] top-[-110px] w-[351px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCaseWapPhone} />
            </div>
          </div>
        </div>

        {/* Card 3 - O Novo Mercado */}
        <div className="bg-white border border-[rgba(3,3,2,0.12)] border-solid flex flex-col gap-[32px] h-[326px] items-start overflow-clip pt-[16px] rounded-[20px] shadow-[0px_50px_40px_0px_rgba(0,0,0,0.01),0px_50px_40px_0px_rgba(0,0,0,0.02),0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)] w-full" data-name="case01" data-node-id="67:2187">
          <div className="flex flex-col gap-[12px] items-start px-[20px] w-full">
            <div className="flex gap-[8px] items-start w-full">
              <div className="flex flex-[1_0_0] flex-col figma-font-georgia not-italic text-[18px] text-[#393737] tracking-[-0.36px] min-h-px min-w-px">
                <p className="leading-[26px]">Um novo negócio, uma barreira e uma reunião</p>
              </div>
              <div className="bg-[#363636] flex flex-col items-start overflow-clip p-px rounded-[50px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.17),0px_23px_14px_0px_rgba(0,0,0,0.1),0px_41px_17px_0px_rgba(0,0,0,0.03)] shrink-0 size-[32px]">
                <div className="border border-[#4b4b4b] border-solid flex flex-[1_0_0] items-center justify-center min-h-px min-w-px rounded-[50px] w-full">
                  <div className="h-[10px] relative shrink-0 w-[12px]">
                    <div className="absolute inset-[-2.5%_-2.08%]">
                      <img alt="" className="block max-w-none size-full" src={imgCaseArrow} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[226px] overflow-clip relative shrink-0 w-full">
            <div className="absolute h-[226px] left-0 overflow-clip top-0 w-[272px]">
              <div className="absolute bottom-[-57px] h-[365px] left-[-116px] w-[461px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCaseNovoMercado} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
