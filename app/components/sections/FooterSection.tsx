import { HeroTitleHighlightReveal, HeroTitleTextReveal } from "../effects/hero-title-reveal";
import { assetUrl } from "../../lib/asset-url";

const imgVector8 = assetUrl("/visual-ir-assets/vector-8.svg");
const imgSocialButton = assetUrl("/visual-ir-assets/social-button.svg");
const imgSocialButtonIcon = assetUrl("/visual-ir-assets/social-button-icon.svg");

const imgFooterMobileKeyboard = assetUrl("/visual-ir-assets/footer-mobile-keyboard.webp");
const imgFooterMobileCheck = assetUrl("/visual-ir-assets/footer-mobile-check.svg");
const imgFooterMobileLinkedin = assetUrl("/visual-ir-assets/footer-mobile-linkedin.svg");
const imgFooterMobileWhatsapp = assetUrl("/visual-ir-assets/footer-mobile-whatsapp.svg");

interface FooterSectionProps {
  id?: string;
  className?: string;
}

export default function FooterSection({ id, className = "" }: FooterSectionProps = {}) {
  return (
    <>
      <div
        id={id || "contato"}
        className={`mb-[24px] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 max-lg:hidden ${className}`.trim()}
        data-name="Container"
        data-node-id="1:1095"
        style={{
          transform: "scale(var(--footer-scale, 1))",
          transformOrigin: "center center",
        }}
      >
        <div className="col-1 h-[774px] ml-0 mt-0 overflow-clip relative row-1 w-[1392px]" data-name="Keyboard Section" data-node-id="1:1096">
          <img alt="" className="absolute inset-0 max-w-none object-cover size-full rounded-[30px]" src={assetUrl("/visual-ir-assets/keyboard-section.webp")} />
        </div>
        <div className="figma-font-georgia col-1 flex flex-col justify-center ml-[300px] mt-[472px] not-italic relative row-1 text-[0px] text-center text-white w-[792px]" data-node-id="1:1311">
          <p className="text-[40px] max-lg:text-[clamp(24px,4.5vw,40px)]">
            <HeroTitleTextReveal
              text="Se você precisa"
              delay={0}
              className="leading-[50px] max-lg:leading-[clamp(32px,5.5vw,50px)]"
              noWrap={false}
            />
            {" "}
            <HeroTitleHighlightReveal
              text="construir"
              delay={0.28}
              className="figma-font-newsreader bg-clip-text bg-gradient-to-r font-normal from-[#5483bc] from-[39.423%] italic text-[transparent] to-[#cbe3ff] to-[60.096%] leading-[50px] max-lg:leading-[clamp(32px,5.5vw,50px)]"
            />
            {" "}
            <HeroTitleTextReveal
              text="algo pensado pra seres humanos, vamos conversar."
              delay={0.46}
              className="leading-[50px] max-lg:leading-[clamp(32px,5.5vw,50px)]"
              noWrap={false}
            />
          </p>
        </div>
        <div className="col-1 flex h-[32px] items-center justify-center ml-[48px] mt-[48px] relative row-1 w-[26px]">
          <div className="flex-none rotate-180">
            <div className="h-[32px] relative w-[26px]" data-name="Vector" data-node-id="1:1312">
              <div className="absolute inset-[-9.37%_-15.38%_-15.62%_-11.87%]">
                <img alt="" className="block max-w-none size-full" src={imgVector8} />
              </div>
            </div>
          </div>
        </div>
        <div className="figma-font-geist-mono col-1 content-stretch flex font-light gap-[4px] items-center justify-center ml-[470px] mt-[715px] relative row-1 text-white whitespace-nowrap" data-name="Contact Info" data-node-id="1:1313">
          <div className="flex flex-col justify-center opacity-70 relative shrink-0 text-[14px]" data-node-id="1:1317">
            <p className="leading-[14px]">victorxyn@gmail.com</p>
          </div>
          <div className="flex flex-col justify-center opacity-30 relative shrink-0 text-[16px]" data-node-id="1:1321">
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="text-[16px] leading-[14px]">&nbsp;</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center opacity-70 relative shrink-0 text-[14px]" data-node-id="1:1322">
            <p className="leading-[14px]">(34) 99862-4100</p>
          </div>
          <div className="flex flex-col justify-center opacity-30 relative shrink-0 text-[16px]" data-node-id="1:1323">
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
        <div className="col-1 content-stretch flex gap-[24px] items-center ml-[1244px] mt-[688px] relative row-1" data-name="Social Button Container" data-node-id="1:1327">
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

      <div className="hidden min-[768px]:flex min-[1024px]:hidden justify-center mx-[-24px] w-[calc(100%+48px)]" data-name="FooterSection-tablet" data-node-id="68:512">
        <div className="relative h-[534px] overflow-hidden rounded-[16px] w-[736px]" data-node-id="68:513">
          <div className="absolute inset-0 overflow-hidden rounded-[16px]">
            <div className="-translate-x-1/2 absolute h-[534px] left-1/2 top-0 w-[754px]" data-node-id="68:514">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFooterMobileKeyboard} />
            </div>
          </div>

          <div className="absolute bottom-[32px] left-[32px] right-[32px] flex flex-col gap-[42px] items-center" data-node-id="68:515">
            <div className="figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white tracking-[-0.96px] w-[508px]" data-node-id="68:516">
              <p className="text-[32px]">
                <HeroTitleTextReveal text="Se você precisa" delay={0} className="leading-[42px]" noWrap={false} />
                {" "}
                <HeroTitleHighlightReveal
                  text="construir"
                  delay={0.24}
                  className="figma-font-newsreader bg-clip-text bg-gradient-to-r font-normal from-[#5483bc] from-[55.769%] italic leading-[42px] text-[transparent] to-[#cbe3ff] to-[77.885%]"
                />
                {" "}
                <HeroTitleTextReveal
                  text="algo pensado pra seres humanos, vamos conversar."
                  delay={0.42}
                  className="leading-[42px]"
                  noWrap={false}
                />
              </p>
            </div>

            <div className="figma-font-geist-mono content-stretch flex flex-col font-light gap-[14px] items-center justify-center leading-[0] mix-blend-color-dodge relative shrink-0 text-[#d1d1d1] text-[12px] whitespace-nowrap" data-node-id="68:517">
              <div className="flex flex-col justify-center relative shrink-0"><p className="leading-[14px]">victorxyn@gmail.com</p></div>
              <div className="flex flex-col justify-center relative shrink-0"><p className="leading-[14px]">(34) 99862-4100</p></div>
              <div className="flex flex-col justify-center relative shrink-0"><p className="leading-[14px]">Uberlândia MG</p></div>
            </div>

            <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-node-id="68:518">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-180">
                  <div className="h-[18px] relative w-[15px]" data-node-id="68:519">
                    <div className="absolute inset-[0_0_0_3.51%]">
                      <img alt="" className="block max-w-none size-full" src={imgFooterMobileCheck} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="68:520">
                <div className="relative shrink-0 size-[28px]">
                  <img alt="" className="absolute inset-0 max-w-none size-full" src={imgFooterMobileLinkedin} />
                </div>
                <div className="relative shrink-0 size-[28px]">
                  <img alt="" className="absolute inset-0 max-w-none size-full" src={imgFooterMobileWhatsapp} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hidden max-md:flex items-end justify-center mt-[62px] mx-[-16px] relative rounded-[16px] overflow-hidden h-[534px]"
        style={{ width: "calc(100% + 32px)" }}
        data-name="FooterSection-mobile"
        data-node-id="67:2576"
      >
        <div className="absolute inset-0 overflow-clip rounded-[16px]" data-node-id="67:2577">
          <div className="-translate-x-1/2 absolute h-[534px] left-1/2 top-0 w-[754px]" data-name="Keyboard Section 1" data-node-id="67:2578">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFooterMobileKeyboard} />
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[36px] items-center justify-end p-[32px] relative shrink-0 w-full h-full" data-node-id="67:2579">
          <div className="figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white tracking-[-0.6px] w-full" data-node-id="67:2580">
            <p className="text-[20px]">
              <HeroTitleTextReveal text="Se você precisa" delay={0} className="leading-[26px]" noWrap={false} />
              {" "}
              <HeroTitleHighlightReveal
                text="construir"
                delay={0.22}
                className="figma-font-newsreader bg-clip-text bg-gradient-to-r font-normal from-[#5483bc] from-[55.769%] italic leading-[26px] text-[transparent] to-[#cbe3ff] to-[77.885%]"
              />
              {" "}
              <HeroTitleTextReveal
                text="algo pensado pra seres humanos, vamos conversar."
                delay={0.38}
                className="leading-[26px]"
                noWrap={false}
              />
            </p>
          </div>

          <div className="figma-font-geist-mono content-stretch flex flex-col font-light gap-[14px] items-center justify-center leading-[0] mix-blend-color-dodge relative shrink-0 text-[#d1d1d1] text-[12px] whitespace-nowrap" data-name="Contact Info" data-node-id="67:2581">
            <div className="flex flex-col justify-center relative shrink-0" data-node-id="67:2582">
              <p className="leading-[14px]">victorxyn@gmail.com</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0" data-node-id="67:2583">
              <p className="leading-[14px]">(34) 99862-4100</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0" data-node-id="67:2584">
              <p className="leading-[14px]">Uberlândia MG</p>
            </div>
          </div>

          <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-node-id="67:2585">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-180">
                <div className="h-[18px] relative w-[15px]" data-name="Vector" data-node-id="67:2586">
                  <div className="absolute inset-[0_0_0_3.51%]">
                    <img alt="" className="block max-w-none size-full" src={imgFooterMobileCheck} />
                  </div>
                </div>
              </div>
            </div>

            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="67:2587">
              <div className="relative shrink-0 size-[28px]" data-name="Social Button" data-node-id="67:2588">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={imgFooterMobileLinkedin} />
              </div>
              <div className="relative shrink-0 size-[28px]" data-name="Social Button Icon" data-node-id="67:2592">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={imgFooterMobileWhatsapp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
