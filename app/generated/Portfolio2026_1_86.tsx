import BadgeHeader from "../components/sections/BadgeHeader";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import CaseStudyIntro from "../components/sections/CaseStudyIntro";
import CaseStudyWAP from "../components/sections/CaseStudyWAP";
import CaseStudyCoolhunting from "../components/sections/CaseStudyCoolhunting";
import CaseStudyConnectHunt from "../components/sections/CaseStudyConnectHunt";
import CaseStudyPortal from "../components/sections/CaseStudyPortal";
import TestimonialSection from "../components/sections/TestimonialSection";
import ONovoMercadoSection from "../components/sections/ONovoMercadoSection";
import HighlightsSection from "../components/sections/HighlightsSection";
import ProjectsGrid from "../components/sections/ProjectsGrid";
import CTASection from "../components/sections/CTASection";
import FooterSection from "../components/sections/FooterSection";
import { assetUrl } from "../lib/asset-url";

const imgVector9 = assetUrl("/visual-ir-assets/994144d485b287b95c9e3138c9d881eeb59bb13f.svg");

type Web1440PxProps = {
  heroEffectReady?: boolean;
};

export default function Web1440Px({ heroEffectReady = true }: Web1440PxProps) {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[150px] max-lg:gap-[32px] max-md:gap-[24px] items-center px-0 pt-[24px] pb-[24px] max-lg:px-0 max-lg:pt-[24px] max-lg:pb-[clamp(16px,2.5vw,24px)] max-md:px-0 max-md:pt-[24px] max-md:pb-[24px] relative size-full" data-name="web-1440px" data-node-id="1:86">
      <BadgeHeader />
      <div className="content-stretch flex flex-col gap-[180px] min-[768px]:max-lg:gap-[clamp(82px,10.68vw,180px)] max-md:gap-0 items-center relative shrink-0 w-full" data-node-id="1:88">
        <HeroSection heroEffectReady={heroEffectReady} />
        <AboutSection />
        <CaseStudyIntro />
        <CaseStudyWAP className="max-lg:hidden" />
        <CaseStudyCoolhunting className="max-lg:hidden" />
        <CaseStudyConnectHunt className="max-lg:hidden" />
        <CaseStudyPortal className="max-lg:hidden" />
        <TestimonialSection />
        <ONovoMercadoSection className="max-lg:hidden" />
        <HighlightsSection />
        <ProjectsGrid />
        <CTASection />
        <FooterSection />
      </div>
      <div className="absolute inset-[36.2%_36.33%_62.5%_43.78%] max-lg:hidden" data-name="Vector" data-node-id="1:87">
        <img alt="" className="absolute block max-w-none size-full" src={imgVector9} />
      </div>
    </div>
  );
}
