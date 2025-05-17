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
const react_1 = __importStar(require("react"));
const generateDays_helper_1 = require("../../helpers/generateDays.helper");
const generateMonths_helper_1 = require("../../helpers/generateMonths.helper");
const generateYears_helper_1 = require("../../helpers/generateYears.helper");
const moment_helper_1 = require("../../helpers/moment.helper");
const WheelPicker_1 = __importDefault(require("../WheelPicker/WheelPicker"));
const DatePicker = (_a) => {
    var _b, _c, _d, _e;
    var props = __rest(_a, []);
    const DEFAULT_MIN_MAX_YEAR = (0, moment_helper_1.findDefaultMinAndMaxYear)(props === null || props === void 0 ? void 0 : props.type);
    const { selectedDate, setSelectedDate, columnsOrder = ["day", "month", "year"], maxYear = DEFAULT_MIN_MAX_YEAR.maxYear, minYear = DEFAULT_MIN_MAX_YEAR.minYear, submitCallback, type = "georgian", submitTitle = "Submit", buttonClassName = "w-full bg-black rounded-md flex items-center justify-center h-10", submitTitleClassName = "text-white", containerClassName = "flex flex-row items-center justify-between  w-full px-4 h-[18rem] overflow-hidden relative", } = props;
    const YEARS = (0, react_1.useMemo)(() => (0, generateYears_helper_1.generateYears)(minYear, maxYear), [minYear, maxYear]);
    const MONTHS = (0, generateMonths_helper_1.generateMonths)(type);
    const formatSelectedDate = (selectedDate) => {
        return {
            year: YEARS.find((i) => (i === null || i === void 0 ? void 0 : i.id) == Number(selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.year)) || (YEARS === null || YEARS === void 0 ? void 0 : YEARS[0]),
            month: MONTHS.find((i) => (i === null || i === void 0 ? void 0 : i.id) == Number(selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.month)) || (MONTHS === null || MONTHS === void 0 ? void 0 : MONTHS[0]),
            day: { id: Number(selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.day), title: selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.day },
        };
    };
    const SELECTED = !!selectedDate
        ? formatSelectedDate(selectedDate)
        : (0, moment_helper_1.formatDefaultDate)(YEARS, MONTHS, type);
    const valueRef = (0, react_1.useRef)(SELECTED);
    const [days_array, set_days_array] = (0, react_1.useState)((0, generateDays_helper_1.generateDays)(Number(((_b = SELECTED === null || SELECTED === void 0 ? void 0 : SELECTED.month) === null || _b === void 0 ? void 0 : _b.id) || ((_c = valueRef.current.month) === null || _c === void 0 ? void 0 : _c.id)), Number(((_d = SELECTED === null || SELECTED === void 0 ? void 0 : SELECTED.year) === null || _d === void 0 ? void 0 : _d.id) || ((_e = valueRef.current.year) === null || _e === void 0 ? void 0 : _e.id)), type));
    const _onValueChange = (refValue, value) => {
        var _a, _b;
        valueRef.current = Object.assign(Object.assign({}, valueRef.current), { [`${refValue}`]: value });
        if (refValue == "month" || refValue == "year") {
            const TEMP = (0, generateDays_helper_1.generateDays)(Number((_a = valueRef.current.month) === null || _a === void 0 ? void 0 : _a.id), Number((_b = valueRef.current.year) === null || _b === void 0 ? void 0 : _b.id), type);
            set_days_array((days) => {
                if (days.length !== TEMP.length)
                    return TEMP;
                return days;
            });
        }
    };
    const _onSubmit = () => {
        var _a, _b, _c, _d, _e, _f;
        setSelectedDate({
            day: (_b = (_a = valueRef === null || valueRef === void 0 ? void 0 : valueRef.current) === null || _a === void 0 ? void 0 : _a.day) === null || _b === void 0 ? void 0 : _b.id,
            month: (_d = (_c = valueRef === null || valueRef === void 0 ? void 0 : valueRef.current) === null || _c === void 0 ? void 0 : _c.month) === null || _d === void 0 ? void 0 : _d.id,
            year: (_f = (_e = valueRef === null || valueRef === void 0 ? void 0 : valueRef.current) === null || _e === void 0 ? void 0 : _e.year) === null || _f === void 0 ? void 0 : _f.id,
        });
        if (!!submitCallback) {
            submitCallback();
        }
    };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { className: containerClassName }, columnsOrder === null || columnsOrder === void 0 ? void 0 : columnsOrder.map((item, index) => (react_1.default.createElement(WheelPicker_1.default, { perspective: index == 0 ? "left" : index == 1 ? "center" : "right", defaultValue: item == "day" ? valueRef.current.day : item == "month" ? valueRef.current.month : valueRef.current.year, slides: item == "day" ? days_array : item == "month" ? MONTHS : YEARS, hasDynamicValue: item == "day", onSelect: (value) => _onValueChange(item, value) })))),
        react_1.default.createElement("button", { className: buttonClassName, onClick: _onSubmit },
            react_1.default.createElement("p", { className: submitTitleClassName }, submitTitle))));
};
exports.default = DatePicker;
