import { assetUrl } from "../../lib/asset-url";
import { useActiveBreakpoint } from "../../lib/use-active-breakpoint";
import { WHATSAPP_HREF } from "../../lib/whatsapp-link";

const DESKTOP_ARROW = assetUrl("/visual-ir-assets/icon-svg.svg");
const MOBILE_ARROW = assetUrl("/visual-ir-assets/cta-mobile-arrow.svg");
const SCHEDULE_CALL_ICON = assetUrl("/visual-ir-assets/cta-schedule-call-icon.svg");
const SCHEDULE_CALL_HREF = "https://cal.com/victor-barbosa/";

type SectionActionButtonsProps = {
  align?: "center" | "start";
  className?: string;
};

function ContactButton({ mode }: { mode: "desktop" | "tablet" | "mobile" }) {
  if (mode === "desktop") {
    return (
      <a
        className="group relative inline-flex h-[44px] w-[119.59px] shrink-0 overflow-clip rounded-[50px] bg-[rgba(12,12,12,0.82)] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.17),0px_23px_14px_0px_rgba(0,0,0,0.1),0px_41px_17px_0px_rgba(0,0,0,0.03)] transition-[opacity,transform,box-shadow] duration-150 hover:opacity-70 active:translate-y-px active:opacity-[0.88] active:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.18),0px_4px_8px_0px_rgba(0,0,0,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2d81ff]"
        aria-label="Abrir conversa no WhatsApp"
        href={WHATSAPP_HREF}
        rel="noreferrer"
        target="_blank"
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

  if (mode === "tablet") {
    return (
      <a
        className="group relative inline-flex h-[42px] w-[127px] shrink-0 overflow-clip rounded-[50px] bg-[#363636] p-px shadow-[0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.17),0px_23px_14px_0px_rgba(0,0,0,0.1),0px_41px_17px_0px_rgba(0,0,0,0.03)] transition-[opacity,transform,box-shadow] duration-150 hover:opacity-70 active:translate-y-px active:opacity-[0.88] active:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.18),0px_4px_8px_0px_rgba(0,0,0,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2d81ff]"
        aria-label="Abrir conversa no WhatsApp"
        href={WHATSAPP_HREF}
        rel="noreferrer"
        target="_blank"
      >
        <div className="flex min-h-px w-full min-w-px flex-[1_0_0] items-center justify-center gap-[12px] rounded-[50px] border border-[#4b4b4b] border-solid px-[14px]">
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

  return (
    <a
      className="group relative inline-flex h-[42px] shrink-0 overflow-clip rounded-[50px] bg-[#363636] p-px shadow-[0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.17),0px_23px_14px_0px_rgba(0,0,0,0.1),0px_41px_17px_0px_rgba(0,0,0,0.03)] transition-[opacity,transform,box-shadow] duration-150 hover:opacity-70 active:translate-y-px active:opacity-[0.88] active:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.18),0px_4px_8px_0px_rgba(0,0,0,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2d81ff]"
      aria-label="Abrir conversa no WhatsApp"
      href={WHATSAPP_HREF}
      rel="noreferrer"
      target="_blank"
    >
      <div className="flex min-h-px w-full min-w-px flex-[1_0_0] items-center justify-center gap-[8px] rounded-[50px] border border-[#4b4b4b] border-solid px-[14px]">
        <div className="figma-font-geist flex min-w-0 shrink flex-col justify-center text-[13px] font-medium leading-[0] text-[#f7f7f7]">
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

function ScheduleCallButton({
  mode,
}: {
  mode: "desktop" | "tablet" | "mobile";
}) {
  if (mode === "desktop") {
    return (
      <a
        className="group relative inline-flex h-[44px] shrink-0 items-center justify-center gap-[8px] rounded-[32px] border border-[#ededed] bg-gradient-to-b from-white to-[#fafafa] px-[20px] shadow-[0px_1px_2px_0px_rgba(128,128,128,0.1)] transition-[transform,box-shadow,border-color,background] duration-150 hover:border-[#dfdfdf] hover:from-white hover:to-[#f5f5f5] hover:shadow-[0px_2px_4px_0px_rgba(128,128,128,0.14)] active:translate-y-px active:border-[#d4d4d4] active:shadow-[0px_1px_2px_0px_rgba(128,128,128,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2d81ff]"
        aria-label="Agendar reunião no Cal.com"
        href={SCHEDULE_CALL_HREF}
        rel="noreferrer"
        target="_blank"
      >
        <div className="flex size-[24px] shrink-0 items-center justify-center opacity-40 transition-opacity duration-150 group-hover:opacity-55 group-active:opacity-70">
          <img alt="" className="size-[18px]" src={SCHEDULE_CALL_ICON} />
        </div>
        <div className="figma-font-geist flex flex-col justify-center text-[14px] font-medium leading-[0] text-[#393737] whitespace-nowrap">
          <p className="leading-[20px]">Agendar reunião</p>
        </div>
      </a>
    );
  }

  if (mode === "tablet") {
    return (
      <a
        className="group relative inline-flex h-[42px] shrink-0 items-center justify-center gap-[8px] rounded-[32px] border border-[#ededed] bg-gradient-to-b from-white to-[#fafafa] px-[14px] shadow-[0px_1px_2px_0px_rgba(128,128,128,0.1)] transition-[transform,box-shadow,border-color,background] duration-150 hover:border-[#dfdfdf] hover:from-white hover:to-[#f5f5f5] hover:shadow-[0px_2px_4px_0px_rgba(128,128,128,0.14)] active:translate-y-px active:border-[#d4d4d4] active:shadow-[0px_1px_2px_0px_rgba(128,128,128,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2d81ff]"
        aria-label="Agendar reunião no Cal.com"
        href={SCHEDULE_CALL_HREF}
        rel="noreferrer"
        target="_blank"
      >
        <div className="flex size-[24px] shrink-0 items-center justify-center opacity-40 transition-opacity duration-150 group-hover:opacity-55 group-active:opacity-70">
          <img alt="" className="size-[18px]" src={SCHEDULE_CALL_ICON} />
        </div>
        <div className="figma-font-geist flex flex-col justify-center text-[14px] font-medium leading-[0] text-[#393737] whitespace-nowrap">
          <p className="leading-[20px]">Agendar reunião</p>
        </div>
      </a>
    );
  }

  return (
    <a
      className="group relative inline-flex h-[42px] shrink-0 items-center justify-center gap-[6px] rounded-[32px] border border-[#ededed] bg-gradient-to-b from-white to-[#fafafa] px-[14px] shadow-[0px_1px_2px_0px_rgba(128,128,128,0.1)] transition-[transform,box-shadow,border-color,background] duration-150 hover:border-[#dfdfdf] hover:from-white hover:to-[#f5f5f5] hover:shadow-[0px_2px_4px_0px_rgba(128,128,128,0.14)] active:translate-y-px active:border-[#d4d4d4] active:shadow-[0px_1px_2px_0px_rgba(128,128,128,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2d81ff]"
      aria-label="Agendar reunião no Cal.com"
      href={SCHEDULE_CALL_HREF}
      rel="noreferrer"
      target="_blank"
    >
      <div className="flex size-[20px] shrink-0 items-center justify-center opacity-40 transition-opacity duration-150 group-hover:opacity-55 group-active:opacity-70">
        <img alt="" className="size-[16px]" src={SCHEDULE_CALL_ICON} />
      </div>
      <div className="figma-font-geist min-w-0 flex shrink flex-col justify-center text-[12px] font-medium leading-[0] text-[#393737] whitespace-nowrap">
        <p className="leading-[16px]">Agendar reunião</p>
      </div>
    </a>
  );
}

export default function SectionActionButtons({
  align = "center",
  className = "",
}: SectionActionButtonsProps) {
  const activeBreakpoint = useActiveBreakpoint();
  const mode =
    activeBreakpoint === "desktop"
      ? "desktop"
      : activeBreakpoint === "tablet"
        ? "tablet"
        : "mobile";
  const wrapperClassName =
    mode === "mobile"
      ? `flex w-full max-w-[272px] gap-[16px] ${align === "center" ? "self-center justify-center" : "justify-start"}`
      : `inline-flex items-start gap-[16px] ${align === "center" ? "justify-center" : "justify-start"}`;

  return (
    <div className={`${wrapperClassName} ${className}`.trim()}>
      <ContactButton mode={mode} />
      <ScheduleCallButton mode={mode} />
    </div>
  );
}
