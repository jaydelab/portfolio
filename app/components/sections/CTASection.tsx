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

interface CTASectionProps {
  id?: string;
  className?: string;
}

export default function CTASection({ id, className = "" }: CTASectionProps = {}) {
  return (
    <div id={id} className={`content-stretch flex flex-col gap-[42px] items-center relative shrink-0 w-[1200px] max-lg:w-full ${className}`.trim()} data-name="Container" data-node-id="1:1062">
            <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[997px] max-md:w-full" data-name="Header" data-node-id="1:1063">
              <div className="figma-font-georgia flex flex-col justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#393737] text-[56px] max-lg:text-[clamp(30px,5.5vw,56px)] text-center tracking-[-1.68px] w-[min-content]" data-node-id="1:1064">
                <p className="leading-[68px] max-lg:leading-[clamp(38px,6.8vw,68px)]">Seu projeto é exigente ou pontual?</p>
              </div>
              <div className="figma-font-geist flex flex-col font-normal justify-center leading-[0] opacity-60 relative shrink-0 text-[20px] text-black text-center w-[791px] max-md:w-full" data-node-id="1:1065">
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
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full max-md:flex-col" data-name="Content" data-node-id="1:1073">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[384px] max-md:w-full" data-name="Image Container" data-node-id="1:1074">
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
              <div className="overflow-clip relative shrink-0 size-[384px] max-md:w-full max-md:h-[300px]" data-name="Main Image Container" data-node-id="1:1081">
                <div className="-translate-x-1/2 absolute left-1/2 size-[384px] top-0" data-name="Preview-1 4" data-node-id="1:1082">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPreview14} />
                </div>
                <div className="figma-font-geist -translate-y-1/2 absolute bg-[rgba(45,129,255,0.97)] bg-clip-text flex flex-col font-medium justify-center leading-[0] left-[82px] text-[90px] text-[transparent] top-[195px] tracking-[-4.3px] whitespace-nowrap" data-node-id="1:1084" style={{ fontFeatureSettings: "'ss01'" }}>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[384px] max-md:w-full" data-name="Image Container" data-node-id="1:1085">
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
  );
}
