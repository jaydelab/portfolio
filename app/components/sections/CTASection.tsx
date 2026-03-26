import CTAIconMorph from "../effects/cta-icon-morph";
import { HeroTitleTextReveal } from "../effects/hero-title-reveal";
import { assetUrl } from "../../lib/asset-url";

const DESKTOP_ARROW = assetUrl("/visual-ir-assets/icon-svg.svg");
const MOBILE_ARROW = assetUrl("/visual-ir-assets/cta-mobile-arrow.svg");
const CTA_COPY =
  "O que você precisa? Resolver um problema complexo? Prazer. Tem uma idéia que não sai do papel no tempo que precisa? Me chama. Do simples ao único eu resolvo.";
const TABLET_CTA_ICONS = [
  "/visual-ir-assets/dock/Icon-1.svg",
  "/visual-ir-assets/dock/Icon-2.svg",
  "/visual-ir-assets/dock/Icon-4.svg",
  "/visual-ir-assets/dock/Icon-5.svg",
  "/visual-ir-assets/dock/Icon-6.svg",
  "/visual-ir-assets/dock/Icon-7.svg",
  "/visual-ir-assets/dock/Icon-8.svg",
  "/visual-ir-assets/dock/Icon-10.svg",
  "/visual-ir-assets/dock/Icon-11.svg",
  "/visual-ir-assets/dock/Icon-12.svg",
  "/visual-ir-assets/cta-orbit/cta-orbit-extra-figma.webp",
  "/visual-ir-assets/cta-orbit/cta-orbit-extra-framer-liquid-glass.webp",
  "/visual-ir-assets/cta-orbit/cta-orbit-extra-adobe-photoshop.webp",
  "/visual-ir-assets/cta-orbit/cta-orbit-extra-sketch-liquid-glass.webp",
].map(assetUrl);
const MOBILE_CTA_ICONS = [
  "/visual-ir-assets/dock/Icon-1.svg",
  "/visual-ir-assets/dock/Icon-2.svg",
  "/visual-ir-assets/dock/Icon-4.svg",
  "/visual-ir-assets/dock/Icon-5.svg",
  "/visual-ir-assets/dock/Icon-6.svg",
  "/visual-ir-assets/dock/Icon-7.svg",
  "/visual-ir-assets/dock/Icon-8.svg",
  "/visual-ir-assets/dock/Icon-10.svg",
  "/visual-ir-assets/cta-orbit/cta-orbit-extra-figma.webp",
  "/visual-ir-assets/cta-orbit/cta-orbit-extra-framer-liquid-glass.webp",
  "/visual-ir-assets/cta-orbit/cta-orbit-extra-adobe-photoshop.webp",
].map(assetUrl);

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

function DesktopIntro() {
  return (
    <div className="figma-font-georgia flex w-[980px] flex-col justify-center text-center text-[64px] not-italic tracking-[-1.92px] text-[#393737]">
      <p className="leading-[72px]">
        <HeroTitleTextReveal
          text="Seu projeto é exigente ou pontual?"
          delay={0}
          noWrap={false}
        />
      </p>
    </div>
  );
}

function DesktopContent() {
  return (
    <div className="flex w-[920px] flex-col items-center gap-[20px] text-center">
      <div className="figma-font-georgia flex w-full flex-col justify-center text-[56px] not-italic tracking-[-1.68px] text-[#393737]">
        <p className="leading-[68px]">
          <HeroTitleTextReveal
            text="Seu projeto é exigente ou pontual?"
            delay={0}
            noWrap={false}
          />
        </p>
      </div>
      <div className="figma-font-geist flex max-w-[760px] flex-col justify-center text-[20px] font-normal text-black opacity-60">
        <p className="leading-[30px]">{CTA_COPY}</p>
      </div>
      <DesktopCTAButton />
    </div>
  );
}

function TabletCircleContent() {
  return (
    <div className="flex w-[460px] flex-col items-center gap-[16px] text-center">
      <div className="figma-font-georgia flex flex-col justify-center text-[34px] not-italic tracking-[-0.68px] text-[#393737]">
        <p className="leading-[42px]">
          <HeroTitleTextReveal
            text="Seu projeto é exigente"
            delay={0}
            noWrap={false}
          />
        </p>
        <p className="leading-[42px]">
          <HeroTitleTextReveal
            text="ou pontual?"
            delay={0.18}
            noWrap={false}
          />
        </p>
      </div>
      <div className="figma-font-geist flex max-w-[420px] flex-col justify-center text-[15px] font-normal text-black opacity-60">
        <p className="leading-[24px]">{CTA_COPY}</p>
      </div>
    </div>
  );
}

function TabletActiveContent() {
  return (
    <div className="flex w-[560px] flex-col items-center gap-[18px] text-center">
      <div className="figma-font-georgia flex flex-col justify-center text-[36px] not-italic tracking-[-0.72px] text-[#393737]">
        <p className="leading-[46px]">
          <HeroTitleTextReveal
            text="Seu projeto é exigente"
            delay={0}
            noWrap={false}
          />
        </p>
        <p className="leading-[46px]">
          <HeroTitleTextReveal
            text="ou pontual?"
            delay={0.18}
            noWrap={false}
          />
        </p>
      </div>
      <div className="figma-font-geist flex max-w-[500px] flex-col justify-center text-[16px] font-normal text-black opacity-60">
        <p className="leading-[26px]">{CTA_COPY}</p>
      </div>
      <CompactCTAButton />
    </div>
  );
}

