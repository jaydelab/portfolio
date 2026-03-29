interface BadgeHeaderProps {
  id?: string;
  className?: string;
}

export default function BadgeHeader({ id, className = "" }: BadgeHeaderProps = {}) {
  return (
    <div
      id={id}
      className={`pointer-events-none sticky top-[24px] z-50 bg-[#4f4f4f] content-stretch flex h-[34px] items-center justify-center self-center px-[20px] rounded-[18px] shrink-0 overflow-visible border border-[rgba(255,255,255,0.08)] shadow-[0_6px_18px_rgba(0,0,0,0.12)] ${className}`.trim()}
      data-name="Badge"
      data-node-id="1:1338"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(92,92,92,0.94) 0%, rgba(72,72,72,0.9) 100%)",
      }}
    >
      <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
        <div className="bg-[#80f571] rounded-[50px] shrink-0 size-[8px]" data-name="Dot" />
        <div className="figma-font-geist flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-white whitespace-nowrap">
          <p className="leading-[normal]">Open to Work</p>
        </div>
      </div>
    </div>
  );
}
