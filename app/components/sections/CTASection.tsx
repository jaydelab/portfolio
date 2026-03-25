const imgPreview12 = "/visual-ir-assets/cta-preview-left.webp";
const imgIcon54 = "/visual-ir-assets/icon-5-4.webp";
const imgIcon53 = "/visual-ir-assets/icon-5-3.webp";
const imgIcon55 = "/visual-ir-assets/icon-5-5.webp";
const imgIcon51 = "/visual-ir-assets/icon-5-1.webp";
const imgPreview14 = "/visual-ir-assets/cta-preview-center.webp";
const imgLargeImageContainer = "/visual-ir-assets/large-image-container.webp";
const imgIcon56 = "/visual-ir-assets/icon-5-4s.webp";
const imgIcon57 = "/visual-ir-assets/icon-5-3s.webp";
const imgIcon58 = "/visual-ir-assets/icon-5-5s.webp";
const imgIcon52 = "/visual-ir-assets/icon-5-1s.webp";
const imgIconSvg = "/visual-ir-assets/icon-svg.svg";

const imgCtaMobileIconTop1 = "/visual-ir-assets/cta-mobile-icon-top-1.webp";
const imgCtaMobileIconTop2 = "/visual-ir-assets/cta-mobile-icon-top-2.webp";
const imgCtaMobileIconTop3 = "/visual-ir-assets/cta-mobile-icon-top-3.webp";
const imgCtaMobileIconTop4 = "/visual-ir-assets/cta-mobile-icon-top-4.webp";
const imgCtaMobileCenter = "/visual-ir-assets/cta-mobile-center.webp";
const imgCtaMobileLeft = "/visual-ir-assets/cta-mobile-left.webp";
const imgCtaMobileRight = "/visual-ir-assets/cta-mobile-right.webp";
const imgCtaMobileIconBottom1 = "/visual-ir-assets/cta-mobile-icon-bottom-1.webp";
const imgCtaMobileIconBottom2 = "/visual-ir-assets/cta-mobile-icon-bottom-2.webp";
const imgCtaMobileIconBottom3 = "/visual-ir-assets/cta-mobile-icon-bottom-3.webp";
const imgCtaMobileIconBottom4 = "/visual-ir-assets/cta-mobile-icon-bottom-4.webp";
const imgCtaMobileArrow = "/visual-ir-assets/cta-mobile-arrow.svg";
const imgCtaMobileUnion = "/visual-ir-assets/cta-mobile-union.webp";

interface CTASectionProps {
  id?: string;
  className?: string;
}

