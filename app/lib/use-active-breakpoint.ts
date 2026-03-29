import { useEffect, useState } from "react";

export type ActiveBreakpoint = "mobile" | "tablet" | "desktop";

const MD_WIDTH = 768;
const LG_WIDTH = 1024;

function getActiveBreakpoint(): ActiveBreakpoint {
  if (typeof window === "undefined") {
    return "desktop";
  }

  if (window.innerWidth < MD_WIDTH) {
    return "mobile";
  }

  if (window.innerWidth < LG_WIDTH) {
    return "tablet";
  }

  return "desktop";
}

export function useActiveBreakpoint() {
  const [activeBreakpoint, setActiveBreakpoint] = useState<ActiveBreakpoint>(
    getActiveBreakpoint,
  );

  useEffect(() => {
    const updateActiveBreakpoint = () => {
      setActiveBreakpoint((current) => {
        const next = getActiveBreakpoint();
        return current === next ? current : next;
      });
    };

    updateActiveBreakpoint();
    window.addEventListener("resize", updateActiveBreakpoint, { passive: true });

    return () => {
      window.removeEventListener("resize", updateActiveBreakpoint);
    };
  }, []);

  return activeBreakpoint;
}
