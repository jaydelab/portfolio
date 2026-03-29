import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { memo, useEffect, useRef, useState, type ReactNode } from "react";

type DockMagnifyItem = {
  id: string;
  icon: ReactNode;
  title: string;
};

type DockMagnifyProps = {
  items: DockMagnifyItem[];
  className?: string;
  itemClassName?: string;
  restSize?: number;
  expandedSize?: number;
  gap?: number;
  distance?: number;
};

const DOCK_SIZE_SPRING = {
  damping: 22,
  mass: 0.04,
  stiffness: 420,
} as const;

const DockTooltip = memo(function DockTooltip({ title }: { title: string }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-[38px]">
      <div className="flex h-[28px] items-center justify-center rounded-[18px] border border-[rgba(255,255,255,0.1)] bg-[rgba(61,61,61,0.82)] px-[10px]">
        <div className="figma-font-geist font-medium text-[11px] leading-none whitespace-nowrap text-white">
          {title}
        </div>
      </div>
    </div>
  );
});

function StaticDock({
  items,
  className = "",
  itemClassName = "",
  restSize,
  gap,
}: Required<Pick<DockMagnifyProps, "items" | "className" | "itemClassName" | "restSize" | "gap">>) {
  return (
    <div
      className={`relative z-[1] flex h-full items-end justify-center overflow-visible ${className}`.trim()}
      style={{ gap: `${gap}px` }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={`relative flex aspect-square items-center justify-center ${itemClassName}`.trim()}
          style={{ height: `${restSize}px`, width: `${restSize}px` }}
          title={item.title}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

export function DockMagnify({
  items,
  className = "",
  itemClassName = "",
  restSize = 50,
  expandedSize = 82,
  gap = 12,
  distance = 150,
}: DockMagnifyProps) {
  const shouldReduceMotion = useReducedMotion();
  const dockRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
  const dockLeft = useMotionValue(0);
  const sizeRefs = useRef<MotionValue<number>[]>([]);

  useEffect(() => {
    const updateDockLeft = () => {
      if (!dockRef.current) return;
      dockLeft.set(dockRef.current.getBoundingClientRect().left);
    };

    updateDockLeft();

    const resizeObserver = new ResizeObserver(() => updateDockLeft());
    if (dockRef.current) {
      resizeObserver.observe(dockRef.current);
    }

    window.addEventListener("resize", updateDockLeft);
    window.addEventListener("scroll", updateDockLeft, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDockLeft);
      window.removeEventListener("scroll", updateDockLeft);
    };
  }, [dockLeft]);

  if (shouldReduceMotion) {
    return (
      <StaticDock
        items={items}
        className={className}
        itemClassName={itemClassName}
        restSize={restSize}
        gap={gap}
      />
    );
  }

  return (
    <div
      ref={dockRef}
      className={`relative z-[1] flex h-full items-end justify-center overflow-visible ${className}`.trim()}
      onPointerLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      onPointerMove={(event) => mouseX.set(event.clientX)}
      style={{ gap: `${gap}px` }}
    >
      {items.map((item, index) => (
        <DockMagnifyItemView
          key={item.id}
          dockLeft={dockLeft}
          distance={distance}
          expandedSize={expandedSize}
          gap={gap}
          icon={item.icon}
          index={index}
          itemClassName={itemClassName}
          mouseX={mouseX}
          restSize={restSize}
          sizeRefs={sizeRefs}
          title={item.title}
        />
      ))}
    </div>
  );
}

const DockMagnifyItemView = memo(function DockMagnifyItemView({
  dockLeft,
  distance,
  expandedSize,
  gap,
  icon,
  index,
  itemClassName,
  mouseX,
  restSize,
  sizeRefs,
  title,
}: {
  dockLeft: MotionValue<number>;
  distance: number;
  expandedSize: number;
  gap: number;
  icon: ReactNode;
  index: number;
  itemClassName: string;
  mouseX: MotionValue<number>;
  restSize: number;
  sizeRefs: React.MutableRefObject<MotionValue<number>[]>;
  title: string;
}) {
  const pointerDistance = useTransform(() => {
    const sizes = sizeRefs.current;
    let center = 0;

    for (let itemIndex = 0; itemIndex < index; itemIndex += 1) {
      center += (sizes[itemIndex]?.get() ?? restSize) + gap;
    }

    center += (sizes[index]?.get() ?? restSize) / 2;

    return mouseX.get() - dockLeft.get() - center;
  });

  const targetSize = useTransform(
    pointerDistance,
    [-distance, 0, distance],
    [restSize, expandedSize, restSize],
  );

  const size = useSpring(targetSize, DOCK_SIZE_SPRING);
  sizeRefs.current[index] = size;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`relative flex aspect-square items-center justify-center ${itemClassName}`.trim()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: size,
        width: size,
        willChange: "width, height",
      }}
      title={title}
    >
      <AnimatePresence>
        {hovered ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0"
            exit={{ opacity: 0, y: 2 }}
            initial={{ opacity: 0, y: 6 }}
          >
            <DockTooltip title={title} />
          </motion.div>
        ) : null}
      </AnimatePresence>
      {icon}
    </motion.div>
  );
});
