import { HeroTitleHighlightReveal, HeroTitleTextReveal } from "../effects/hero-title-reveal";
import { useActiveBreakpoint } from "../../lib/use-active-breakpoint";
import { assetUrl } from "../../lib/asset-url";
import { WHATSAPP_HREF, WHATSAPP_PHONE } from "../../lib/whatsapp-link";

const imgVector8 = assetUrl("/visual-ir-assets/vector-8.svg");
const imgSocialButtonLinkedIn = assetUrl("/visual-ir-assets/social-button-linkedin-safe.svg");
const imgSocialButtonWhatsapp = assetUrl("/visual-ir-assets/social-button-whatsapp-safe.svg");
const imgFooterMobileKeyboard = assetUrl("/visual-ir-assets/footer-mobile-keyboard.webp");
const imgFooterMobileCheck = assetUrl("/visual-ir-assets/footer-mobile-check.svg");
const imgFooterMobileLinkedIn = assetUrl("/visual-ir-assets/footer-mobile-linkedin-safe.svg");
const imgFooterMobileWhatsapp = assetUrl("/visual-ir-assets/footer-mobile-whatsapp-safe.svg");
const FOOTER_TITLE_START = "Se você precisa";
const FOOTER_TITLE_HIGHLIGHT = "construir";
const FOOTER_TITLE_END = "algo pensado pra seres humanos, vamos conversar.";
const FOOTER_EMAIL = "victorxyn@gmail.com";
const FOOTER_PHONE = WHATSAPP_PHONE;
const FOOTER_LOCATION = "Uberlândia MG";
const LINKEDIN_HREF = "https://www.linkedin.com/in/victorbrx/";

interface FooterSectionProps {
  id?: string;
  className?: string;
}

function FooterSocialButton({
  size,
  type,
}: {
  size: 28 | 38;
  type: "linkedin" | "whatsapp";
}) {
  const src =
    size === 38
      ? type === "linkedin"
        ? imgSocialButtonLinkedIn
        : imgSocialButtonWhatsapp
      : type === "linkedin"
        ? imgFooterMobileLinkedIn
        : imgFooterMobileWhatsapp;

  const commonProps = {
    className: "relative shrink-0 transition-[transform,opacity] duration-150 hover:-translate-y-px hover:opacity-85",
    "data-name": type === "linkedin" ? "Social Button" : "Social Button Icon",
    style: {
      borderRadius: size === 38 ? 12 : 8,
      height: size,
      width: size,
    },
  } as const;

  const icon = (
    <img
      alt=""
      className="absolute inset-0 block size-full max-w-none"
      decoding="async"
      loading="lazy"
      src={src}
    />
  );

  if (type === "whatsapp") {
    return (
      <a
        {...commonProps}
        aria-label="Abrir conversa no WhatsApp"
        href={WHATSAPP_HREF}
        rel="noopener noreferrer"
        target="_blank"
      >
        {icon}
      </a>
    );
  }

  if (type === "linkedin") {
    return (
      <a
        {...commonProps}
        aria-label="Abrir perfil no LinkedIn"
        href={LINKEDIN_HREF}
        rel="noopener noreferrer"
        target="_blank"
      >
        {icon}
      </a>
    );
  }

  return (
    <div
      {...commonProps}
    >
      {icon}
    </div>
  );
}

