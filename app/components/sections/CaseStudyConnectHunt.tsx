import React from "react";

const imgPaperTexture = "/visual-ir-assets/b252142990b06034447bfe4d848aab2a4878e622.png";
const imgImage1 = "/visual-ir-assets/883fc7f1bf633c2c5de077b419fb876e12eef734.png";
const img167 = "/visual-ir-assets/d22051513d4af5bfe833e97e2ebfc895ca0c1c89.png";
const imgBack = "/visual-ir-assets/04f2f1ad8904d079beeb6b57d45d408639f8ee97.svg";
const imgLogoWap = "/visual-ir-assets/9535049b72a0736eaaca605cd888ec1f5484ba1f.svg";

export default function CaseStudyConnectHunt() {
  return (
          <div className="h-[580px] overflow-clip relative rounded-[30px] shrink-0 w-[1200px]" data-name="Logo" data-node-id="1:703">
            <div className="absolute contents left-0 top-0" data-name="Mask group" data-node-id="1:704">
              <div className="-translate-x-1/2 absolute bg-[#ffd4ef] h-[990.074px] left-[calc(50%+12.05px)] mask-alpha mask-intersect mask-no-repeat mask-position-[46.537px_3.037px] mask-size-[1200px_580px] overflow-clip rounded-[30px] top-[-3.04px] w-[1317.171px]" data-name="Back" data-node-id="1:706" style={{ maskImage: `url('${imgBack}')` }} />
              <div className="absolute contents inset-[0_-134.94px_-322px_-132.53px]" data-name="Background Container" data-node-id="1:707">
                <div className="absolute inset-[0_-134.94px_-322px_-110.84px] mask-alpha mask-intersect mask-no-repeat mask-position-[110.843px_0px] mask-size-[1200px_580px] mix-blend-overlay opacity-60 overflow-clip" data-name="Paper texture" data-node-id="1:708" style={{ maskImage: `url('${imgBack}')` }}>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPaperTexture} />
                  </div>
                </div>
                <div className="absolute inset-[0_-113.25px_-322px_-132.53px] mask-alpha mask-intersect mask-no-repeat mask-position-[132.53px_0px] mask-size-[1200px_580px] mix-blend-screen opacity-50 overflow-clip" data-name="Image" data-node-id="1:709" style={{ maskImage: `url('${imgBack}')` }}>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[115.16%] left-0 max-w-none top-0 w-[110.37%]" src={imgImage1} />
                  </div>
                </div>
              </div>
              <div className="absolute h-[580px] left-[588px] mask-alpha mask-intersect mask-no-repeat mask-position-[-588px_0px] mask-size-[1200px_580px] overflow-clip top-0 w-[612px]" data-name="Phone Mockup Container" data-node-id="3:730" style={{ maskImage: `url('${imgBack}')` }}>
                <div className="absolute flex h-[1248.384px] items-center justify-center left-[-364.22px] top-[-336.71px] w-[1348.089px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
                  <div className="-rotate-30 flex-none">
                    <div className="h-[814.175px] relative w-[1086.576px]" data-name="016 6" data-node-id="1:710">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img167} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[20px] items-start leading-[0] left-[50px] top-[50px] w-[435px]" data-name="Container" data-node-id="1:711">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Information Container" data-node-id="1:712">
                <div className="figma-font-georgia flex flex-col h-[50px] justify-center not-italic relative shrink-0 text-[#393737] text-[32px] w-full" data-node-id="1:713">
                  <p className="leading-[normal]">App ConnectHunt</p>
                </div>
                <div className="figma-font-geist flex flex-col font-normal justify-center opacity-60 relative shrink-0 text-[16px] text-black w-full" data-node-id="1:714">
                  <p className="leading-[26px]">Essa ferramenta foi projetada pra funcionar onde a decisão acontece, na prospecção internacional com o celular no bolso. O ConnectHunt é o app que P.Os, diretoria e time de produto da WAP usam em feiras internacionais. Ele fotografa o produto, lê a imagem, e agiliza a chegada ao Discovery. Projetado para respeitar o tempo de quem está sob pressão entre estandes, negociações e decisões que não esperam o time voltar ao escritório.</p>
                </div>
              </div>
              <div className="figma-font-geist flex flex-col font-normal justify-center opacity-60 relative shrink-0 text-[16px] text-black w-full" data-node-id="1:715">
                <p className="leading-[26px]">O app trabalha e abre espaço pro debate coletivo, a equipe faz votações no estilo Tinder e decidem juntos o que merece entrar pro mercado. No final, é sincronizado com o Coolhunting e os registros viram parte viva da esteira.</p>
              </div>
            </div>
            <div className="absolute inset-[88.62%_92.75%_7.93%_4.17%]" data-name="Logo-wap" data-node-id="1:716">
              <img alt="" className="absolute block max-w-none size-full" src={imgLogoWap} />
            </div>
          </div>
  );
}
