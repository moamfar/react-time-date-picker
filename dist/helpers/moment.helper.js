"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDefaultDay = exports.formatDefaultDate = exports.findDefaultMinAndMaxYear = void 0;
const moment_1 = __importDefault(require("moment"));
const moment_hijri_1 = __importDefault(require("moment-hijri"));
const moment_jalaali_1 = __importDefault(require("moment-jalaali"));
const findDefaultMinAndMaxYear = (type) => {
    switch (true) {
        case type == "georgian":
            return { minYear: (0, moment_1.default)(new Date()).year() - 100, maxYear: (0, moment_1.default)(new Date()).year() };
        case type == "hijri":
            return { minYear: (0, moment_hijri_1.default)(new Date()).iYear() - 100, maxYear: (0, moment_hijri_1.default)(new Date()).iYear() };
        case type == "jalaali":
            return { minYear: (0, moment_jalaali_1.default)(new Date()).iYear() - 100, maxYear: (0, moment_jalaali_1.default)(new Date()).iYear() };
        default:
            return { minYear: (0, moment_1.default)(new Date()).year() - 100, maxYear: (0, moment_1.default)(new Date()).year() };
    }
};
exports.findDefaultMinAndMaxYear = findDefaultMinAndMaxYear;
const formatDefaultDate = (YEARS, MONTHS, type) => {
    const GEORGIAN_NOW = (0, moment_1.default)(new Date());
    const JALAALI_NOW = (0, moment_jalaali_1.default)(new Date());
    const HIJRI_NOW = (0, moment_hijri_1.default)(new Date());
    switch (true) {
        case type == "georgian":
            return {
                year: YEARS.find((i) => (i === null || i === void 0 ? void 0 : i.id) == Number(GEORGIAN_NOW.year())) || (YEARS === null || YEARS === void 0 ? void 0 : YEARS[0]),
                month: MONTHS.find((i) => (i === null || i === void 0 ? void 0 : i.id) == Number(GEORGIAN_NOW.month() + 1)) || (MONTHS === null || MONTHS === void 0 ? void 0 : MONTHS[0]),
                day: { id: GEORGIAN_NOW.date(), title: GEORGIAN_NOW.date() },
            };
        case type == "hijri":
            return {
                year: YEARS.find((i) => (i === null || i === void 0 ? void 0 : i.id) == Number(HIJRI_NOW.iYear())) || (YEARS === null || YEARS === void 0 ? void 0 : YEARS[0]),
                month: MONTHS.find((i) => (i === null || i === void 0 ? void 0 : i.id) == Number(HIJRI_NOW.iMonth() + 1)) || (MONTHS === null || MONTHS === void 0 ? void 0 : MONTHS[0]),
                day: { id: HIJRI_NOW.iDate(), title: HIJRI_NOW.iDate() },
            };
        case type == "jalaali":
            return {
                year: YEARS.find((i) => (i === null || i === void 0 ? void 0 : i.id) == Number(JALAALI_NOW.jYear())) || (YEARS === null || YEARS === void 0 ? void 0 : YEARS[0]),
                month: MONTHS.find((i) => (i === null || i === void 0 ? void 0 : i.id) == Number(JALAALI_NOW.jMonth() + 1)) || (MONTHS === null || MONTHS === void 0 ? void 0 : MONTHS[0]),
                day: { id: JALAALI_NOW.jDate(), title: JALAALI_NOW.jDate() },
            };
        default:
            return {
                year: YEARS.find((i) => (i === null || i === void 0 ? void 0 : i.id) == Number(GEORGIAN_NOW.year())) || (YEARS === null || YEARS === void 0 ? void 0 : YEARS[0]),
                month: MONTHS.find((i) => (i === null || i === void 0 ? void 0 : i.id) == Number(GEORGIAN_NOW.month() + 1)) || (MONTHS === null || MONTHS === void 0 ? void 0 : MONTHS[0]),
                day: { id: GEORGIAN_NOW.date(), title: GEORGIAN_NOW.date() },
            };
    }
};
exports.formatDefaultDate = formatDefaultDate;
const findDefaultDay = (type) => {
    switch (true) {
        case type == "georgian":
            return { id: (0, moment_1.default)(new Date()).date(), title: (0, moment_1.default)(new Date()).date() };
        case type == "hijri":
            return { id: (0, moment_hijri_1.default)(new Date()).iDate(), title: (0, moment_hijri_1.default)(new Date()).iDate() };
        case type == "jalaali":
            return { id: (0, moment_jalaali_1.default)(new Date()).jDate(), title: (0, moment_jalaali_1.default)(new Date()).jDate() };
        default:
            return { id: (0, moment_1.default)(new Date()).date(), title: (0, moment_1.default)(new Date()).date() };
    }
};
exports.findDefaultDay = findDefaultDay;
