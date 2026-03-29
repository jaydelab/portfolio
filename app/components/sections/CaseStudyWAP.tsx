import { HeroTitleTextReveal } from "../effects/hero-title-reveal";
import { assetUrl } from "../../lib/asset-url";

const img0052 = assetUrl("/visual-ir-assets/0052.webp");

interface CaseStudyWAPProps {
  id?: string;
  className?: string;
}

export default function CaseStudyWAP({ id, className = "" }: CaseStudyWAPProps = {}) {
  return (
    <div id={id} className={`content-stretch flex max-lg:flex-col items-start justify-center relative shrink-0 ${className}`.trim()} data-node-id="1:573">
      <h3 className="sr-only">WAP</h3>
            <div className="content-stretch flex flex-col gap-[42px] max-lg:gap-[24px] items-start relative shrink-0 w-[588px] max-lg:w-full" data-node-id="1:574">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-node-id="1:575">
                <div className="backdrop-blur-[30px] border border-solid border-white content-stretch flex h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[300px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-node-id="1:576" style={{ backgroundImage: "linear-gradient(-8.23177deg, rgba(255, 255, 255, 0.15) 34.408%, rgba(153, 153, 153, 0.15) 83.485%)" }}>
                  <div className="figma-font-geist flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#232323] text-[13px] whitespace-nowrap" data-node-id="1:577">
                    <p className="leading-[normal]">WAP e WAAW by Alok</p>
                  </div>
                </div>
                <div className="figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#393737] text-[56px] max-lg:text-[clamp(30px,5.5vw,56px)] tracking-[-2.8px] w-[588px] max-lg:w-full" data-node-id="1:578">
                  <p>
                    <HeroTitleTextReveal
                      text="O motor de"
                      delay={0}
                      className="leading-[68px] max-lg:leading-[clamp(38px,6.8vw,68px)]"
                      noWrap={false}
                    />
                    {" "}
                    <HeroTitleTextReveal
                      text="2,5"
                      delay={0.3}
                      className="figma-font-newsreader font-normal leading-[68px] max-lg:leading-[clamp(38px,6.8vw,68px)]"
                    />
                    {" "}
                    <HeroTitleTextReveal
                      text="bilhões que rodava em planilhas"
                      delay={0.42}
                      className="leading-[68px] max-lg:leading-[clamp(38px,6.8vw,68px)]"
                      noWrap={false}
                    />
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] relative shrink-0 w-[486px] max-lg:w-full" data-node-id="1:579">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:580">
                  <div className="figma-font-geist flex flex-col font-medium justify-center relative shrink-0 text-[#393737] text-[24px] tracking-[-0.48px] whitespace-nowrap" data-node-id="1:581">
                    <p className="leading-[normal]">Um problema que pediu três soluções</p>
                  </div>
                  <div className="figma-font-geist flex flex-col font-normal justify-center min-w-full opacity-60 relative shrink-0 text-[16px] text-black w-[min-content]" data-node-id="1:582">
                    <p className="leading-[26px]">A WAP é uma indústria que saiu de um único produto para dezenas de categorias, de Lavadoras de Alta Pressão a Robôs Aspiradores, Air Fryers e Equipamentos de Som. Faturamento na casa dos R$ 2 bilhões, mais de 80% das vendas por canais digitais, operação que se reinventou depois de quase quebrar na crise hídrica de 2015.</p>
                  </div>
                </div>
                <div className="figma-font-geist flex flex-col font-normal justify-center opacity-60 relative shrink-0 text-[16px] text-black w-[486px] max-lg:w-full" data-node-id="1:583">
                  <p className="leading-[26px]">Negociar, documentar, e gerenciar, em partes rodava no improviso. Enquanto um analisava concorrentes em dezenas de arquivos, cruzava dados complexos, e lidava com pilhas de documentos, outros estavam em feiras internacionais prospectando e enviando dados ao grupo privado no WhatsApp. Decisões sobre o que importar pro Brasil ainda dependiam de memória, e-mails e documentos espalhados.</p>
                </div>
                <div className="figma-font-geist-mono flex flex-col font-medium justify-center relative shrink-0 text-[#f54e2d] text-[15px] w-[383px] max-lg:w-full" data-node-id="1:584">
                  <p className="leading-[21px]">Então como automatizar processos, organizar rotinas e compreender o ecossistema de quem fatura bilhões? O único caminho foi pegar um voo direto pra Curitiba e passar alguns dias com eles.</p>
                </div>
              </div>
            </div>
            <div className="h-[757px] max-lg:h-[400px] relative shrink-0 w-[612px] max-lg:w-full" data-node-id="1:585">
              <div className="absolute h-[757px] left-[-134px] max-lg:left-0 top-0 w-[741px] max-lg:w-full" data-name="005 2" data-node-id="1:586">
                <img decoding="async" loading="lazy" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img0052} />
              </div>
            </div>
          </div>
  );
}
