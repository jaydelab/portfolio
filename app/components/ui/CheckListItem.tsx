const imgCheckmark = "/visual-ir-assets/checkmark.svg";
const imgCheckmarkSmall = "/visual-ir-assets/checkmark-small.svg";

interface CheckListItemProps {
  label: string;
  /** Use the small variant (15px icon, 9.375px check) */
  small?: boolean;
}

export default function CheckListItem({ label, small }: CheckListItemProps) {
  const iconSize = small ? "size-[15px]" : "size-[16px]";
  const checkSize = small ? "size-[9.375px]" : "size-[10px]";
  const checkOffset = small ? "ml-[2.81px] mt-[2.81px]" : "ml-[3px] mt-[3px]";
  const vectorInset = small ? "inset-[-16%_-12%]" : "inset-[-15%_-11.25%]";
  const checkSrc = small ? imgCheckmarkSmall : imgCheckmark;

  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="List item icon with bullet point">
        <div className={`bg-[rgba(57,55,55,0.7)] col-1 ml-0 mt-0 rounded-[5px] row-1 ${iconSize}`} data-name="List item icon background" />
        <div className={`col-1 ${checkOffset} overflow-clip relative row-1 ${checkSize}`} data-name="check">
          <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
            <div className={`absolute ${vectorInset}`}>
              <img alt="" className="block max-w-none size-full" src={checkSrc} />
            </div>
          </div>
        </div>
      </div>
      <div className="figma-font-geist flex flex-col font-normal justify-center opacity-60 relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[normal]">{label}</p>
      </div>
    </div>
  );
}
