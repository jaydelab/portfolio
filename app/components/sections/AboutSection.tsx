import React from "react";

const imgCursor = "/visual-ir-assets/cursor.svg";
const imgAvatarMobileBg = "/visual-ir-assets/avatar-mobile-bg.webp";
const imgAboutTabletPortrait = "/visual-ir-assets/about-tablet-portrait.webp";

interface AboutSectionProps {
  id?: string;
  className?: string;
}

export default function AboutSection({ id, className = "" }: AboutSectionProps = {}) {
  return (
    <div id={id} className={`w-full ${className}`.trim()}>
      {/* ====== Desktop ====== */}
      <div className="max-[768.99px]:hidden content-stretch flex gap-[24px] max-lg:gap-[16px] items-center justify-center relative shrink-0 max-lg:flex-col-reverse" data-name="Sobre" data-node-id="1:497">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[486px] max-lg:w-full" data-name="Info Container" data-node-id="1:498">
              <div className="backdrop-blur-[30px] border border-solid border-white content-stretch flex h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[300px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Label Container" data-node-id="1:499" style={{ backgroundImage: "linear-gradient(-13.6093deg, rgba(255, 255, 255, 0.15) 34.408%, rgba(153, 153, 153, 0.15) 83.485%)" }}>
                <div className="figma-font-geist flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#232323] text-[13px] whitespace-nowrap" data-node-id="1:500">
                  <p className="leading-[normal]">Sobre mim</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] h-[464px] items-start relative shrink-0 w-full" data-name="Text Container" data-node-id="1:501">
                <div className="figma-font-georgia flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#393737] text-[48px] max-lg:text-[clamp(28px,4.8vw,48px)] tracking-[-1.44px] w-full" data-node-id="1:502">
                  <p className="leading-[64px] max-lg:leading-[clamp(36px,6.4vw,64px)]">A parte que não cabe na minha bio do Linkedin</p>
                </div>
                <div className="figma-font-geist flex flex-col font-normal justify-center opacity-60 relative shrink-0 text-[18px] max-lg:text-[clamp(15px,2vw,18px)] text-black tracking-[-0.2px] w-full whitespace-pre-wrap leading-[27px] max-lg:leading-[clamp(23px,2.8vw,27px)]" data-node-id="1:503">
                  <p className="mb-0">Aos 12 anos eu já criava sites, jogos e qualquer coisa que coubesse numa tela. Eu não era um prodígio, só muito curioso, e sigo com este padrão até hoje. Foi assim com Design, com Produto e também com Inteligência Artificial.</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">Tenho 26 anos, orgulho de ser pai da Jade e já acumulei 9 anos de profissão criando produtos que milhões de pessoas usam, sim, foram muitas xícaras de café até chegar aqui.</p>
                  <p className="mb-0">&nbsp;</p>
                  <p>Eu não posso prometer mudar o mundo, mas prometo que o meu trabalho e minhas idéias ajudarão a impulsionar o seu negócio, os seus produtos e a experiência dos seus usuários.</p>
                </div>
              </div>
            </div>
            <div className="h-[604px] max-lg:h-[350px] overflow-clip relative shrink-0 w-[690px] max-lg:w-full" data-name="Profile Image Container" data-node-id="1:504">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute -scale-x-100 max-w-none object-cover size-full" src="/visual-ir-assets/profile-image-container.webp" />
                <div className="absolute bg-gradient-to-b from-[39.024%] from-[rgba(247,247,247,0)] inset-0 to-[#f7f7f7] via-[68.132%] via-[rgba(247,247,247,0.5)]" />
              </div>
              <div className="absolute h-[40px] left-[78px] max-lg:left-[20px] top-[175px] max-lg:top-[100px] w-[94px]" data-name="Nametag Container" data-node-id="1:506">
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

      {/* ====== Tablet ====== */}
      <div className="hidden min-[768px]:flex min-[769px]:hidden justify-center mx-[-24px] w-[calc(100%+48px)]" data-name="AboutSection-tablet" data-node-id="68:82">
        <div className="relative h-[530px] w-[768px]" data-node-id="68:83">
          <div className="absolute h-[530px] left-[289px] overflow-clip top-0 w-[479px]" data-node-id="68:83">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute bottom-0 h-full max-w-none object-contain right-0 w-full" src={imgAboutTabletPortrait} />
            </div>
          </div>

          <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[42px] top-0 w-[334px]" data-node-id="68:89">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="68:90">
              <div className="backdrop-blur-[30px] border border-solid border-white content-stretch flex h-[30px] items-center justify-center px-[12px] py-[8px] relative rounded-[300px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] shrink-0" style={{ backgroundImage: "linear-gradient(-13.094382348112262deg, rgba(255, 255, 255, 0.15) 34.408%, rgba(153, 153, 153, 0.15) 83.485%)" }} data-node-id="68:85">
                <div className="figma-font-geist font-medium text-[12px] text-[#232323] whitespace-nowrap" data-node-id="68:86">
                  <p className="leading-[normal]">Sobre mim</p>
                </div>
              </div>
              <div className="figma-font-georgia not-italic text-[32px] text-[#393737] tracking-[-0.64px] w-full" data-node-id="68:87">
                <p className="leading-[44px] whitespace-pre-wrap">{`A parte que não cabe na  minha bio do Linkedin`}</p>
              </div>
            </div>
            <div className="figma-font-geist font-normal opacity-60 text-[16px] text-black tracking-[-0.2px] w-full" data-node-id="68:88">
              <p className="leading-[26px]">Aos 12 anos eu já criava sites, jogos e qualquer coisa que coubesse numa tela. Eu não era um prodígio, só muito curioso, e sigo com este padrão até hoje. Foi assim com Design, com Produto e também com Inteligência Artificial.</p>
            </div>
            <div className="figma-font-geist font-normal opacity-60 text-[16px] text-black tracking-[-0.2px] w-full" data-node-id="68:89">
              <p className="leading-[26px]">Tenho 26 anos, orgulho de ser pai da Jade e já acumulei 9 anos de profissão criando produtos que milhões de pessoas usam, sim, foram muitas xícaras de café até chegar aqui.</p>
            </div>
            <div className="figma-font-geist font-normal opacity-60 text-[16px] text-black tracking-[-0.2px] w-full" data-node-id="68:90">
              <p className="leading-[26px]">Eu não posso prometer mudar o mundo, mas prometo que o meu trabalho e minhas idéias ajudarão a impulsionar o seu negócio, os seus produtos e a experiência dos seus usuários.</p>
            </div>
          </div>

          <div className="absolute h-[44px] left-[343px] top-px w-[76px]" data-node-id="68:92">
            <div className="absolute backdrop-blur-[20px] bg-[#2979ff] border border-[rgba(255,255,255,0.8)] border-solid content-stretch flex h-[24px] items-center left-0 overflow-clip p-[8px] rounded-[31px] top-0" data-node-id="68:93">
              <div className="figma-font-geist font-semibold text-[10px] text-[#e6e9ee] whitespace-nowrap" data-node-id="68:94">
                <p className="leading-[normal]">Victor</p>
              </div>
            </div>
            <div className="absolute flex h-[24.693px] items-center justify-center left-[50px] top-[12px] w-[25.633px]">
              <div className="flex-none rotate-120 skew-x-[0.52deg]">
                <div className="h-[19.401px] relative w-[17.489px]" data-node-id="68:95">
                  <div className="absolute inset-[2.31%_-3.29%_-150.66%_-172.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgCursor} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== Mobile ====== */}
      <div className="hidden max-md:flex flex-col w-full mt-[62px]" data-name="AboutMe-mobile" data-node-id="13:7081">
        {/* Avatar — full bleed */}
        <div className="mx-[-24px] h-[392px] overflow-clip relative" style={{ width: 'calc(100% + 48px)' }} data-name="victor-avatar" data-node-id="13:7082">
          <div className="-translate-x-1/2 absolute flex h-[351px] items-center justify-center left-[calc(50%+43px)] top-[-24px] w-[544px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[351px] relative w-[544px]" data-node-id="13:7083">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgAvatarMobileBg} />
                  <div className="absolute bg-gradient-to-b from-[39.024%] from-[rgba(247,247,247,0)] inset-0 to-[#f7f7f7] via-[68.132%] via-[rgba(247,247,247,0.5)]" />
                </div>
              </div>
            </div>
          </div>
          {/* Nametag */}
          <div className="absolute h-[44px] left-[36px] top-[52px] w-[76px]" data-node-id="13:7084">
            <div className="absolute backdrop-blur-[20px] bg-[#2979ff] border border-[rgba(255,255,255,0.8)] border-solid content-stretch flex h-[24px] items-center left-0 overflow-clip p-[8px] rounded-[31px] top-0" data-name="Nametag" data-node-id="13:7085">
              <div className="figma-font-geist font-semibold text-[10px] text-[#e6e9ee] whitespace-nowrap" data-node-id="13:7086">
                <p className="leading-[normal]">Victor</p>
              </div>
            </div>
            <div className="absolute flex h-[24.693px] items-center justify-center left-[50px] top-[12px] w-[25.633px]">
              <div className="flex-none rotate-120 skew-x-[0.52deg]">
                <div className="h-[19.401px] relative w-[17.489px]" data-name="Cursor" data-node-id="13:7087">
                  <div className="absolute inset-[2.31%_-3.29%_-150.66%_-172.69%]">
                    <img alt="" className="block max-w-none size-full" src={imgCursor} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-[12px] items-start w-full mt-[-169px] relative z-10" data-node-id="13:7088">
          <div className="flex flex-col gap-[12px] items-start w-full" data-node-id="13:7089">
            <div className="backdrop-blur-[30px] border border-solid border-white content-stretch flex h-[30px] items-center justify-center px-[12px] py-[8px] relative rounded-[300px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Label Container" data-node-id="13:7090" style={{ backgroundImage: "linear-gradient(-13.094deg, rgba(255, 255, 255, 0.15) 34.408%, rgba(153, 153, 153, 0.15) 83.485%)" }}>
              <div className="figma-font-geist font-medium text-[12px] text-[#232323] whitespace-nowrap" data-node-id="13:7091">
                <p className="leading-[normal]">Sobre mim</p>
              </div>
            </div>
            <div className="figma-font-georgia not-italic text-[24px] text-[#393737] tracking-[-0.48px] w-full" data-node-id="13:7092">
              <p className="leading-[34px]">A parte que não cabe na minha bio do Linkedin</p>
            </div>
          </div>
          <div className="figma-font-geist font-normal opacity-60 text-[16px] text-black w-full" data-node-id="13:7093">
            <p className="leading-[26px]">Aos 12 anos eu já criava sites, jogos e qualquer coisa que coubesse numa tela. Eu não era um prodígio, só muito curioso, e sigo com este padrão até hoje. Foi assim com Design, com Produto e também com Inteligência Artificial.</p>
          </div>
          <div className="figma-font-geist font-normal opacity-60 text-[16px] text-black w-full" data-node-id="13:7094">
            <p className="leading-[26px]">Tenho 26 anos, orgulho de ser pai da Jade e já acumulei 9 anos de profissão criando produtos que milhões de pessoas usam, sim, foram muitas xícaras de café até chegar aqui.</p>
          </div>
          <div className="figma-font-geist font-normal opacity-60 text-[16px] text-black w-full" data-node-id="13:7095">
            <p className="leading-[26px]">Eu não posso prometer mudar o mundo, mas prometo que o meu trabalho e minhas idéias ajudarão a impulsionar o seu negócio, os seus produtos e a experiência dos seus usuários.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
