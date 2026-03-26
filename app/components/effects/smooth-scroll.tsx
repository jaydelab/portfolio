"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.4,
        smoothWheel: true,
        touchMultiplier: 1.4,
        wheelMultiplier: 0.8,
      }}
    >
      {children}
    </ReactLenis>
  );
}
