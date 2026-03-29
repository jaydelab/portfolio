import { HeroTitleTextReveal } from "../effects/hero-title-reveal";
import { assetUrl } from "../../lib/asset-url";
import { useActiveBreakpoint } from "../../lib/use-active-breakpoint";

const DESKTOP_ARROW = assetUrl("/visual-ir-assets/icon-svg.svg");
const MOBILE_ARROW = assetUrl("/visual-ir-assets/cta-mobile-arrow.svg");
const CTA_COPY =
  "O que você precisa? Resolver um problema complexo? Prazer. Tem uma idéia que não sai do papel no tempo que precisa? Me chama. Do simples ao único eu resolvo.";

interface CTASectionProps {
  id?: string;
  className?: string;
}

function DesktopCTAButton() {
  return (
    <a
      className="group relative inline-flex h-[44px] w-[119.59px] shrink-0 overflow-clip rounded-[50px] bg-[rgba(12,12,12,0.82)] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.17),0px_23px_14px_0px_rgba(0,0,0,0.1),0px_41px_17px_0px_rgba(0,0,0,0.03)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2d81ff]"
      href="#contato"
    >
      <div className="figma-font-geist absolute left-[20px] top-1/2 flex h-[20px] w-[51.948px] -translate-y-1/2 flex-col justify-center text-[14px] font-medium leading-[0] tracking-[-0.14px] text-white">
        <p className="leading-[20px]">Contato</p>
      </div>
      <div className="absolute inset-[12px_20px_12px_79.59px] overflow-clip">
        <img
          alt=""
          className="absolute block size-full max-w-none transition-transform duration-200 group-hover:translate-x-[2px]"
          src={DESKTOP_ARROW}
        />
      </div>
      <div className="absolute inset-px overflow-clip rounded-[50px]">
        <div className="absolute left-0 top-0 h-[42px] w-[117.59px] rounded-[50px] border border-[rgba(255,255,255,0.1)] border-solid" />
      </div>
    </a>
  );
}

function CompactCTAButton({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <a
      className={`group relative inline-flex h-[42px] shrink-0 overflow-clip rounded-[50px] bg-[#363636] p-px shadow-[0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.17),0px_23px_14px_0px_rgba(0,0,0,0.1),0px_41px_17px_0px_rgba(0,0,0,0.03)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2d81ff] ${fullWidth ? "w-full" : "w-[127px]"}`.trim()}
      href="#contato"
    >
      <div className="flex min-h-px w-full min-w-px flex-[1_0_0] items-center justify-center gap-[12px] rounded-[50px] border border-[#4b4b4b] border-solid px-[16px]">
        <div className="figma-font-geist flex shrink-0 flex-col justify-center text-[14px] font-medium leading-[0] text-[#f7f7f7]">
          <p className="leading-[normal]">Contato</p>
        </div>
        <div className="relative h-[10px] w-[12px] shrink-0">
          <img
            alt=""
            className="absolute inset-0 size-full max-w-none transition-transform duration-200 group-hover:translate-x-[2px]"
            src={MOBILE_ARROW}
          />
        </div>
      </div>
    </a>
  );
}

function DesktopContent() {
  return (
    <div className="flex w-full max-w-[996px] flex-col items-center gap-[24px] text-center">
      <div className="figma-font-georgia flex w-full flex-col justify-center text-[70px] not-italic tracking-[-3.5px] text-[#393737]">
        <p className="leading-[90px]">
          <HeroTitleTextReveal
            className="figma-font-georgia not-italic tracking-[-3.5px] leading-[90px]"
            text="Seu projeto é exigente ou pontual?"
            delay={0}
            noWrap={false}
          />
        </p>
      </div>
      <div className="figma-font-geist flex w-[792px] max-w-full flex-col justify-center text-[20px] font-normal text-black opacity-50">
        <p className="leading-[32px]">{CTA_COPY}</p>
      </div>
      <DesktopCTAButton />
    </div>
  );
}

function TabletActiveContent() {
  return (
    <div className="flex w-full max-w-[509px] flex-col items-center gap-[24px] text-center">
      <div className="figma-font-georgia flex w-full flex-col justify-center text-[40px] not-italic tracking-[-0.8px] text-[#393737]">
        <p className="leading-[48px]">
          <HeroTitleTextReveal
            className="figma-font-georgia not-italic tracking-[-0.8px]"
            text="Seu projeto é exigente ou pontual?"
            delay={0}
            noWrap={false}
          />
        </p>
      </div>
      <div className="figma-font-geist flex w-full flex-col justify-center text-[16px] font-normal text-black opacity-50">
        <p className="leading-[26px]">{CTA_COPY}</p>
      </div>
      <CompactCTAButton />
    </div>
  );
}

function MobileActiveContent() {
  return (
    <div className="flex w-full max-w-[272px] flex-col items-center gap-[20px] text-center">
      <div className="figma-font-georgia flex w-full flex-col justify-center text-[clamp(30px,7.5vw,40px)] not-italic tracking-[-0.6px] text-[#393737]">
        <p className="leading-[clamp(38px,9.5vw,50px)]">
          <HeroTitleTextReveal
            className="figma-font-georgia not-italic tracking-[-0.6px]"
            text="Seu projeto é"
            delay={0}
            noWrap={false}
          />
        </p>
        <p className="leading-[clamp(38px,9.5vw,50px)]">
          <HeroTitleTextReveal
            className="figma-font-georgia not-italic tracking-[-0.6px]"
            text="exigente ou pontual?"
            delay={0.16}
            noWrap={false}
          />
        </p>
      </div>
      <div className="figma-font-geist flex w-full flex-col justify-center text-[16px] font-normal text-black opacity-50">
        <p className="leading-[26px]">{CTA_COPY}</p>
      </div>
      <CompactCTAButton />
    </div>
  );
}

export default function CTASection({
  id,
  className = "",
}: CTASectionProps = {}) {
  const activeBreakpoint = useActiveBreakpoint();

  return (
    <div id={id} className={`w-full ${className}`.trim()}>
      {activeBreakpoint === "desktop" ? (
      <div
        className="mx-auto flex w-full max-w-[996px] flex-col items-center max-lg:hidden"
        data-name="CTASection-desktop"
      >
        <DesktopContent />
      </div>
      ) : null}

      {activeBreakpoint === "tablet" ? (
      <div
        className="hidden min-[768px]:flex min-[1024px]:hidden w-full justify-center"
        data-name="CTASection-tablet"
      >
        <div className="flex w-full max-w-[684px] justify-center">
          <TabletActiveContent />
        </div>
      </div>
      ) : null}

      {activeBreakpoint === "mobile" ? (
      <div
        className="hidden max-md:flex w-full mt-[62px] justify-center"
        data-name="CTASection-mobile"
      >
        <MobileActiveContent />
      </div>
      ) : null}
    </div>
  );
}
