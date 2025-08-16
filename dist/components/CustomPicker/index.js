"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const react_1 = __importStar(require("react"));
const WheelPicker_1 = __importDefault(require("../WheelPicker/WheelPicker"));
moment_1.default.locale("en");
const CustomPicker = (_a) => {
    var props = __rest(_a, []);
    const { setValue, value, useTransform = true, submitCallback, submitTitle = "ثبت", buttonClassName = "w-full bg-black rounded-md flex items-center justify-center h-10", submitTitleClassName = "text-white", containerClassName = "flex px-[10%] md:px-[25%] flex-row items-center justify-center  w-full  h-[18rem] overflow-hidden relative", slides, loading, } = props;
    const SELECTED = value;
    const valueRef = (0, react_1.useRef)(SELECTED || { id: 0, title: "" });
    const _onValueChange = (value) => {
        valueRef.current = value;
    };
    const _onSubmit = () => {
        setValue(valueRef === null || valueRef === void 0 ? void 0 : valueRef.current);
        if (!!submitCallback) {
            submitCallback();
        }
    };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { className: `embla-parent_picker ${containerClassName}` },
            react_1.default.createElement("div", { className: "top-gradient" }),
            react_1.default.createElement("div", { className: "bottom-gradient" }),
            react_1.default.createElement(WheelPicker_1.default, { perspective: "center", defaultValue: valueRef.current, useTransform: useTransform, slides: slides, onSelect: (value) => _onValueChange(value) })),
        react_1.default.createElement("button", { className: `${buttonClassName} relative ${loading ? "opacity-50" : ""} `, onClick: _onSubmit, disabled: !!loading },
            react_1.default.createElement("p", { className: submitTitleClassName }, submitTitle),
            !!loading && (react_1.default.createElement("div", { className: "absolute inset-0 flex items-center justify-center" },
                react_1.default.createElement("div", { className: "loader_picker" }))))));
};
exports.default = CustomPicker;
