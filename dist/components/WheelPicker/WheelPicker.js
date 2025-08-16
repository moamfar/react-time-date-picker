"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const embla_carousel_react_1 = __importDefault(require("embla-carousel-react"));
const lodash_1 = require("lodash");
const react_1 = __importStar(require("react"));
const scaleValue_helper_1 = require("../../helpers/scaleValue.helper");
const TWEEN_FACTOR_BASE = 1;
const WheelPicker = ({ slides, onSelect, useTransform = false, perspective, defaultValue, hasDynamicValue }) => {
    const [emblaRef, emblaApi] = (0, embla_carousel_react_1.default)({
        axis: "y",
        dragFree: false,
        duration: 25,
        skipSnaps: true,
        loop: false,
        containScroll: false,
        startIndex: slides.findIndex((i) => (i === null || i === void 0 ? void 0 : i.id) == (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.id)) || 0,
        watchSlides: false,
    });
    const tweenFactor = (0, react_1.useRef)(0);
    const setTweenFactor = (0, react_1.useCallback)((emblaApi) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);
    const tweenOpacity = (0, react_1.useCallback)((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();
        const slidesInView = emblaApi.slidesInView();
        const isScrollEvent = eventName === "scroll";
        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress;
            const slidesInSnap = engine.slideRegistry[snapIndex];
            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex))
                    return;
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
                const rotate = (0, scaleValue_helper_1.scale)(tweenValue, -1, 1, 45, 0).toString();
                const translate = (0, scaleValue_helper_1.scale)(tweenValue, -1, 1, 40 / (slides.length / 2), 0).toString();
                const translateZ = (0, scaleValue_helper_1.scale)(tweenValue, -1, 1, 40 / slides.length, 0).toString();
                emblaApi.slideNodes()[slideIndex].style.fontWeight = "bold";
                if (useTransform)
                    emblaApi.slideNodes()[slideIndex].style.transform = `rotateX(${rotate}deg) translateX(${perspective == "center" ? 0 : perspective == "left" ? -translate : translate}px) translateZ(${translateZ}px)`;
            });
        });
    }, []);
    const handleAutoScroll = (0, react_1.useCallback)((emblaApi) => {
        if (!!(emblaApi === null || emblaApi === void 0 ? void 0 : emblaApi.canScrollNext)) {
            if (!(0, lodash_1.isEmpty)(slides) && !!defaultValue) {
                const TEMP = slides.findIndex((i) => (i === null || i === void 0 ? void 0 : i.id) == (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.id));
                if (TEMP >= 0)
                    emblaApi === null || emblaApi === void 0 ? void 0 : emblaApi.scrollTo(TEMP, false);
            }
        }
    }, []);
    (0, react_1.useEffect)(() => {
        if (!emblaApi)
            return;
        setTweenFactor(emblaApi);
        tweenOpacity(emblaApi);
        emblaApi
            .on("init", handleAutoScroll)
            .on("reInit", setTweenFactor)
            .on("reInit", tweenOpacity)
            .on("scroll", tweenOpacity)
            .on("slideFocus", tweenOpacity);
    }, [emblaApi, tweenOpacity, handleAutoScroll]);
    (0, react_1.useEffect)(() => {
        if (hasDynamicValue) {
            emblaApi === null || emblaApi === void 0 ? void 0 : emblaApi.reInit();
        }
    }, [slides]);
    return (react_1.default.createElement("section", { className: "embla" },
        react_1.default.createElement("div", { className: "embla__viewport_picker", ref: emblaRef },
            react_1.default.createElement("div", { className: "embla__container_picker" }, slides.map((item, index) => (react_1.default.createElement("div", { className: "embla__slide_picker transform-all text-lg", key: item === null || item === void 0 ? void 0 : item.id, onClick: () => emblaApi === null || emblaApi === void 0 ? void 0 : emblaApi.scrollTo(index, false) }, item === null || item === void 0 ? void 0 : item.title)))))));
};
exports.default = WheelPicker;
