import { assetUrl } from "../../lib/asset-url";

const imgVectorContainer = assetUrl("/visual-ir-assets/vector-container.svg");

export function HeroIllustrationReference() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative z-10 shrink-0">
      <div className="col-1 h-[383px] ml-0 mt-0 relative row-1 w-[792px]" data-name="Illustration">
        <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] border border-solid border-white content-stretch flex flex-col gap-[20px] items-start left-[calc(50%+0.5px)] pb-[20px] pt-[16px] rounded-[20px] top-0 w-[793px]">
          <div className="border-[rgba(255,255,255,0.06)] border-b border-solid content-stretch flex gap-[6px] h-[20px] items-start px-[16px] relative shrink-0 w-full">
            <div className="bg-[#a3a3a3] opacity-50 rounded-[100px] shrink-0 size-[10px]" />
            <div className="bg-[#6a6a6a] rounded-[16777200px] shrink-0 size-[10px]" />
            <div className="bg-[#a3a3a3] opacity-50 rounded-[16777200px] shrink-0 size-[10px]" />
          </div>
          <div className="content-stretch flex flex-col items-start px-[20px] pb-[0px] relative shrink-0 w-full">
            <pre className="figma-font-geist-mono text-[14px] leading-[22px] text-[rgba(255,255,255,0.5)] m-0 whitespace-pre-wrap">
{`import { Designer } from '@victor/core';
import { Figma, AI, Vibe, Research } from './MyWorkflow';

const victor = new Designer({ origin: 'pencil-on-paper' });
const builder = victor.evolveToBuilder();

const ecosystem = builder.build([
  new ProductThinking(),
  new DesignSystems(),
  new AIOrchestration(),
  new ShipItAnyway(),
]);

const agent = new Jade({ creator: builder, context: ecosystem });
await agent.run();`}
            </pre>
          </div>
        </div>
      </div>
      <div className="col-1 h-[20px] ml-[753px] mt-[362px] relative row-1 w-[16px]" data-name="Vector Container">
        <div className="absolute inset-[-15%_-21.48%_-25%_-25%]">
          <img alt="" className="block max-w-none size-full" src={imgVectorContainer} />
        </div>
      </div>
    </div>
  );
}
