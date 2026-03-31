import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { HeroTitleTextReveal } from "../effects/hero-title-reveal";
import { assetUrl } from "../../lib/asset-url";
import { useActiveBreakpoint } from "../../lib/use-active-breakpoint";

const imgAvatar = assetUrl("/visual-ir-assets/avatar.webp");
const img = assetUrl("/visual-ir-assets/asset.svg");
const imgQuoteMobile = assetUrl("/visual-ir-assets/quote-mobile.svg");
const imgEllipse54 = assetUrl("/visual-ir-assets/ellipse54.png");
const imgEllipse55 = assetUrl("/visual-ir-assets/ellipse55.png");
const imgEllipse56 = assetUrl("/visual-ir-assets/ellipse56.png");
const TESTIMONIAL_EASE: [number, number, number, number] = [0.44, 0, 0.56, 1];
const MOBILE_TESTIMONIAL_CONTENT_TOP = 220;
const MOBILE_TESTIMONIAL_FALLBACK_MIN_HEIGHT = 548;
const TABLET_TESTIMONIAL_CONTENT_TOP = 70;
const TABLET_REVIEW_COLUMN_WIDTH = 353;
const TABLET_TESTIMONIAL_BOTTOM_OFFSET = 24;
const TABLET_TESTIMONIAL_FALLBACK_MIN_HEIGHT = 232;
const TABLET_SWIPE_THRESHOLD = 56;
const TABLET_DRAG_PREVIEW_LIMIT = TABLET_REVIEW_COLUMN_WIDTH;
const TABLET_DRAG_RESPONSE = 1;
const TABLET_SWIPE_EXIT_OFFSET = Math.round(TABLET_REVIEW_COLUMN_WIDTH * 1.12);
const TABLET_SWIPE_ENTER_OFFSET = 48;
const EMBLA_OPTIONS = {
  align: "start" as const,
  containScroll: "trimSnaps" as const,
  dragFree: false,
  duration: 32,
  loop: true,
  skipSnaps: false,
};

const TESTIMONIALS = [
  "Victor tem demonstrado ser uma pessoa muito solícita, sempre aberto a ouvir e colaborar da melhor forma possível. Ele apresenta boa habilidade de comunicação e, além disso, mantém excelente coerência em seu raciocínio. É extremamente educado, preocupado e atencioso. Sem dúvidas, é alguém com quem eu gostaria de trabalhar por muito tempo.",
  "Sua dedicação ao projeto do Coolhunting 2.0 tem sido exemplar. O comprometimento com os prazos e a qualidade das entregas são notáveis. A maneira como tem organizado as suas tarefas foi muito eficiente e ajudou a manter o projeto no caminho certo.",
  "A abordagem criativa que Victor trouxe para a resolução das primeiras entregas, pensar em algo do zero, tangibilizar o desejo macro, foi impressionante. Suas ideias criativas e ágeis têm agregado valor significativo ao projeto e ajudado a equipe a superar obstáculos de forma eficaz.",
  "Sua capacidade de colaborar e comunicar-se com os outros membros da equipe e com os stakeholders tem sido positiva. Sua disposição para ajudar e compartilhar conhecimentos tem fortalecido o espírito de equipe e facilitado a cooperação entre os diferentes setores.",
] as const;

const TESTIMONIAL_REVIEWER =
  "Mayra Santos, Gerente de inovação e Desenvolvimento de Software";
const TESTIMONIAL_COMPANY = "WAP & WAAW by Alok";
const TABLET_TESTIMONIAL_VARIANTS = {
  center: { opacity: 1, x: 0 },
  enter: (nextDirection: -1 | 1) => ({
    opacity: 0.001,
    x: nextDirection > 0 ? TABLET_SWIPE_ENTER_OFFSET : -TABLET_SWIPE_ENTER_OFFSET,
  }),
  exit: (nextDirection: -1 | 1) => ({
    opacity: 0.001,
    x: nextDirection > 0 ? -TABLET_SWIPE_EXIT_OFFSET : TABLET_SWIPE_EXIT_OFFSET,
  }),
} satisfies Variants;

