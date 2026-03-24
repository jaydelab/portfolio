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

const imgVector9 = "/visual-ir-assets/994144d485b287b95c9e3138c9d881eeb59bb13f.svg";

export default function Web1440Px() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[150px] items-center p-[24px] relative size-full" data-name="web-1440px" data-node-id="1:86">
      <BadgeHeader />
      <div className="content-stretch flex flex-col gap-[180px] items-center relative shrink-0 w-full" data-node-id="1:88">
        <HeroSection />
        <AboutSection />
        <CaseStudyIntro />
        <CaseStudyWAP />
        <CaseStudyCoolhunting />
        <CaseStudyConnectHunt />
        <CaseStudyPortal />
        <TestimonialSection />
        <ONovoMercadoSection />
        <HighlightsSection />
        <ProjectsGrid />
        <CTASection />
        <FooterSection />
      </div>
      <div className="absolute inset-[36.2%_36.33%_62.5%_43.78%]" data-name="Vector" data-node-id="1:87">
        <img alt="" className="absolute block max-w-none size-full" src={imgVector9} />
      </div>
    </div>
  );
}