function MobileCircleContent() {
  return (
    <div className="flex w-[270px] flex-col items-center gap-[12px] text-center">
      <div className="figma-font-georgia flex flex-col justify-center text-[24px] not-italic tracking-[-0.48px] text-[#393737]">
        <p className="leading-[32px]">
          <HeroTitleTextReveal
            text="Seu projeto é"
            delay={0}
            noWrap={false}
          />
        </p>
        <p className="leading-[32px]">
          <HeroTitleTextReveal
            text="exigente ou pontual?"
            delay={0.16}
            noWrap={false}
          />
        </p>
      </div>
      <div className="figma-font-geist flex w-full flex-col justify-center text-[14px] font-normal text-black opacity-60">
        <p className="leading-[23px]">{CTA_COPY}</p>
      </div>
    </div>
  );
}

function MobileActiveContent() {
  return (
    <div className="flex w-full max-w-[272px] flex-col items-start gap-[14px] text-left">
      <div className="figma-font-georgia flex w-full flex-col justify-center text-[24px] not-italic tracking-[-0.48px] text-[#393737]">
        <p className="leading-[34px]">
          <HeroTitleTextReveal
            text="Seu projeto é"
            delay={0}
            noWrap={false}
          />
        </p>
        <p className="leading-[34px]">
          <HeroTitleTextReveal
            text="exigente ou pontual?"
            delay={0.16}
            noWrap={false}
          />
        </p>
      </div>
      <div className="figma-font-geist flex w-full flex-col justify-center text-[16px] font-normal text-black opacity-60">
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
  return (
    <div id={id} className={`w-full ${className}`.trim()}>
      <div
        className="relative mx-auto w-full max-w-[1200px] max-lg:hidden"
        data-name="CTASection-desktop"
      >
        <CTAIconMorph
          arcApex={0.58}
          arcCenterX={54}
          arcRadiusScale={0.88}
          arcSpread={138}
          cardSize={84}
          circleRadiusMax={256}
          circleRadiusScale={0.34}
          className="h-[980px]"
          content={<DesktopContent />}
          contentClassName="inset-x-0 top-[76px] z-20 flex justify-center px-[24px]"
          iconSize={76}
          introClassName="inset-x-0 top-[56px] z-10 flex justify-center px-[24px]"
          introContent={<DesktopIntro />}
          lineGap={12}
          sceneClassName="translate-y-[42px] mx-[-120px]"
          sceneStyle={{ width: "calc(100% + 240px)" }}
          stickyClassName="top-[42px] h-[520px]"
        />
      </div>

      <div
        className="hidden min-[768px]:flex min-[1024px]:hidden w-full justify-center"
        data-name="CTASection-tablet"
      >
        <div className="w-full max-w-[684px]">
          <CTAIconMorph
            activeContent={<TabletActiveContent />}
            activeContentClassName="inset-x-0 top-[24px] z-20 flex justify-center px-[24px]"
            arcApex={0.50}
            arcCenterX={0}
            arcRadiusScale={0.84}
            arcSpread={122}
            cardSize={92}
            circleAngleOffset={-105}
            circleContent={<TabletCircleContent />}
            circleContentClassName="mt-[10px] w-[430px] max-w-[calc(100vw_-_112px)]"
            circleOffsetY={52}
            circleRadiusMax={300}
            circleRadiusScale={0.56}
            className="h-[740px]"
            iconSize={84}
            lineGap={12}
            maxScroll={1000}
            morphDistance={240}
            sceneClassName="translate-y-[40px] mx-[-96px]"
            sceneStyle={{ width: "calc(100% + 192px)" }}
            sources={TABLET_CTA_ICONS}
            stickyClassName="top-[28px] h-[440px]"
            touchMultiplier={2.2}
          />
        </div>
      </div>

      <div
        className="hidden max-md:flex w-full mt-[62px]"
        data-name="CTASection-mobile"
      >
        <CTAIconMorph
          activeContent={<MobileActiveContent />}
          activeContentClassName="inset-x-[24px] top-[10px] z-20 flex justify-center"
          arcApex={0.54}
          arcCenterX={0}
          arcRadiusScale={0.88}
          arcSpread={118}
          cardSize={108}
          circleAngleOffset={-108}
          circleContent={<MobileCircleContent />}
          circleContentClassName="mt-[14px] w-[248px]"
          circleOffsetY={88}
          circleRadiusMax={248}
          circleRadiusScale={0.72}
          className="h-[648px]"
          enableFlip={false}
          iconSize={92}
          lineGap={14}
          maxScroll={800}
          morphDistance={240}
          sceneClassName="translate-y-[54px] mx-[-72px]"
          sceneStyle={{ width: "calc(100% + 144px)" }}
          sources={MOBILE_CTA_ICONS}
          stickyClassName="top-[18px] h-[388px]"
          touchMultiplier={2.4}
        />
      </div>
    </div>
  );
}