function TestimonialSwap({
  activeIndex,
  children,
  className = "",
}: {
  activeIndex: number;
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className || undefined}>{children}</div>;
  }

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={activeIndex}
        animate={{ opacity: 1, y: 0 }}
        className={className || undefined}
        exit={{ opacity: 0.001, y: -8 }}
        initial={{ opacity: 0.001, y: 10 }}
        style={{ willChange: "transform, opacity" }}
        transition={{ duration: 0.28, ease: TESTIMONIAL_EASE }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function TestimonialIndicatorBadge({
  activeIndex,
  className = "",
}: {
  activeIndex: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-[12px] ${className}`.trim()} data-name="Badge">
      <div className="visual-ir-indicator-glass relative flex h-[15px] w-[39px] shrink-0 items-center justify-center gap-[3px] rounded-[7.5px]">
        {([0, 1, 2, 3] as const).map((index) => (
          <span
            key={`testimonial-badge-dot-${index}`}
            className="block h-[5px] w-[5px] rounded-full bg-white"
            style={{ opacity: activeIndex === index ? 1 : 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}

function MobileTestimonialContent({
  testimonial,
  className = "",
}: {
  testimonial: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-[20px] items-start w-full pb-[44px] ${className}`.trim()}>
      <div className="flex flex-col gap-[12px] items-start w-full" data-node-id="67:2422">
        <div className="h-[16px] relative shrink-0 w-[20px]" data-node-id="67:2423">
          <img decoding="async" loading="lazy" alt="" className="absolute block max-w-none size-full" src={imgQuoteMobile} />
        </div>
        <div className="figma-font-geist font-normal text-[14px] text-[#393737] tracking-[-0.2px] w-full" data-node-id="67:2424">
          <p className="leading-[21px]">{testimonial}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] items-start w-full" data-node-id="67:2428">
        <div className="figma-font-geist font-normal opacity-50 text-[12px] text-black w-full" data-node-id="67:2429">
          <p className="leading-[20px]">{TESTIMONIAL_REVIEWER}</p>
        </div>
        <div className="flex items-center justify-between w-full" data-node-id="67:2430">
          <div className="figma-font-geist font-medium text-[12px] text-[#393737] whitespace-nowrap" data-node-id="67:2431">
            <p className="leading-[normal]">{TESTIMONIAL_COMPANY}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabletTestimonialContent({
  testimonial,
  className = "",
}: {
  testimonial: string;
  className?: string;
}) {
  return (
    <div className={`content-stretch flex flex-col gap-[30px] items-start relative w-[353px] ${className}`.trim()}>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="68:617">
        <div className="h-[16px] relative shrink-0 w-[20px]" data-node-id="68:618">
          <img decoding="async" loading="lazy" alt="" className="absolute block max-w-none size-full" src={imgQuoteMobile} />
        </div>
        <div className="figma-font-geist font-normal justify-center leading-[0] relative shrink-0 text-[#393737] text-[14px] tracking-[-0.2px] w-full" data-node-id="68:619">
          <p className="leading-[21px]">{testimonial}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="68:623">
        <div className="figma-font-geist font-normal opacity-50 text-[12px] text-black w-full" data-node-id="68:624">
          <p className="leading-[20px]">{TESTIMONIAL_REVIEWER}</p>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="68:625">
          <div className="figma-font-geist font-medium text-[12px] text-[#393737] whitespace-nowrap" data-node-id="68:626">
            <p className="leading-[normal]">{TESTIMONIAL_COMPANY}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabletTestimonialSwap({
  activeIndex,
  direction,
  dragOffset,
  children,
}: {
  activeIndex: number;
  direction: -1 | 1;
  dragOffset: number;
  children: ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div style={{ transform: dragOffset === 0 ? undefined : `translateX(${dragOffset}px)` }}>
        {children}
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden">
      <AnimatePresence custom={direction} initial={false} mode="wait">
        <motion.div
          key={activeIndex}
          animate={dragOffset === 0 ? "center" : { opacity: 1, x: dragOffset }}
          className="absolute inset-x-0 top-0"
          custom={direction}
          exit="exit"
          initial="enter"
          style={{ willChange: "transform, opacity" }}
          transition={
            dragOffset === 0
              ? { duration: 0.22, ease: TESTIMONIAL_EASE }
              : { duration: 0 }
          }
          variants={TABLET_TESTIMONIAL_VARIANTS}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function TabletTestimonialAvatarLayer() {
  return (
    <div className="absolute h-[277px] left-px overflow-hidden top-[47px] w-[247px] z-[1] pointer-events-none" data-node-id="68:335">
      <div className="absolute left-0 top-0 origin-top-left scale-x-[0.643] scale-y-[0.682]">
        <div className="h-[406px] relative w-[384px]" data-node-id="68:336">
          <div className="absolute contents left-0 top-0">
            <div className="absolute h-[405px] left-0 overflow-clip top-px w-[384px]">
              <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[139px] left-[-1px] rounded-br-[24px] top-[-3px] w-[94px]" />
              <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[175px] left-[-1px] rounded-br-[24px] rounded-tr-[24px] top-[148px] w-[94px]" />
              <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[73px] left-[290px] rounded-bl-[24px] top-[-3px] w-[94px]" />
              <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[168px] left-[290px] rounded-bl-[24px] rounded-tl-[24px] top-[82px] w-[94px]" />
              <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[144px] left-[290px] rounded-tl-[24px] top-[262px] w-[94px]" />
              <div className="absolute flex h-[101px] items-center justify-center left-[105px] top-[305px] w-[173px]">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[101px] rounded-tl-[24px] rounded-tr-[24px] w-[173px]" />
                </div>
              </div>
              <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[111px] left-[105px] rounded-bl-[24px] rounded-br-[24px] top-[-3px] w-[173px]" />
              <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[71px] left-[-1px] rounded-tr-[24px] top-[335px] w-[94px]" />
            </div>
            <div className="absolute h-[406px] left-0 top-0 w-[384px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 384 406\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(1.1757e-15 20.3 -20.397 5.9918e-14 192 203)\\'><stop stop-color=\\'rgba(247,247,247,0)\\' offset=\\'0.71154\\'/><stop stop-color=\\'rgba(247,247,247,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
            <div className="absolute left-[24px] top-[42px] w-[336px]">
              <img decoding="async" loading="lazy" alt="" className="max-w-none w-full" src={imgAvatar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TestimonialSectionProps {
  id?: string;
  className?: string;
}

export default function TestimonialSection({ id, className = "" }: TestimonialSectionProps = {}) {
  const activeBreakpoint = useActiveBreakpoint();
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [hasUserTakenControl, setHasUserTakenControl] = useState(false);
  const [tabletDirection, setTabletDirection] = useState<1 | -1>(1);
  const [tabletDragOffset, setTabletDragOffset] = useState(0);
  const [tabletMeasuredContentHeight, setTabletMeasuredContentHeight] = useState(0);
  const [mobileMeasuredContentHeight, setMobileMeasuredContentHeight] = useState(0);
  const tabletMeasurementRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mobileMeasurementRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [mobileEmblaRef, mobileEmblaApi] = useEmblaCarousel(EMBLA_OPTIONS);
  const tabletSwipeStateRef = useRef({
    isActive: false,
    isDragging: false,
    pointerId: -1,
    startX: 0,
    startY: 0,
  });

  useEffect(() => {
    if (hasUserTakenControl) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setTabletDirection(1);
      setActiveTestimonialIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 4000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [hasUserTakenControl]);

  useLayoutEffect(() => {
    const measureMaxHeight = (nodes: Array<HTMLDivElement | null>) => {
      return nodes.reduce((maxHeight, node) => {
        if (!node) {
          return maxHeight;
        }

        return Math.max(maxHeight, Math.ceil(node.getBoundingClientRect().height));
      }, 0);
    };

    const measure = () => {
      const nextMobileHeight = measureMaxHeight(mobileMeasurementRefs.current);
      const nextTabletHeight = measureMaxHeight(tabletMeasurementRefs.current);

      setMobileMeasuredContentHeight((current) =>
        current === nextMobileHeight ? current : nextMobileHeight,
      );
      setTabletMeasuredContentHeight((current) =>
        current === nextTabletHeight ? current : nextTabletHeight,
      );
    };

    measure();

    if (typeof ResizeObserver === "undefined") {
      return undefined;
    }

    const observer = new ResizeObserver(measure);

    [...mobileMeasurementRefs.current, ...tabletMeasurementRefs.current].forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const activeTestimonial = TESTIMONIALS[activeTestimonialIndex];
  const mobileCardMinHeight = Math.max(
    MOBILE_TESTIMONIAL_FALLBACK_MIN_HEIGHT,
    MOBILE_TESTIMONIAL_CONTENT_TOP + mobileMeasuredContentHeight,
  );
  const tabletContentMinHeight = Math.max(
    TABLET_TESTIMONIAL_FALLBACK_MIN_HEIGHT,
    tabletMeasuredContentHeight,
  );
  const tabletCardHeight =
    TABLET_TESTIMONIAL_CONTENT_TOP +
    tabletContentMinHeight +
    TABLET_TESTIMONIAL_BOTTOM_OFFSET;

  useEffect(() => {
    if (!mobileEmblaApi) {
      return undefined;
    }

    const syncSelectedIndex = () => {
      const nextIndex = mobileEmblaApi.selectedScrollSnap();

      setActiveTestimonialIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    syncSelectedIndex();
    mobileEmblaApi.on("select", syncSelectedIndex);

    return () => {
      mobileEmblaApi.off("select", syncSelectedIndex);
    };
  }, [mobileEmblaApi]);

  useEffect(() => {
    if (!mobileEmblaApi) {
      return;
    }

    const selectedIndex = mobileEmblaApi.selectedScrollSnap();

    if (selectedIndex !== activeTestimonialIndex) {
      mobileEmblaApi.scrollTo(activeTestimonialIndex, true);
    }
  }, [activeTestimonialIndex, mobileEmblaApi]);

  const handleTestimonialInteractionStart = () => {
    setHasUserTakenControl(true);
  };

  const handleTabletPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    handleTestimonialInteractionStart();
    tabletSwipeStateRef.current = {
      isActive: true,
      isDragging: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleTabletPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const swipeState = tabletSwipeStateRef.current;

    if (!swipeState.isActive || swipeState.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - swipeState.startX;
    const deltaY = event.clientY - swipeState.startY;

    if (!swipeState.isDragging) {
      if (Math.abs(deltaX) < 6 || Math.abs(deltaX) <= Math.abs(deltaY)) {
        return;
      }

      swipeState.isDragging = true;
    }

    event.preventDefault();
    const previewOffset = deltaX * TABLET_DRAG_RESPONSE;
    setTabletDragOffset(
      Math.max(
        -TABLET_DRAG_PREVIEW_LIMIT,
        Math.min(TABLET_DRAG_PREVIEW_LIMIT, previewOffset),
      ),
    );
  };

  const resetTabletSwipeState = () => {
    tabletSwipeStateRef.current = {
      isActive: false,
      isDragging: false,
      pointerId: -1,
      startX: 0,
      startY: 0,
    };
    setTabletDragOffset(0);
  };

  const handleTabletPointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    const swipeState = tabletSwipeStateRef.current;

    if (!swipeState.isActive || swipeState.pointerId !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const deltaX = event.clientX - swipeState.startX;
    const deltaY = event.clientY - swipeState.startY;
    const isHorizontalSwipe = Math.abs(deltaX) > TABLET_SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY);

    if (isHorizontalSwipe) {
      if (deltaX < 0) {
        setTabletDirection(1);
        setActiveTestimonialIndex((current) => (current + 1) % TESTIMONIALS.length);
      } else {
        setTabletDirection(-1);
        setActiveTestimonialIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      }
    }

    resetTabletSwipeState();
  };

  return (
    <div id={id} className={`h-[455.5px] max-lg:h-auto relative shrink-0 w-full max-w-[1200px] ${className}`.trim()} data-name="Container" data-node-id="3:733">
      <h2 className="sr-only">Depoimento</h2>
            {activeBreakpoint === "desktop" ? (
            <>
            <div className="max-lg:hidden absolute content-stretch flex flex-col gap-[20px] items-start left-[452px] top-[121px] w-[680px]" data-name="Review Container" data-node-id="1:727">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Section" data-node-id="1:728">
                <div className="h-[26px] relative shrink-0 w-[33px]" data-name="“" data-node-id="1:729">
                  <img decoding="async" loading="lazy" alt="" className="absolute block max-w-none size-full" src={img} />
                </div>
                <TestimonialIndicatorBadge activeIndex={activeTestimonialIndex} />
              </div>
              <TestimonialSwap activeIndex={activeTestimonialIndex} className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <div className="figma-font-geist flex flex-col font-normal min-h-[143px] justify-center leading-[0] relative shrink-0 text-[#393737] text-[18px] max-lg:text-[clamp(15px,2vw,18px)] w-full" data-node-id="1:736">
                  <p className="leading-[27px] max-lg:leading-[clamp(23px,2.8vw,27px)]">{activeTestimonial}</p>
                </div>
                <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Reviewer Info Container" data-node-id="1:740">
                  <div className="content-stretch flex items-center justify-between w-full">
                    <div className="figma-font-geist flex flex-col font-normal justify-center opacity-50 relative shrink-0 text-[16px] text-black" data-node-id="1:741">
                      <p className="leading-[normal]">{TESTIMONIAL_REVIEWER}</p>
                    </div>
                    <div className="figma-font-geist flex flex-col font-medium justify-center relative shrink-0 text-[#393737] text-[12px]" data-node-id="1:742">
                      <p className="leading-[normal]">{TESTIMONIAL_COMPANY}</p>
                    </div>
                  </div>
                </div>
              </TestimonialSwap>
            </div>
            <div className="absolute h-[455.5px] left-0 top-0 w-[1200px] max-lg:hidden" data-name="Container" data-node-id="3:732">
              <div className="absolute contents left-0 top-0" data-name="Container" data-node-id="1:743">
                <div className="absolute border border-[#e1e1e1] border-solid h-[454px] left-0 top-0 w-[1200px]" data-name="Container" data-node-id="1:744" />
                <div className="absolute border border-[#e1e1e1] border-solid h-[46px] left-0 top-0 w-[1200px]" data-name="Line" data-node-id="1:745" />
                <div className="absolute h-[46px] left-0 top-0 w-[1200px]" data-name="header-divisor" data-node-id="1:746">
                  <img decoding="async" loading="lazy" alt="" className="absolute inset-0 block size-full" src={assetUrl("/visual-ir-assets/header-divisor.svg")} />
                </div>
                <div className="absolute h-[406px] left-px top-[47px] w-[384px] max-lg:hidden" data-name="Avatar-background" data-node-id="1:925">
                  <div className="absolute contents left-0 top-0" data-name="Avatar-background" data-node-id="1:926">
                    <div className="absolute h-[405px] left-0 overflow-clip top-px w-[384px]" data-name="background-illustration" data-node-id="1:927">
                      <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[139px] left-[-1px] rounded-br-[24px] top-[-3px] w-[94px]" data-name="Rounded Button" data-node-id="1:928" />
                      <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[175px] left-[-1px] rounded-br-[24px] rounded-tr-[24px] top-[148px] w-[94px]" data-name="Rounded Button" data-node-id="1:929" />
                      <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[73px] left-[290px] rounded-bl-[24px] top-[-3px] w-[94px]" data-name="Rounded Button" data-node-id="1:930" />
                      <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[168px] left-[290px] rounded-bl-[24px] rounded-tl-[24px] top-[82px] w-[94px]" data-name="Rounded Button" data-node-id="1:931" />
                      <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[144px] left-[290px] rounded-tl-[24px] top-[262px] w-[94px]" data-name="Rounded Button" data-node-id="1:932" />
                      <div className="absolute flex h-[101px] items-center justify-center left-[105px] top-[305px] w-[173px]">
                        <div className="-scale-y-100 flex-none rotate-180">
                          <div className="bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[101px] rounded-tl-[24px] rounded-tr-[24px] w-[173px]" data-name="Rounded Button" data-node-id="1:933" />
                        </div>
                      </div>
                      <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[111px] left-[105px] rounded-bl-[24px] rounded-br-[24px] top-[-3px] w-[173px]" data-name="Rounded Button" data-node-id="1:934" />
                      <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[71px] left-[-1px] rounded-tr-[24px] top-[335px] w-[94px]" data-name="Rounded Button" data-node-id="1:935" />
                    </div>
                    <div className="absolute h-[406px] left-0 top-0 w-[384px]" data-name="white-blur" data-node-id="1:936" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 384 406\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(1.1757e-15 20.3 -20.397 5.9918e-14 192 203)\\'><stop stop-color=\\'rgba(247,247,247,0)\\' offset=\\'0.71154\\'/><stop stop-color=\\'rgba(247,247,247,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
                    <div className="absolute left-[24px] top-[42px] w-[336px]" data-name="avatar" data-node-id="1:941">
                      <img decoding="async" loading="lazy" alt="" className="max-w-none w-full" src={imgAvatar} />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white h-[1.5px] left-0 top-[454px] w-[1200px]" data-name="Line" data-node-id="1:942" />
                <div className="absolute bg-white h-[1.5px] left-px top-px w-[1198px]" data-name="Line" data-node-id="1:943" />
                <div className="absolute bg-white h-[1.5px] left-px top-[46px] w-[1198px]" data-name="Line" data-node-id="1:944" />
              </div>
            </div>
            </>
            ) : null}

      {/* ====== Tablet ====== */}
      {activeBreakpoint === "tablet" ? (
      <div className="hidden min-[768px]:flex min-[1024px]:hidden flex-col gap-[16px] items-start w-full max-w-[684px] mx-auto" data-name="Testimonial-tablet" data-node-id="69:925">
        <div className="figma-font-georgia not-italic text-[32px] text-[#393737] tracking-[-0.64px] w-full" data-node-id="68:150">
          <p className="leading-[44px]">
            <HeroTitleTextReveal text="Sucesso não é só produto, também é sobre gente" delay={0} noWrap={false} />
          </p>
        </div>

        <div
          className="content-stretch flex flex-col gap-[10px] items-end justify-end px-[24px] py-[24px] relative shrink-0 w-full touch-pan-y"
          data-node-id="69:651"
          onPointerCancel={handleTabletPointerEnd}
          onPointerDown={handleTabletPointerDown}
          onPointerMove={handleTabletPointerMove}
          onPointerUp={handleTabletPointerEnd}
          onTouchStart={handleTestimonialInteractionStart}
          style={{ height: `${tabletCardHeight}px` }}
        >
          <div
            className="absolute left-0 top-0 w-[684px]"
            data-node-id="68:152"
            style={{ height: `${tabletCardHeight}px` }}
          >
            <div className="absolute bg-white bottom-0 h-[2px] left-0 w-[684px]" data-node-id="68:153" />
            <div
              className="absolute border border-[#e1e1e1] border-solid left-0 top-0 w-[684px]"
              data-node-id="68:154"
              style={{ height: `${tabletCardHeight - 2}px` }}
            />
            <div className="absolute border border-[#e1e1e1] border-solid h-[46px] left-0 top-0 w-[684px]" data-node-id="68:155" />
            <div className="absolute h-[46px] left-0 overflow-clip top-0 w-[684px]" data-node-id="68:156">
              <img decoding="async" loading="lazy" alt="" className="absolute left-1/2 -translate-x-1/2 top-0 h-[46px] w-[1200px] max-w-none" src={assetUrl("/visual-ir-assets/header-divisor.svg")} />
            </div>

            <div className="absolute bg-white h-[1.5px] left-px top-px w-[682px]" data-node-id="68:355" />
            <div className="absolute bg-white h-[1.5px] left-px top-[46px] w-[682px]" data-node-id="68:356" />
          </div>

          <div
            aria-hidden="true"
            className="absolute right-[24px] top-[70px] invisible pointer-events-none z-0 w-[353px]"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={`testimonial-tablet-measure-${index}`}
                ref={(node) => {
                  tabletMeasurementRefs.current[index] = node;
                }}
                className="w-full"
              >
                <TabletTestimonialContent testimonial={testimonial} />
              </div>
            ))}
          </div>

          <div
            className="absolute right-[24px] top-[70px] w-[353px] overflow-hidden z-0"
            style={{ height: `${tabletContentMinHeight}px` }}
          >
            <TabletTestimonialSwap
              activeIndex={activeTestimonialIndex}
              direction={tabletDirection}
              dragOffset={tabletDragOffset}
            >
              <TabletTestimonialContent testimonial={activeTestimonial} />
            </TabletTestimonialSwap>
          </div>
          <TabletTestimonialAvatarLayer />
          <TestimonialIndicatorBadge
            activeIndex={activeTestimonialIndex}
            className="absolute bottom-[24px] right-[24px] pointer-events-none z-[2]"
          />
        </div>
      </div>
      ) : null}

      {/* ====== Mobile ====== */}
      {activeBreakpoint === "mobile" ? (
      <div className="hidden max-md:flex flex-col gap-[16px] items-start w-full max-w-[480px] mx-auto mt-[62px]" data-name="Testimonial-mobile" data-node-id="67:2213">
        <div className="figma-font-georgia not-italic text-[24px] text-[#393737] tracking-[-0.48px] w-full" data-node-id="67:2214">
          <p className="leading-[34px]">
            <HeroTitleTextReveal text="Sucesso não é só produto, também é sobre gente" delay={0} noWrap={false} />
          </p>
        </div>
        <div
          className="flex h-auto items-end px-[16px] pt-[14px] relative shrink-0 w-full"
          data-node-id="67:2215"
          onPointerDown={handleTestimonialInteractionStart}
          onTouchStart={handleTestimonialInteractionStart}
          style={{ minHeight: `${mobileCardMinHeight}px` }}
        >
          {/* Decorative card background */}
          <div className="absolute inset-0" data-name="Container" data-node-id="67:2216">
            <div className="absolute bg-white bottom-[0.5px] h-[1.5px] inset-x-0" data-node-id="67:2217" />
            <div className="absolute border border-[#e1e1e1] border-solid inset-x-0 top-0 bottom-0" data-node-id="67:2218" />
            <div className="absolute border border-[#e1e1e1] border-solid h-[46px] inset-x-0 top-0" data-node-id="67:2219" />
            <div className="absolute h-[48px] inset-x-0 -top-px overflow-clip" data-name="header-divisor" data-node-id="67:2220">
              <img decoding="async" loading="lazy" alt="" className="absolute left-1/2 -translate-x-1/2 top-px h-[46px] w-[1200px] max-w-none" src={assetUrl("/visual-ir-assets/header-divisor.svg")} />
            </div>
            {/* Avatar background area */}
            <div className="absolute h-[clamp(200px,56vw,260px)] inset-x-0 top-[47px]" data-name="Avatar-background" data-node-id="67:2399">
              <div className="absolute h-[200px] left-px overflow-clip top-px right-px" data-name="background-illustration" data-node-id="67:2400">
                <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[98px] left-[-1px] rounded-br-[14px] top-[-48px] w-[66px]" data-node-id="67:2402" />
                <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[123px] left-[-1px] rounded-br-[14px] rounded-tr-[14px] top-[59px] w-[66px]" data-node-id="67:2403" />
                <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[52px] right-[-1px] rounded-bl-[14px] top-[-48px] w-[66px]" data-node-id="67:2404" />
                <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[119px] right-[-1px] rounded-bl-[14px] rounded-tl-[14px] top-[12px] w-[66px]" data-node-id="67:2405" />
                <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[101px] right-[-1px] rounded-tl-[14px] top-[139px] w-[66px]" data-node-id="67:2406" />
                <div className="absolute flex h-[71px] items-center justify-center left-1/2 -translate-x-1/2 top-[169px] w-[122px]">
                  <div className="-scale-y-100 flex-none rotate-180">
                    <div className="bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[71px] rounded-tl-[14px] rounded-tr-[14px] w-[122px]" data-node-id="67:2407" />
                  </div>
                </div>
                <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[79px] left-1/2 -translate-x-1/2 rounded-bl-[14px] rounded-br-[14px] top-[-48px] w-[122px]" data-node-id="67:2408" />
                <div className="absolute bg-[#f1f1f1] border border-[#e1e1e1] border-solid h-[50px] left-[-1px] rounded-tr-[14px] top-[190px] w-[66px]" data-node-id="67:2409" />
              </div>
              <div className="absolute h-[200px] left-px top-px right-px" data-name="white-fade" data-node-id="67:2410" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 270 200\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(8.2664e-16 10 -14.342 2.9516e-14 135 100)\\'><stop stop-color=\\'rgba(247,247,247,0)\\' offset=\\'0.71154\\'/><stop stop-color=\\'rgba(247,247,247,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
              {/* Photo + blur ellipses */}
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[clamp(140px,40vw,200px)] left-1/2 top-[calc(50%+0.5px)] w-[clamp(140px,40vw,200px)]" data-name="photo+blur" data-node-id="67:2411">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[173px] top-[calc(50%+10px)]" data-node-id="67:2412">
                  {/* Blur ellipses */}
                  <div className="absolute flex items-center justify-center left-[13.89px] size-[138.875px] top-[23.13px]">
                    <div className="flex-none rotate-180">
                      <div className="opacity-20 relative size-[138.875px]" data-node-id="67:2415">
                        <div className="absolute inset-[-21.6%]">
                          <img decoding="async" loading="lazy" alt="" className="block max-w-none size-full" src={imgEllipse54} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center left-[47.54px] size-[114.472px] top-[5.57px]">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="opacity-30 relative size-[114.472px]" data-node-id="67:2416">
                        <div className="absolute inset-[-26.21%]">
                          <img decoding="async" loading="lazy" alt="" className="block max-w-none size-full" src={imgEllipse55} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center left-[10px] size-[114.472px] top-0">
                    <div className="flex-none rotate-180">
                      <div className="opacity-30 relative size-[114.472px]" data-node-id="67:2417">
                        <div className="absolute inset-[-26.21%]">
                          <img decoding="async" loading="lazy" alt="" className="block max-w-none size-full" src={imgEllipse56} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Avatar photo */}
                  <div className="absolute left-1/2 top-[calc(50%+3px)] -translate-x-1/2 -translate-y-1/2 rounded-[14px] size-[192.6px]" data-name="avatar" data-node-id="67:2418">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[14px]">
                      <img decoding="async" loading="lazy" alt="" className="absolute left-[-8%] max-w-none size-[116%] top-[-16.09%]" src={imgAvatar} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* White overlay lines */}
            <div className="absolute bg-white h-[1.5px] inset-x-0 top-px" data-node-id="67:2419" />
            <div className="absolute bg-white h-[1.5px] inset-x-0 top-[46px]" data-node-id="67:2420" />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-[16px] invisible pointer-events-none"
            style={{ top: `${MOBILE_TESTIMONIAL_CONTENT_TOP}px` }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={`testimonial-mobile-measure-${index}`}
                ref={(node) => {
                  mobileMeasurementRefs.current[index] = node;
                }}
                className="w-full"
              >
                <MobileTestimonialContent testimonial={testimonial} />
              </div>
            ))}
          </div>
          {/* Review content */}
          <div
            className="relative shrink-0 w-full overflow-hidden touch-pan-y"
            data-name="Testimonial-mobile-viewport"
            ref={mobileEmblaRef}
          >
            <div className="flex" data-name="Testimonial-mobile-track">
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={`testimonial-mobile-slide-${index}`}
                  className="min-w-0 shrink-0 basis-full"
                >
                  <div style={{ paddingTop: `${MOBILE_TESTIMONIAL_CONTENT_TOP}px` }}>
                    <MobileTestimonialContent testimonial={testimonial} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <TestimonialIndicatorBadge
            activeIndex={activeTestimonialIndex}
            className="absolute bottom-[20px] right-[16px]"
          />
        </div>
      </div>
      ) : null}
          </div>
  );
}
