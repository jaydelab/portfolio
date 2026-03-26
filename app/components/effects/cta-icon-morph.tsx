"use client";

import {
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { assetUrl } from "../../lib/asset-url";

type AnimationPhase = "scatter" | "line" | "orbit";

type SceneTarget = {
  opacity: number;
  rotate: number;
  scale: number;
  x: number;
  y: number;
};

type SceneSize = {
  height: number;
  width: number;
};

type CTAIconMorphProps = {
  activeContent?: ReactNode;
  activeContentClassName?: string;
  arcApex?: number;
  arcCenterX?: number;
  arcRadiusScale?: number;
  arcSpread?: number;
  cardSize?: number;
  className?: string;
  circleAngleOffset?: number;
  circleOffsetX?: number;
  circleOffsetY?: number;
  circleRadiusMax?: number;
  circleRadiusScale?: number;
  circleContent?: ReactNode;
  circleContentClassName?: string;
  content?: ReactNode;
  contentClassName?: string;
  enableFlip?: boolean;
  exitDistance?: number;
  iconSize?: number;
  introContent?: ReactNode;
  introClassName?: string;
  lineGap?: number;
  maxScroll?: number;
  morphDistance?: number;
  parallaxDistance?: number;
  sceneClassName?: string;
  sceneStyle?: CSSProperties;
  sources?: readonly string[];
  stickyClassName?: string;
  touchMultiplier?: number;
};

type OrbitIconProps = {
  cardSize: number;
  exitDistance: number;
  exitProgress: MotionValue<number>;
  iconSize: number;
  index: number;
  lineGap: number;
  morphProgress: MotionValue<number>;
  parallaxX: MotionValue<number>;
  phase: AnimationPhase;
  rotationProgress: MotionValue<number>;
  scatterTarget: SceneTarget;
  sceneSize: SceneSize;
  settings: Required<
    Pick<
      CTAIconMorphProps,
      | "arcApex"
      | "arcCenterX"
      | "arcRadiusScale"
      | "arcSpread"
      | "circleAngleOffset"
      | "circleOffsetX"
      | "circleOffsetY"
      | "circleRadiusMax"
      | "circleRadiusScale"
    >
  >;
  src: string;
  total: number;
};

const ICON_SOURCES = [
  "/visual-ir-assets/dock/Icon.svg",
  "/visual-ir-assets/dock/Icon-1.svg",
  "/visual-ir-assets/dock/Icon-2.svg",
  "/visual-ir-assets/dock/Icon-3.svg",
  "/visual-ir-assets/dock/Icon-4.svg",
  "/visual-ir-assets/dock/Icon-5.svg",
  "/visual-ir-assets/dock/Icon-6.svg",
  "/visual-ir-assets/dock/Icon-7.svg",
  "/visual-ir-assets/dock/Icon Container.svg",
  "/visual-ir-assets/dock/Icon-8.svg",
  "/visual-ir-assets/dock/Icon-9.svg",
  "/visual-ir-assets/dock/Icon-10.svg",
  "/visual-ir-assets/dock/Icon-11.svg",
  "/visual-ir-assets/dock/Icon-12.svg",
  "/visual-ir-assets/dock/Icon-13.svg",
  "/visual-ir-assets/cta-orbit/cta-orbit-extra-figma.webp",
  "/visual-ir-assets/cta-orbit/cta-orbit-extra-framer-liquid-glass.webp",
  "/visual-ir-assets/cta-orbit/cta-orbit-extra-adobe-photoshop.webp",
  "/visual-ir-assets/cta-orbit/cta-orbit-extra-sketch-liquid-glass.webp",
  "/visual-ir-assets/cta-orbit/cta-orbit-extra-custom-liquid-glass.webp",
].map(assetUrl);

const CARD_SPRING = { damping: 16, stiffness: 44 };
const MOUSE_SPRING = { damping: 22, stiffness: 36 };
const MORPH_SCROLL_DISTANCE = 600;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function mix(start: number, end: number, amount: number) {
  return start * (1 - amount) + end * amount;
}

function getNoise(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function getScatterTarget(index: number): SceneTarget {
  return {
    opacity: 0,
    rotate: (getNoise(index + 1) - 0.5) * 160,
    scale: 0.56,
    x: (getNoise(index + 11) - 0.5) * 1480,
    y: (getNoise(index + 41) - 0.5) * 960,
  };
}

function getLineTarget(
  index: number,
  total: number,
  cardSize: number,
  lineGap: number,
): SceneTarget {
  const spacing = cardSize + lineGap;
  const width = (total - 1) * spacing;

  return {
    opacity: 1,
    rotate: 0,
    scale: 1,
    x: index * spacing - width / 2,
    y: 0,
  };
}

function getCircleTarget(
  index: number,
  total: number,
  sceneSize: SceneSize,
  circleAngleOffset: number,
  circleOffsetX: number,
  circleOffsetY: number,
  circleRadiusScale: number,
  circleRadiusMax: number,
): SceneTarget {
  const radius = Math.min(
    Math.min(sceneSize.width, sceneSize.height) * circleRadiusScale,
    circleRadiusMax,
  );
  const angle = circleAngleOffset + (index / total) * 360;
  const radian = (angle * Math.PI) / 180;

  return {
    opacity: 1,
    rotate: angle + 90,
    scale: 1,
    x: Math.cos(radian) * radius + circleOffsetX,
    y: Math.sin(radian) * radius + circleOffsetY,
  };
}

function getArcTarget(
  index: number,
  total: number,
  sceneSize: SceneSize,
  rotationProgress: number,
  parallaxX: number,
  settings: Required<
    Pick<
      CTAIconMorphProps,
      | "arcApex"
      | "arcCenterX"
      | "arcRadiusScale"
      | "arcSpread"
      | "circleAngleOffset"
      | "circleOffsetX"
      | "circleOffsetY"
      | "circleRadiusMax"
      | "circleRadiusScale"
    >
  >,
): SceneTarget {
  const radius =
    Math.min(sceneSize.width * 0.9, sceneSize.height * 1.5) *
    settings.arcRadiusScale;
  const spread = settings.arcSpread;
  const startAngle = -90 - spread / 2;
  const step = spread / Math.max(total - 1, 1);
  const boundedRotation = -rotationProgress * spread * 0.18;
  const angle = startAngle + index * step + boundedRotation;
  const radian = (angle * Math.PI) / 180;
  const centerY = sceneSize.height * settings.arcApex + radius;
  const finalScale = sceneSize.width < 768 ? 1.1 : 1.06;

  return {
    opacity: 1,
    rotate: angle + 90,
    scale: finalScale,
    x: Math.cos(radian) * radius + parallaxX + settings.arcCenterX,
    y: Math.sin(radian) * radius + centerY,
  };
}

function getCardTarget({
  cardSize,
  exitDistance,
  exitProgress,
  index,
  lineGap,
  morphProgress,
  parallaxX,
  phase,
  rotationProgress,
  scatterTarget,
  sceneSize,
  settings,
  total,
}: {
  cardSize: number;
  exitDistance: number;
  exitProgress: number;
  index: number;
  lineGap: number;
  morphProgress: number;
  parallaxX: number;
  phase: AnimationPhase;
  rotationProgress: number;
  scatterTarget: SceneTarget;
  sceneSize: SceneSize;
  settings: Required<
    Pick<
      CTAIconMorphProps,
      | "arcApex"
      | "arcCenterX"
      | "arcRadiusScale"
      | "arcSpread"
      | "circleAngleOffset"
      | "circleOffsetX"
      | "circleOffsetY"
      | "circleRadiusMax"
      | "circleRadiusScale"
    >
  >;
  total: number;
}): SceneTarget {
  if (phase === "scatter") {
    return scatterTarget;
  }

  if (phase === "line") {
    return getLineTarget(index, total, cardSize, lineGap);
  }

  const circleTarget = getCircleTarget(
    index,
    total,
    sceneSize,
    settings.circleAngleOffset,
    settings.circleOffsetX,
    settings.circleOffsetY,
    settings.circleRadiusScale,
    settings.circleRadiusMax,
  );
  const arcTarget = getArcTarget(
    index,
    total,
    sceneSize,
    rotationProgress,
    parallaxX,
    settings,
  );

  const baseTarget = {
    opacity: 1,
    rotate: mix(circleTarget.rotate, arcTarget.rotate, morphProgress),
    scale: mix(circleTarget.scale, arcTarget.scale, morphProgress),
    x: mix(circleTarget.x, arcTarget.x, morphProgress),
    y: mix(circleTarget.y, arcTarget.y, morphProgress),
  };

  return {
    opacity: mix(baseTarget.opacity, 0, exitProgress),
    rotate: mix(baseTarget.rotate, baseTarget.rotate + 6, exitProgress),
    scale: mix(baseTarget.scale, baseTarget.scale * 0.92, exitProgress),
    x: baseTarget.x,
    y: baseTarget.y + exitDistance * exitProgress,
  };
}

const OrbitIcon = memo(function OrbitIcon({
  cardSize,
  exitDistance,
  exitProgress,
  iconSize,
  index,
  lineGap,
  morphProgress,
  parallaxX,
  phase,
  rotationProgress,
  scatterTarget,
  sceneSize,
  settings,
  src,
  total,
}: OrbitIconProps) {
  const target = useTransform(() =>
    getCardTarget({
      cardSize,
      exitDistance,
      exitProgress: exitProgress.get(),
      index,
      lineGap,
      morphProgress: morphProgress.get(),
      parallaxX: parallaxX.get(),
      phase,
      rotationProgress: rotationProgress.get(),
      scatterTarget,
      sceneSize,
      settings,
      total,
    }),
  );

  const x = useSpring(useTransform(target, (value) => value.x), CARD_SPRING);
  const y = useSpring(useTransform(target, (value) => value.y), CARD_SPRING);
  const rotate = useSpring(
    useTransform(target, (value) => value.rotate),
    CARD_SPRING,
  );
  const scale = useSpring(
    useTransform(target, (value) => value.scale),
    CARD_SPRING,
  );
  const opacity = useSpring(
    useTransform(target, (value) => value.opacity),
    CARD_SPRING,
  );

  return (
    <motion.div
      aria-hidden="true"
      data-cta-icon=""
      className="absolute left-1/2 top-1/2 flex items-center justify-center"
      style={{
        height: cardSize,
        marginLeft: -cardSize / 2,
        marginTop: -cardSize / 2,
        opacity,
        rotate,
        scale,
        width: cardSize,
        willChange: "transform, opacity",
        x,
        y,
      }}
    >
      <motion.div
        className="relative flex h-full w-full items-center justify-center"
        transition={{ damping: 28, stiffness: 240, type: "spring" }}
        whileHover={{ scale: 1.06 }}
      >
        <img
          alt=""
          className="object-contain drop-shadow-[0px_16px_24px_rgba(0,0,0,0.18)]"
          decoding="async"
          loading="lazy"
          src={src}
          style={{ height: iconSize, width: iconSize }}
        />
      </motion.div>
    </motion.div>
  );
});

export default function CTAIconMorph({
  activeContent,
  activeContentClassName = "",
  arcApex = 0.48,
  arcCenterX = 0,
  arcRadiusScale = 0.82,
  arcSpread = 108,
  cardSize = 72,
  className = "",
  circleAngleOffset = -90,
  circleOffsetX = 0,
  circleOffsetY = 0,
  circleContent,
  circleContentClassName = "",
  circleRadiusMax = 220,
  circleRadiusScale = 0.32,
  content,
  contentClassName = "",
  exitDistance,
  iconSize = 50,
  introContent,
  introClassName = "",
  lineGap = 4,
  maxScroll = 2400,
  morphDistance,
  parallaxDistance = 34,
  sceneClassName = "",
  sceneStyle,
  sources,
  stickyClassName = "",
  touchMultiplier = 1,
}: CTAIconMorphProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(stickyRef, { amount: 0.42, once: true });

  const [phase, setPhase] = useState<AnimationPhase>(
    shouldReduceMotion ? "orbit" : "scatter",
  );
  const [sceneSize, setSceneSize] = useState<SceneSize>({ height: 0, width: 0 });

  const virtualScroll = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const iconSources = sources?.length ? sources : ICON_SOURCES;
  const resolvedActiveContent = activeContent ?? content;
  const resolvedActiveContentClassName =
    activeContentClassName || contentClassName;
  const resolvedMorphDistance = Math.min(
    morphDistance ?? MORPH_SCROLL_DISTANCE,
    maxScroll,
  );
  const exitStart = maxScroll * 0.72;

  const morphProgress = useSpring(
    useTransform(virtualScroll, [0, resolvedMorphDistance], [0, 1]),
    CARD_SPRING,
  );
  const rotationProgress = useSpring(
    useTransform(
      virtualScroll,
      [resolvedMorphDistance, exitStart],
      [0, 1],
    ),
    CARD_SPRING,
  );
  const activeProgress = useSpring(
    useTransform(
      virtualScroll,
      [resolvedMorphDistance * 0.08, resolvedMorphDistance * 0.42],
      [0, 1],
    ),
    CARD_SPRING,
  );
  const exitProgress = useSpring(
    useTransform(virtualScroll, [exitStart, maxScroll], [0, 1]),
    CARD_SPRING,
  );
  const smoothMouseX = useSpring(mouseX, MOUSE_SPRING);

  const settings = useMemo(
    () => ({
      arcApex,
      arcCenterX,
      arcRadiusScale,
      arcSpread,
      circleAngleOffset,
      circleOffsetX,
      circleOffsetY,
      circleRadiusMax,
      circleRadiusScale,
    }),
    [
      arcApex,
      arcCenterX,
      arcRadiusScale,
      arcSpread,
      circleAngleOffset,
      circleOffsetX,
      circleOffsetY,
      circleRadiusMax,
      circleRadiusScale,
    ],
  );

  const scatterTargets = useMemo(
    () => iconSources.map((_, index) => getScatterTarget(index)),
    [iconSources],
  );

  useEffect(() => {
    const stickyElement = stickyRef.current;
    const sceneElement = sceneRef.current;
    const element = sceneElement ?? stickyElement;
    if (!element) {
      return;
    }

    const updateSceneSize = () => {
      setSceneSize({
        height: stickyElement?.offsetHeight ?? element.offsetHeight,
        width: element.offsetWidth,
      });
    };

    updateSceneSize();

    const observer = new ResizeObserver(updateSceneSize);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldReduceMotion) {
      return;
    }

    setPhase("orbit");
    scrollRef.current = resolvedMorphDistance;
    virtualScroll.set(resolvedMorphDistance);
  }, [resolvedMorphDistance, shouldReduceMotion, virtualScroll]);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      return;
    }

    setPhase("scatter");

    const lineTimer = window.setTimeout(() => setPhase("line"), 460);
    const orbitTimer = window.setTimeout(() => setPhase("orbit"), 2100);

    return () => {
      window.clearTimeout(lineTimer);
      window.clearTimeout(orbitTimer);
    };
  }, [isInView, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const element = stickyRef.current;
    if (!element) {
      return;
    }

    const consumeScroll = (delta: number) => {
      const current = scrollRef.current;
      const next = clamp(current + delta, 0, maxScroll);
      const leftover = current + delta - next;

      if (next === current) {
        return { consumed: false, leftover: delta };
      }

      scrollRef.current = next;
      virtualScroll.set(next);

      return { consumed: true, leftover };
    };

    const handleWheel = (event: WheelEvent) => {
      const { consumed, leftover } = consumeScroll(event.deltaY);

      if (!consumed) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (leftover !== 0) {
        window.scrollBy({ top: leftover });
      }
    };

    let touchY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      touchY = event.touches[0]?.clientY ?? 0;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const nextTouchY = event.touches[0]?.clientY ?? touchY;
      const delta = (touchY - nextTouchY) * touchMultiplier;
      touchY = nextTouchY;

      const result = consumeScroll(delta);
      if (!result.consumed) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (result.leftover !== 0) {
        window.scrollBy({ top: result.leftover });
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const normalizedX = ((event.clientX - rect.left) / rect.width) * 2 - 1;

      mouseX.set(normalizedX * parallaxDistance);
    };

    const resetMouse = () => mouseX.set(0);

    element.addEventListener("wheel", handleWheel, { passive: false });
    element.addEventListener("touchstart", handleTouchStart, { passive: true });
    element.addEventListener("touchmove", handleTouchMove, { passive: false });
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", resetMouse);

    return () => {
      element.removeEventListener("wheel", handleWheel);
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", resetMouse);
    };
  }, [maxScroll, mouseX, parallaxDistance, shouldReduceMotion, touchMultiplier, virtualScroll]);

  const introOpacity = useTransform(
    morphProgress,
    [0, 0.34, 0.62],
    [1, 0.74, 0],
  );
  const introY = useTransform(morphProgress, [0, 0.62], [0, -18]);
  const introFilter = useTransform(
    morphProgress,
    [0, 0.62],
    ["blur(0px)", "blur(12px)"],
  );
  const circleContentOpacity = useTransform(activeProgress, [0, 0.55], [1, 0]);
  const circleContentY = useTransform(activeProgress, [0, 0.55], [0, -28]);
  const circleContentFilter = useTransform(
    activeProgress,
    [0, 0.55],
    ["blur(0px)", "blur(10px)"],
  );
  const resolvedActiveOpacity = useTransform(
    activeProgress,
    [0.18, 0.72],
    [0, 1],
  );
  const resolvedActiveY = useTransform(activeProgress, [0.18, 0.72], [28, 0]);

  const totalIcons = iconSources.length;
  const shouldShowCircleContent = shouldReduceMotion || phase === "orbit";
  const resolvedExitDistance = exitDistance ?? sceneSize.height * 0.62;

  return (
    <div className={`relative w-full ${className}`.trim()}>
      <div
        ref={stickyRef}
        data-cta-sticky=""
        className={`sticky w-full overscroll-contain ${stickyClassName}`.trim()}
      >
        {introContent ? (
          <motion.div
            data-cta-intro=""
            className={`pointer-events-none absolute ${introClassName}`.trim()}
            style={
              shouldReduceMotion
                ? { opacity: 0 }
                : { filter: introFilter, opacity: introOpacity, y: introY }
            }
          >
            {introContent}
          </motion.div>
        ) : null}

        {resolvedActiveContent ? (
          <motion.div
            data-cta-content=""
            className={`absolute ${resolvedActiveContentClassName}`.trim()}
            style={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : shouldShowCircleContent
                  ? { opacity: resolvedActiveOpacity, y: resolvedActiveY }
                  : { opacity: 0 }
            }
          >
            {resolvedActiveContent}
          </motion.div>
        ) : null}

        <div
          ref={sceneRef}
          className={`relative h-full w-full ${sceneClassName}`.trim()}
          style={sceneStyle}
        >
          {circleContent ? (
            <motion.div
              data-cta-circle-content=""
              className={`pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 ${circleContentClassName}`.trim()}
              style={
                shouldShowCircleContent
                  ? {
                      filter: circleContentFilter,
                      opacity: circleContentOpacity,
                      y: circleContentY,
                    }
                  : { opacity: 0 }
              }
            >
              {circleContent}
            </motion.div>
          ) : null}

          <div className="relative flex h-full w-full items-center justify-center">
            {iconSources.map((src, index) => (
              <OrbitIcon
                key={`${src}-${index}`}
                cardSize={cardSize}
                exitDistance={resolvedExitDistance}
                exitProgress={exitProgress}
                iconSize={iconSize}
                index={index}
                lineGap={lineGap}
                morphProgress={morphProgress}
                parallaxX={smoothMouseX}
                phase={phase}
                rotationProgress={rotationProgress}
                scatterTarget={scatterTargets[index]}
                sceneSize={sceneSize}
                settings={settings}
                src={src}
                total={totalIcons}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
