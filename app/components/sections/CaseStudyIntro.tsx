import CheckListItem from "../ui/CheckListItem";

const img0031 = "/visual-ir-assets/0031.webp";

interface CaseStudyIntroProps {
  id?: string;
  className?: string;
}

export default function CaseStudyIntro({ id, className = "" }: CaseStudyIntroProps = {}) {
  return (
    <div id={id} className={`content-stretch flex flex-col gap-[52px] items-center justify-center relative shrink-0 w-[1200px] ${className}`.trim()} data-name="Container" data-node-id="1:510">
            <div className="figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#393737] text-[56px] text-center tracking-[-2.8px] w-full" data-node-id="1:511">
              <p className="leading-[68px]">Um novo negócio, uma barreira e uma reunião</p>
            </div>
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="1:512">
              <div className="h-[843px] relative shrink-0 w-[690px]" data-name="003 1" data-node-id="1:513">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[120.78%] left-[-52.17%] max-w-none top-[-11.04%] w-[196.96%]" src={img0031} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[486px]" data-name="Container" data-node-id="1:514">
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
          </div>
  );
}