export default function FooterSection({ id, className = "" }: FooterSectionProps = {}) {
  const activeBreakpoint = useActiveBreakpoint();

  return (
    <>
      <h2 className="sr-only">Rodapé e informações de contato</h2>
      {activeBreakpoint === "desktop" ? (
      <div
        id={id || "contato"}
        className={`mb-[24px] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 max-lg:hidden ${className}`.trim()}
        data-name="Container"
        data-node-id="1:1095"
        style={{
          transform: "scale(var(--footer-scale, 1))",
          transformOrigin: "top center",
          marginBottom: "calc((var(--footer-scale, 1) - 1) * 774px)",
        }}
      >
        <div className="col-1 h-[774px] ml-0 mt-0 overflow-clip relative row-1 w-[1392px]" data-name="Keyboard Section" data-node-id="1:1096">
          <img decoding="async" loading="lazy" alt="" className="absolute inset-0 max-w-none object-cover size-full rounded-[30px]" src={assetUrl("/visual-ir-assets/keyboard-section.webp")} />
        </div>
        <div className="figma-font-georgia col-1 flex flex-col justify-center ml-[300px] mt-[472px] not-italic relative row-1 text-[0px] text-center text-white w-[792px]" data-node-id="1:1311">
          <p className="text-[40px] max-lg:text-[clamp(24px,4.5vw,40px)]">
            <HeroTitleTextReveal
              text={FOOTER_TITLE_START}
              delay={0}
              className="leading-[50px] max-lg:leading-[clamp(32px,5.5vw,50px)]"
              noWrap={false}
            />
            {" "}
            <HeroTitleHighlightReveal
              text={FOOTER_TITLE_HIGHLIGHT}
              delay={0.28}
              className="figma-font-newsreader bg-clip-text bg-gradient-to-r font-normal from-[#5483bc] from-[39.423%] italic text-[transparent] to-[#cbe3ff] to-[60.096%] leading-[50px] max-lg:leading-[clamp(32px,5.5vw,50px)]"
            />
            {" "}
            <HeroTitleTextReveal
              text={FOOTER_TITLE_END}
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
                <img decoding="async" loading="lazy" alt="" className="block max-w-none size-full" src={imgVector8} />
              </div>
            </div>
          </div>
        </div>
        <div className="figma-font-geist-mono col-1 content-stretch flex font-light gap-[4px] items-center justify-center leading-[0] ml-[470px] mt-[715px] mix-blend-color-dodge relative row-1 text-[#d1d1d1] whitespace-nowrap" data-name="Contact Info" data-node-id="1:1313">
          <div className="flex flex-col justify-center relative shrink-0 text-[14px]" data-node-id="1:1317">
            <p className="leading-[14px]">{FOOTER_EMAIL}</p>
          </div>
          <div className="flex flex-col justify-center opacity-30 relative shrink-0 text-[16px]" data-node-id="1:1321">
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="text-[16px] leading-[14px]">&nbsp;</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[14px]" data-node-id="1:1322">
            <p className="leading-[14px]">{FOOTER_PHONE}</p>
          </div>
          <div className="flex flex-col justify-center opacity-30 relative shrink-0 text-[16px]" data-node-id="1:1323">
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="text-[16px] leading-[14px]">&nbsp;</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[14px]" data-node-id="1:1326">
            <p className="leading-[14px]">{FOOTER_LOCATION}</p>
          </div>
        </div>
        <div className="col-1 content-stretch flex gap-[24px] items-center ml-[1244px] mt-[688px] relative row-1" data-name="Social Button Container" data-node-id="1:1327">
          <FooterSocialButton size={38} type="linkedin" />
          <FooterSocialButton size={38} type="whatsapp" />
        </div>
      </div>
      ) : null}

      {activeBreakpoint === "tablet" ? (
      <div className="hidden min-[768px]:flex min-[1024px]:hidden justify-center w-full" data-name="FooterSection-tablet" data-node-id="68:512">
        <div className="relative h-[534px] overflow-hidden rounded-[16px] w-full max-w-[736px]" data-node-id="68:513">
          <div className="absolute inset-0 overflow-hidden rounded-[16px]">
            <div className="-translate-x-1/2 absolute h-[534px] left-1/2 top-0 w-[754px]" data-node-id="68:514">
              <img decoding="async" loading="lazy" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFooterMobileKeyboard} />
            </div>
          </div>

          <div className="absolute bottom-[32px] left-[32px] right-[32px] flex flex-col gap-[42px] items-center" data-node-id="68:515">
            <div className="figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white tracking-[-0.96px] w-[508px]" data-node-id="68:516">
              <p className="text-[32px]">
                <HeroTitleTextReveal text={FOOTER_TITLE_START} delay={0} className="leading-[42px]" noWrap={false} />
                {" "}
                <HeroTitleHighlightReveal
                  text={FOOTER_TITLE_HIGHLIGHT}
                  delay={0.24}
                  className="figma-font-newsreader bg-clip-text bg-gradient-to-r font-normal from-[#5483bc] from-[55.769%] italic leading-[42px] text-[transparent] to-[#cbe3ff] to-[77.885%]"
                />
                {" "}
                <HeroTitleTextReveal
                  text={FOOTER_TITLE_END}
                  delay={0.42}
                  className="leading-[42px]"
                  noWrap={false}
                />
              </p>
            </div>

            <div className="figma-font-geist-mono content-stretch flex flex-col font-light gap-[14px] items-center justify-center leading-[0] mix-blend-color-dodge relative shrink-0 text-[#d1d1d1] text-[12px] whitespace-nowrap" data-node-id="68:517">
              <div className="flex flex-col justify-center relative shrink-0"><p className="leading-[14px]">{FOOTER_EMAIL}</p></div>
              <div className="flex flex-col justify-center relative shrink-0"><p className="leading-[14px]">{FOOTER_PHONE}</p></div>
              <div className="flex flex-col justify-center relative shrink-0"><p className="leading-[14px]">{FOOTER_LOCATION}</p></div>
            </div>

            <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-node-id="68:518">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-180">
                  <div className="h-[18px] relative w-[15px]" data-node-id="68:519">
                    <div className="absolute inset-[0_0_0_3.51%]">
                      <img decoding="async" loading="lazy" alt="" className="block max-w-none size-full" src={imgFooterMobileCheck} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="68:520">
                <FooterSocialButton size={28} type="linkedin" />
                <FooterSocialButton size={28} type="whatsapp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : null}

      {activeBreakpoint === "mobile" ? (
      <div
        className="hidden max-md:flex items-end justify-center mt-[62px] relative rounded-[16px] overflow-hidden h-[534px] w-full"
        data-name="FooterSection-mobile"
        data-node-id="67:2576"
      >
        <div className="absolute inset-0 overflow-clip rounded-[16px]" data-node-id="67:2577">
          <div className="-translate-x-1/2 absolute h-[534px] left-1/2 top-0 w-[754px]" data-name="Keyboard Section 1" data-node-id="67:2578">
            <img decoding="async" loading="lazy" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFooterMobileKeyboard} />
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[36px] items-center justify-end p-[32px] relative shrink-0 w-full h-full" data-node-id="67:2579">
          <div className="figma-font-georgia flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white tracking-[-0.6px] w-full" data-node-id="67:2580">
            <p className="text-[20px]">
              <HeroTitleTextReveal text={FOOTER_TITLE_START} delay={0} className="leading-[26px]" noWrap={false} />
              {" "}
              <HeroTitleHighlightReveal
                text={FOOTER_TITLE_HIGHLIGHT}
                delay={0.22}
                className="figma-font-newsreader bg-clip-text bg-gradient-to-r font-normal from-[#5483bc] from-[55.769%] italic leading-[26px] text-[transparent] to-[#cbe3ff] to-[77.885%]"
              />
              {" "}
              <HeroTitleTextReveal
                text={FOOTER_TITLE_END}
                delay={0.38}
                className="leading-[26px]"
                noWrap={false}
              />
            </p>
          </div>

          <div className="figma-font-geist-mono content-stretch flex flex-col font-light gap-[14px] items-center justify-center leading-[0] mix-blend-color-dodge relative shrink-0 text-[#d1d1d1] text-[12px] whitespace-nowrap" data-name="Contact Info" data-node-id="67:2581">
            <div className="flex flex-col justify-center relative shrink-0" data-node-id="67:2582">
              <p className="leading-[14px]">{FOOTER_EMAIL}</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0" data-node-id="67:2583">
              <p className="leading-[14px]">{FOOTER_PHONE}</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0" data-node-id="67:2584">
              <p className="leading-[14px]">{FOOTER_LOCATION}</p>
            </div>
          </div>

          <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-node-id="67:2585">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-180">
                <div className="h-[18px] relative w-[15px]" data-name="Vector" data-node-id="67:2586">
                  <div className="absolute inset-[0_0_0_3.51%]">
                    <img decoding="async" loading="lazy" alt="" className="block max-w-none size-full" src={imgFooterMobileCheck} />
                  </div>
                </div>
              </div>
            </div>

            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="67:2587">
              <FooterSocialButton size={28} type="linkedin" />
              <FooterSocialButton size={28} type="whatsapp" />
            </div>
          </div>
        </div>
      </div>
      ) : null}
    </>
  );
}
