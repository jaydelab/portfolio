import { useEffect, useRef, useState } from "react";

interface BadgeHeaderProps {
  id?: string;
  className?: string;
}

export default function BadgeHeader({ id, className = "" }: BadgeHeaderProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      id={id}
      ref={menuRef}
      className={`bg-[#4f4f4f] content-stretch flex flex-col h-[34px] max-md:h-auto items-center justify-center px-[20px] max-md:px-[14px] rounded-[18px] shrink-0 sticky top-[24px] z-50 overflow-visible border border-[rgba(255,255,255,0.08)] shadow-[0_6px_18px_rgba(0,0,0,0.12)] ${className}`.trim()}
      data-name="Badge"
      data-node-id="1:1338"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(92,92,92,0.94) 0%, rgba(72,72,72,0.9) 100%)",
      }}
    >
      <div className="content-stretch flex gap-[7px] items-center relative shrink-0 max-lg:hidden" data-name="Content" data-node-id="1:1339">
        <div className="bg-[#80f571] rounded-[50px] shrink-0 size-[8px]" data-name="Dot" data-node-id="1:1340" />
        <div className="figma-font-geist flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-white whitespace-nowrap" data-node-id="1:1341">
          <p className="leading-[normal]">Disponível para projetos</p>
        </div>
      </div>
      <button
        type="button"
        className="hidden max-md:flex min-h-[44px] items-center gap-[7px] py-[7px] text-left"
        aria-expanded={isOpen}
        aria-controls="mobile-badge-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        <div className="bg-[#80f571] rounded-[50px] shrink-0 size-[8px]" />
        <div className="figma-font-geist flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-white">
          <p className="leading-[normal]">Disponível ▾</p>
        </div>
      </button>
      <div
        id="mobile-badge-menu"
        className={`${isOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[calc(100%+8px)] max-md:flex-col gap-[6px] rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.82)] p-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.28)] md:hidden`}
      >
        <a
          href="#cases"
          className="figma-font-geist min-h-[44px] rounded-[12px] px-[12px] py-[11px] text-[13px] font-medium text-white/90 transition-colors hover:bg-white/8 focus-visible:bg-white/8 focus-visible:outline-none"
          onClick={() => setIsOpen(false)}
        >
          Cases
        </a>
        <a
          href="#sobre"
          className="figma-font-geist min-h-[44px] rounded-[12px] px-[12px] py-[11px] text-[13px] font-medium text-white/90 transition-colors hover:bg-white/8 focus-visible:bg-white/8 focus-visible:outline-none"
          onClick={() => setIsOpen(false)}
        >
          Sobre
        </a>
        <a
          href="#contato"
          className="figma-font-geist min-h-[44px] rounded-[12px] px-[12px] py-[11px] text-[13px] font-medium text-white/90 transition-colors hover:bg-white/8 focus-visible:bg-white/8 focus-visible:outline-none"
          onClick={() => setIsOpen(false)}
        >
          Contato
        </a>
      </div>
    </div>
  );
}
