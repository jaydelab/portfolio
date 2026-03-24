interface BadgeHeaderProps {
  id?: string;
  className?: string;
}

export default function BadgeHeader({ id, className = "" }: BadgeHeaderProps = {}) {
  return (
    <div id={id} className={`backdrop-blur-[25px] bg-[rgba(0,0,0,0.55)] content-stretch flex flex-col h-[34px] items-center justify-center px-[20px] rounded-[18px] shrink-0 sticky top-[24px] z-50 ${className}`.trim()} data-name="Badge" data-node-id="1:1338">
      <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Content" data-node-id="1:1339">
        <div className="bg-[#80f571] rounded-[50px] shrink-0 size-[8px]" data-name="Dot" data-node-id="1:1340" />
        <div className="figma-font-geist flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-white whitespace-nowrap" data-node-id="1:1341">
          <p className="leading-[normal]"><span className="max-md:hidden">Disponível para projetos</span><span className="hidden max-md:inline">Disponível ▾</span></p>
        </div>
      </div>
    </div>
  );
}
