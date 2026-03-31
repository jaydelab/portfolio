import { HeroTitleTextReveal } from "../effects/hero-title-reveal";
import SectionActionButtons from "./SectionActionButtons";
import { useActiveBreakpoint } from "../../lib/use-active-breakpoint";

const CTA_COPY =
  "O que você precisa? Resolver um problema complexo? Prazer. Tem uma ideia que não sai do papel no tempo que precisa? Me chama. Do simples ao único eu resolvo.";

interface CTASectionProps {
  id?: string;
  className?: string;
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
      <SectionActionButtons />
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
      <SectionActionButtons />
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
      <SectionActionButtons />
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
      <h2 className="sr-only">Contato</h2>
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
