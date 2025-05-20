"use client";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { isEmpty } from "lodash";
import React, { FC, useCallback, useEffect, useRef } from "react";
import { scale } from "../../helpers/scaleValue.helper";
const TWEEN_FACTOR_BASE = 1;

const WheelPicker: FC<{
  perspective: "left" | "center" | "right";
  useTransform?: boolean;
  hasDynamicValue?: boolean;
  defaultValue?: { id: number; title: string | number };
  slides: { id: number; title: string | number }[];
  onSelect: (a: { id: number; title: string | number }) => void;
}> = ({ slides, onSelect, useTransform = false, perspective, defaultValue, hasDynamicValue }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    dragFree: false,
    duration: 25,
    skipSnaps: true,
    loop: false,
    containScroll: false,
    startIndex: slides.findIndex((i) => i?.id == defaultValue?.id) || 0,
    watchSlides: false,
  });

  const tweenFactor = useRef(0);
  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        if (tweenValue <= 1 && tweenValue >= 0.98) {
          onSelect(slides[slideIndex]);
        }

        const rotate = scale(tweenValue, -1, 1, 45, 0).toString();
        const translate = scale(tweenValue, -1, 1, 40 / (slides.length / 2), 0).toString();
        const translateZ = scale(tweenValue, -1, 1, 40 / slides.length, 0).toString();

        emblaApi.slideNodes()[slideIndex].style.fontWeight = "bold";
        if (useTransform)
          emblaApi.slideNodes()[slideIndex].style.transform = `rotateX(${rotate}deg) translateX(${
            perspective == "center" ? 0 : perspective == "left" ? -translate : translate
          }px) translateZ(${translateZ}px)`;
      });
    });
  }, []);
  const handleAutoScroll = useCallback((emblaApi: EmblaCarouselType) => {
    if (!!emblaApi?.canScrollNext) {
      if (!isEmpty(slides) && !!defaultValue) {
        const TEMP = slides.findIndex((i) => i?.id == defaultValue?.id);

        if (TEMP >= 0) emblaApi?.scrollTo(TEMP, false);
      }
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);

    emblaApi
      .on("init", handleAutoScroll)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity, handleAutoScroll]);
  useEffect(() => {
    if (hasDynamicValue) {
      emblaApi?.reInit();
    }
  }, [slides]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div
              className="embla__slide transform-all text-lg"
              key={item?.id}
              onClick={() => emblaApi?.scrollTo(index, false)}
            >
              {item?.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WheelPicker;
