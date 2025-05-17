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
const moment_jalaali_1 = __importDefault(require("moment-jalaali"));
const react_1 = __importStar(require("react"));
const generateHoursAndMinutes_helper_1 = require("../../helpers/generateHoursAndMinutes.helper");
const WheelPicker_1 = __importDefault(require("../WheelPicker/WheelPicker"));
const TimePicker = (_a) => {
    var props = __rest(_a, []);
    const { setSelectedTime, selectedTime, submitCallback, submitTitle = "ثبت", buttonClassName = "w-full bg-black rounded-md flex items-center justify-center h-10", submitTitleClassName = "text-white", containerClassName = "flex px-[10%] md:px-[25%] flex-row items-center justify-center  w-full  h-[18rem] overflow-hidden relative", } = props;
    const NOW = (0, moment_jalaali_1.default)(new Date());
    const { HOURS, MINUTES } = (0, generateHoursAndMinutes_helper_1.generateHoursAndMinutes)();
    const SELECTED = selectedTime
        ? {
            hour: HOURS.find((i) => (i === null || i === void 0 ? void 0 : i.title) == (selectedTime === null || selectedTime === void 0 ? void 0 : selectedTime.hour)),
            minute: MINUTES.find((i) => (i === null || i === void 0 ? void 0 : i.title) == (selectedTime === null || selectedTime === void 0 ? void 0 : selectedTime.minute)),
        }
        : {
            hour: HOURS.find((i) => { var _a; return (i === null || i === void 0 ? void 0 : i.title) == ((_a = NOW.hour()) === null || _a === void 0 ? void 0 : _a.toString()); }),
            minute: MINUTES.find((i) => { var _a; return (i === null || i === void 0 ? void 0 : i.title) == ((_a = NOW.minute()) === null || _a === void 0 ? void 0 : _a.toString()); }),
        };
    const valueRef = (0, react_1.useRef)(SELECTED);
    const _onValueChange = (refValue, value) => {
        valueRef.current = Object.assign(Object.assign({}, valueRef.current), { [`${refValue}`]: value });
    };
    const _onSubmit = () => {
        var _a, _b, _c, _d;
        setSelectedTime({ hour: ((_b = (_a = valueRef === null || valueRef === void 0 ? void 0 : valueRef.current) === null || _a === void 0 ? void 0 : _a.hour) === null || _b === void 0 ? void 0 : _b.title) || "", minute: ((_d = (_c = valueRef === null || valueRef === void 0 ? void 0 : valueRef.current) === null || _c === void 0 ? void 0 : _c.minute) === null || _d === void 0 ? void 0 : _d.title) || "" });
        if (!!submitCallback) {
            submitCallback();
        }
    };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { className: containerClassName },
            react_1.default.createElement(WheelPicker_1.default, { perspective: "left", defaultValue: valueRef.current.minute, slides: MINUTES, onSelect: (value) => _onValueChange("minute", value) }),
            react_1.default.createElement(WheelPicker_1.default, { perspective: "right", defaultValue: valueRef.current.hour, slides: HOURS, onSelect: (value) => _onValueChange("hour", value) })),
        react_1.default.createElement("button", { className: buttonClassName, onClick: _onSubmit },
            react_1.default.createElement("p", { className: submitTitleClassName }, submitTitle))));
};
exports.default = TimePicker;