export default function CTASection({ id, className = "" }: CTASectionProps = {}) {
  return (
    <>
      <div
        id={id}
        className={`content-stretch flex flex-col gap-[42px] items-center relative shrink-0 w-full max-w-[1200px] max-[1023px]:hidden ${className}`.trim()}
        data-name="Container"
        data-node-id="1:1062"
      >
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[997px] max-lg:w-full" data-name="Header" data-node-id="1:1063">
          <div className="figma-font-georgia flex flex-col justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#393737] text-[56px] max-lg:text-[clamp(30px,5.5vw,56px)] text-center tracking-[-1.68px] w-[min-content]" data-node-id="1:1064">
            <p className="leading-[68px] max-lg:leading-[clamp(38px,6.8vw,68px)]">Seu projeto é exigente ou pontual?</p>
          </div>
          <div className="figma-font-geist flex flex-col font-normal justify-center leading-[0] opacity-60 relative shrink-0 text-[20px] text-black text-center w-[791px] max-lg:w-full" data-node-id="1:1065">
            <p className="leading-[30px]">O que você precisa? Resolver um problema complexo? Prazer. Tem uma idéia que não sai do papel no tempo que precisa? Me chama. Do simples ao único eu resolvo.</p>
          </div>
          <div className="bg-[rgba(12,12,12,0.82)] h-[44px] overflow-clip relative rounded-[50px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.17),0px_23px_14px_0px_rgba(0,0,0,0.1),0px_41px_17px_0px_rgba(0,0,0,0.03)] shrink-0 w-[119.59px]" data-name="Primary" data-node-id="1:1066">
            <div className="figma-font-geist -translate-y-1/2 absolute flex flex-col font-medium h-[20px] justify-center leading-[0] left-[20px] text-[14px] text-white top-[22px] tracking-[-0.14px] w-[51.948px]" data-node-id="1:1067">
              <p className="leading-[20px]">Contato</p>
            </div>
            <div className="absolute inset-[12px_20px_12px_79.59px] overflow-clip" data-name="Icon → SVG" data-node-id="1:1068">
              <img alt="" className="absolute block max-w-none size-full" src={imgIconSvg} />
            </div>
            <div className="absolute inset-px overflow-clip rounded-[50px]" data-name="Border" data-node-id="1:1071">
              <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid h-[42px] left-0 rounded-[50px] top-0 w-[117.59px]" data-name="Border" data-node-id="1:1072" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full max-lg:flex-col" data-name="Content" data-node-id="1:1073">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[384px] max-lg:w-full" data-name="Image Container" data-node-id="1:1074">
            <div className="h-[278px] relative rounded-[30px] shrink-0 w-full" data-name="Preview-1 2" data-node-id="1:1075">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
                <img alt="" className="absolute h-[112.95%] left-[-4.27%] max-w-none top-[-6.47%] w-[108.55%]" src={imgPreview12} />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icons Row" data-node-id="1:1076">
              <div className="relative shrink-0 size-[82px] max-sm:size-[60px]" data-name="icon-5 4" data-node-id="1:1077">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon54} />
              </div>
              <div className="relative shrink-0 size-[82px] max-sm:size-[60px]" data-name="icon-5 3" data-node-id="1:1078">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon53} />
              </div>
              <div className="relative shrink-0 size-[82px] max-sm:size-[60px]" data-name="icon-5 5" data-node-id="1:1079">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon55} />
              </div>
              <div className="relative shrink-0 size-[82px] max-sm:size-[60px]" data-name="icon-5 1" data-node-id="1:1080">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon51} />
              </div>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[384px] max-lg:w-full max-lg:h-[300px]" data-name="Main Image Container" data-node-id="1:1081">
            <div className="-translate-x-1/2 absolute left-1/2 size-[384px] top-0" data-name="Preview-1 4" data-node-id="1:1082">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPreview14} />
            </div>
            <div className="figma-font-geist -translate-y-1/2 absolute bg-[rgba(45,129,255,0.97)] bg-clip-text flex flex-col font-medium justify-center leading-[0] left-[82px] text-[90px] text-[transparent] top-[195px] tracking-[-4.3px] whitespace-nowrap" data-node-id="1:1084" style={{ fontFeatureSettings: "'ss01'" }} />
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[384px] max-lg:w-full" data-name="Image Container" data-node-id="1:1085">
            <div className="h-[278px] overflow-clip relative rounded-[30px] shrink-0 w-full" data-name="Large Image Container" data-node-id="1:1086">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLargeImageContainer} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icons Row" data-node-id="1:1090">
              <div className="relative shrink-0 size-[82px] max-sm:size-[60px]" data-name="icon-5 4" data-node-id="1:1091">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon56} />
              </div>
              <div className="relative shrink-0 size-[82px] max-sm:size-[60px]" data-name="icon-5 3" data-node-id="1:1092">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon57} />
              </div>
              <div className="relative shrink-0 size-[82px] max-sm:size-[60px]" data-name="icon-5 5" data-node-id="1:1093">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon58} />
              </div>
              <div className="relative shrink-0 size-[82px] max-sm:size-[60px]" data-name="icon-5 1" data-node-id="1:1094">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon52} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden min-[768px]:flex min-[1024px]:hidden flex-col gap-[42px] items-center mx-[-24px] px-[42px] w-[calc(100%+48px)]" data-name="CTASection-tablet" data-node-id="69:924">
        <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[508px]" data-node-id="69:941">
          <div className="content-stretch flex flex-col gap-[12px] items-center leading-[0] relative shrink-0 text-center w-full" data-node-id="69:942">
            <div className="figma-font-georgia flex flex-col justify-center not-italic relative shrink-0 text-[#393737] text-[32px] tracking-[-0.64px] w-full" data-node-id="69:943">
              <p className="leading-[44px]">Seu projeto é exigente ou pontual?</p>
            </div>
            <div className="figma-font-geist flex flex-col font-normal justify-center opacity-60 relative shrink-0 text-[16px] text-black w-full" data-node-id="69:944">
              <p className="leading-[26px]">O que você precisa? Resolver um problema complexo? Prazer. Tem uma idéia que não sai do papel no tempo que precisa? Me chama. Do simples ao único eu resolvo.</p>
            </div>
          </div>
          <div className="bg-[#363636] content-stretch flex flex-col h-[42px] items-start overflow-clip p-px relative rounded-[50px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.17),0px_23px_14px_0px_rgba(0,0,0,0.1),0px_41px_17px_0px_rgba(0,0,0,0.03)] shrink-0 w-[127px]" data-node-id="69:945">
            <div className="border border-[#4b4b4b] border-solid content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-center min-h-px min-w-px px-[24px] relative rounded-[50px] w-full" data-node-id="69:946">
              <div className="figma-font-geist flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[14px] whitespace-nowrap" data-node-id="69:947">
                <p className="leading-[normal]">Contato</p>
              </div>
              <div className="h-[10px] relative shrink-0 w-[12px]" data-node-id="69:948">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={imgCtaMobileArrow} />
              </div>
            </div>
          </div>
        </div>

        <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-node-id="69:949">
          <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[158px]" data-node-id="69:950">
            <div className="h-[115px] relative rounded-[14px] shrink-0 w-full" data-node-id="69:951">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgCtaMobileLeft} />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="69:952">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <div className="aspect-[68/68] flex-[1_0_0] min-h-px min-w-px relative"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconTop1} /></div>
                <div className="aspect-[68/68] flex-[1_0_0] min-h-px min-w-px relative"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconTop2} /></div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <div className="aspect-[68/68] flex-[1_0_0] min-h-px min-w-px relative"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconTop3} /></div>
                <div className="aspect-[68/68] flex-[1_0_0] min-h-px min-w-px relative"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconTop4} /></div>
              </div>
            </div>
          </div>

          <div className="h-[287px] relative shrink-0 w-[272px]" data-node-id="69:953">
            <div className="-translate-x-1/2 absolute h-[287px] left-1/2 top-0 w-[394px]" data-node-id="69:954">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgCtaMobileCenter} />
            </div>
            <div className="-translate-x-1/2 absolute h-[69px] left-1/2 top-[113px] w-[309px]" data-node-id="69:955">
              <img alt="" className="absolute inset-0 max-w-none size-full" src={imgCtaMobileUnion} />
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[158px]" data-node-id="69:956">
            <div className="h-[115px] relative rounded-[14px] shrink-0 w-full" data-node-id="69:957">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgCtaMobileRight} />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="69:958">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <div className="aspect-[68/68] flex-[1_0_0] min-h-px min-w-px relative"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconBottom1} /></div>
                <div className="aspect-[68/68] flex-[1_0_0] min-h-px min-w-px relative"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconBottom2} /></div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <div className="aspect-[68/68] flex-[1_0_0] min-h-px min-w-px relative"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconBottom3} /></div>
                <div className="aspect-[68/68] flex-[1_0_0] min-h-px min-w-px relative"><img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconBottom4} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden max-md:flex flex-col gap-[42px] items-start w-full mt-[62px]" data-name="CTASection-mobile" data-node-id="67:2550">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="67:2551">
          <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-center w-full" data-node-id="67:2552">
            <div className="figma-font-georgia flex flex-col justify-center not-italic relative shrink-0 text-[#393737] text-[24px] tracking-[-0.48px] w-full" data-node-id="67:2553">
              <p className="leading-[34px]">Seu projeto é</p>
              <p className="leading-[34px]">exigente ou pontual?</p>
            </div>
            <div className="figma-font-geist flex flex-col font-normal justify-center opacity-60 relative shrink-0 text-[16px] text-black w-full" data-node-id="67:2554">
              <p className="leading-[26px]">O que você precisa? Resolver um problema complexo? Prazer. Tem uma idéia que não sai do papel no tempo que precisa? Me chama. Do simples ao único eu resolvo.</p>
            </div>
          </div>
          <div className="bg-[#363636] content-stretch flex flex-col h-[42px] items-start overflow-clip p-px relative rounded-[50px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.17),0px_23px_14px_0px_rgba(0,0,0,0.1),0px_41px_17px_0px_rgba(0,0,0,0.03)] shrink-0 w-full" data-name="Button" data-node-id="67:2555">
            <div className="border border-[#4b4b4b] border-solid content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-center min-h-px min-w-px px-[16px] relative rounded-[50px] w-full" data-node-id="67:2556">
              <div className="figma-font-geist flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#f7f7f7] text-[14px] whitespace-nowrap" data-node-id="67:2557">
                <p className="leading-[normal]">Contato</p>
              </div>
              <div className="h-[10px] relative shrink-0 w-[12px]" data-name="Vector" data-node-id="67:2558">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={imgCtaMobileArrow} />
              </div>
            </div>
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="67:2559">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Icons Row" data-node-id="67:2560">
            <div className="aspect-[62/62] flex-[1_0_0] min-h-px min-w-px relative" data-name="icon-5 4" data-node-id="67:2561">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconTop1} />
            </div>
            <div className="aspect-[62/62] flex-[1_0_0] min-h-px min-w-px relative" data-name="icon-5 3" data-node-id="67:2562">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconTop2} />
            </div>
            <div className="aspect-[62/62] flex-[1_0_0] min-h-px min-w-px relative" data-name="icon-5 5" data-node-id="67:2563">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconTop3} />
            </div>
            <div className="aspect-[62/62] flex-[1_0_0] min-h-px min-w-px relative" data-name="icon-5 1" data-node-id="67:2564">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconTop4} />
            </div>
          </div>

          <div className="h-[198px] relative shrink-0 w-full" data-node-id="67:2565">
            <div className="absolute inset-0 rounded-[14px]" data-name="Preview-1 4" data-node-id="67:2566">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgCtaMobileCenter} />
            </div>
            <div className="absolute h-[46.785px] left-[58.7px] top-[78px] w-[213.121px]" data-name="Union" data-node-id="67:2567">
              <img alt="" className="absolute inset-0 max-w-none size-full" src={imgCtaMobileUnion} />
            </div>
          </div>

          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="67:2568">
            <div className="h-[96px] relative rounded-[14px] shrink-0 w-[calc(50%-4px)]" data-name="Preview-1 2" data-node-id="67:2569">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgCtaMobileLeft} />
            </div>
            <div className="h-[96px] relative rounded-[14px] shrink-0 w-[calc(50%-4px)]" data-name="Preview-1 3" data-node-id="67:2570">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgCtaMobileRight} />
            </div>
          </div>

          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Icons Row" data-node-id="67:2571">
            <div className="aspect-[62/62] flex-[1_0_0] min-h-px min-w-px relative" data-name="icon-5 4" data-node-id="67:2572">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconBottom1} />
            </div>
            <div className="aspect-[62/62] flex-[1_0_0] min-h-px min-w-px relative" data-name="icon-5 3" data-node-id="67:2573">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconBottom2} />
            </div>
            <div className="aspect-[62/62] flex-[1_0_0] min-h-px min-w-px relative" data-name="icon-5 5" data-node-id="67:2574">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconBottom3} />
            </div>
            <div className="aspect-[62/62] flex-[1_0_0] min-h-px min-w-px relative" data-name="icon-5 1" data-node-id="67:2575">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaMobileIconBottom4} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
