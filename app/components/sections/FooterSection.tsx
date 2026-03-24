const imgVector8 = "/visual-ir-assets/vector-8.svg";
const imgSocialButton = "/visual-ir-assets/social-button.svg";
const imgSocialButtonIcon = "/visual-ir-assets/social-button-icon.svg";

interface FooterSectionProps {
  id?: string;
  className?: string;
}

export default function FooterSection({ id, className = "" }: FooterSectionProps = {}) {
  return (
    <div id={id || "contato"} className={`mb-[24px] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 max-md:flex max-md:flex-col max-md:w-full max-md:bg-black max-md:rounded-[30px] max-md:overflow-hidden max-md:pb-[40px] ${className}`.trim()} data-name="Container" data-node-id="1:1095">
            <div className="col-1 h-[774px] ml-0 mt-0 overflow-clip relative row-1 w-[1392px] max-md:w-full max-md:h-auto max-md:aspect-[1392/774]" data-name="Keyboard Section" data-node-id="1:1096">
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full rounded-[30px] max-md:rounded-none" src="/visual-ir-assets/keyboard-section.webp" />
            </div>
            <div className="figma-font-georgia col-1 flex flex-col justify-center ml-[300px] mt-[472px] not-italic relative row-1 text-[0px] text-center text-white w-[792px] max-md:ml-0 max-md:mt-[32px] max-md:w-full max-md:px-[16px]" data-node-id="1:1311">
              <p className="text-[40px] max-lg:text-[clamp(24px,4.5vw,40px)]">
                <span className="leading-[50px] max-lg:leading-[clamp(32px,5.5vw,50px)]">{`Se você precisa `}</span>
                <span className="figma-font-newsreader bg-clip-text bg-gradient-to-r font-normal from-[#5483bc] from-[39.423%] italic text-[transparent] to-[#cbe3ff] to-[60.096%] leading-[50px] max-lg:leading-[clamp(32px,5.5vw,50px)]">construir</span>
                <span className="leading-[50px] max-lg:leading-[clamp(32px,5.5vw,50px)]">{` algo pensado pra seres humanos, vamos conversar.`}</span>
              </p>
            </div>
            <div className="col-1 flex h-[32px] items-center justify-center ml-[48px] mt-[48px] relative row-1 w-[26px] max-md:hidden">
              <div className="flex-none rotate-180">
                <div className="h-[32px] relative w-[26px]" data-name="Vector" data-node-id="1:1312">
                  <div className="absolute inset-[-9.37%_-15.38%_-15.62%_-11.87%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector8} />
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-font-geist-mono col-1 content-stretch flex font-light gap-[4px] items-center justify-center ml-[470px] mt-[715px] relative row-1 text-white whitespace-nowrap max-md:ml-0 max-md:mt-[24px] max-md:flex-col max-md:items-center max-md:gap-[8px]" data-name="Contact Info" data-node-id="1:1313">
              <div className="flex flex-col justify-center opacity-70 relative shrink-0 text-[14px]" data-node-id="1:1317">
                <p className="leading-[14px]">victorxyn@gmail.com</p>
              </div>
              <div className="flex flex-col justify-center opacity-30 relative shrink-0 text-[16px] max-md:hidden" data-node-id="1:1321">
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="text-[16px] leading-[14px]">&nbsp;</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center opacity-70 relative shrink-0 text-[14px]" data-node-id="1:1322">
                <p className="leading-[14px]">(34) 99862-4100</p>
              </div>
              <div className="flex flex-col justify-center opacity-30 relative shrink-0 text-[16px] max-md:hidden" data-node-id="1:1323">
                <ul>
                  <li className="list-disc ms-[24px]">
                    <span className="text-[16px] leading-[14px]">&nbsp;</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center opacity-70 relative shrink-0 text-[14px]" data-node-id="1:1326">
                <p className="leading-[14px]">Uberlândia MG</p>
              </div>
            </div>
            <div className="col-1 content-stretch flex gap-[24px] items-center ml-[1244px] mt-[688px] relative row-1 max-md:ml-0 max-md:mt-[24px] max-md:justify-center max-md:w-full" data-name="Social Button Container" data-node-id="1:1327">
              <div className="relative shrink-0 size-[38px]" data-name="Social Button" data-node-id="1:1328">
                <div className="absolute inset-[-7.89%_-10.53%_-13.16%_-10.53%]">
                  <img alt="" className="block max-w-none size-full" src={imgSocialButton} />
                </div>
              </div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group" data-node-id="1:1330">
                <div className="col-1 ml-0 mt-0 row-1 size-[38px]" data-name="Social Button Background" data-node-id="1:1331" />
                <div className="col-1 ml-0 mt-0 relative row-1 size-[38px]" data-name="Social Button Icon" data-node-id="1:1332">
                  <div className="absolute inset-[-7.89%_-10.53%_-13.16%_-10.53%]">
                    <img alt="" className="block max-w-none size-full" src={imgSocialButtonIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}
