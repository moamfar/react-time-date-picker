"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDefaultDay = exports.formatDefaultDate = exports.checkMinAndMaxDate = exports.findDefaultMinAndMaxYear = void 0;
const moment_1 = __importDefault(require("moment"));
const moment_hijri_1 = __importDefault(require("moment-hijri"));
const moment_jalaali_1 = __importDefault(require("moment-jalaali"));
const sonner_1 = require("sonner");
const findDefaultMinAndMaxYear = (type) => {
    switch (true) {
        case type == "georgian":
            return { minYear: (0, moment_1.default)(new Date()).year() - 100, maxYear: (0, moment_1.default)(new Date()).year() };
        case type == "hijri":
            return { minYear: (0, moment_hijri_1.default)(new Date()).iYear() - 100, maxYear: (0, moment_hijri_1.default)(new Date()).iYear() };
        case type == "jalaali":
            return { minYear: (0, moment_jalaali_1.default)(new Date()).jYear() - 100, maxYear: (0, moment_jalaali_1.default)(new Date()).jYear() };
        default:
            return { minYear: (0, moment_1.default)(new Date()).year() - 100, maxYear: (0, moment_1.default)(new Date()).year() };
    }
};
exports.findDefaultMinAndMaxYear = findDefaultMinAndMaxYear;
const checkMinAndMaxDate = ({ selectedDate, type, minDate, maxDate, minDateError, maxDateError, sonnerOptions, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    let isValid = true;
    switch (true) {
        case type == "georgian": {
            if (!!minDate &&
                ((_b = (_a = (0, moment_1.default)(`${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.day}/${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.month}/${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.year}`, "DD/MM/YYYY")) === null || _a === void 0 ? void 0 : _a.startOf("day")) === null || _b === void 0 ? void 0 : _b.isBefore((_c = (0, moment_1.default)(minDate, "X")) === null || _c === void 0 ? void 0 : _c.startOf("day"), "day"))) {
                (0, sonner_1.toast)(minDateError, sonnerOptions);
                isValid = false;
            }
            else if (!!maxDate &&
                ((_e = (_d = (0, moment_1.default)(`${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.day}/${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.month}/${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.year}`, "DD/MM/YYYY")) === null || _d === void 0 ? void 0 : _d.endOf("day")) === null || _e === void 0 ? void 0 : _e.isAfter((_f = (0, moment_1.default)(maxDate, "X")) === null || _f === void 0 ? void 0 : _f.endOf("day"), "day"))) {
                (0, sonner_1.toast)(maxDateError, sonnerOptions);
                isValid = false;
            }
            else {
                isValid = true;
            }
        }
        case type == "hijri": {
            if (!!minDate &&
                ((_h = (_g = (0, moment_hijri_1.default)(`${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.day}/${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.month}/${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.year}`, "iDD/iMM/iYYYY")) === null || _g === void 0 ? void 0 : _g.startOf("day")) === null || _h === void 0 ? void 0 : _h.isBefore((_j = (0, moment_hijri_1.default)(minDate, "X")) === null || _j === void 0 ? void 0 : _j.startOf("day"), "day"))) {
                (0, sonner_1.toast)(minDateError, sonnerOptions);
                isValid = false;
            }
            else if (!!maxDate &&
                ((_l = (_k = (0, moment_hijri_1.default)(`${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.day}/${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.month}/${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.year}`, "iDD/iMM/iYYYY")) === null || _k === void 0 ? void 0 : _k.endOf("day")) === null || _l === void 0 ? void 0 : _l.isAfter((_m = (0, moment_hijri_1.default)(maxDate, "X")) === null || _m === void 0 ? void 0 : _m.endOf("day"), "day"))) {
                (0, sonner_1.toast)(maxDateError, sonnerOptions);
                isValid = false;
            }
            else {
                isValid = true;
            }
        }
        case type == "jalaali": {
            if (!!minDate &&
                ((_p = (_o = (0, moment_jalaali_1.default)(`${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.day}/${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.month}/${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.year}`, "jDD/jMM/jYYYY")) === null || _o === void 0 ? void 0 : _o.startOf("day")) === null || _p === void 0 ? void 0 : _p.isBefore((_q = (0, moment_jalaali_1.default)(minDate, "X")) === null || _q === void 0 ? void 0 : _q.startOf("day"), "day"))) {
                (0, sonner_1.toast)(minDateError, sonnerOptions);
                isValid = false;
            }
            else if (!!maxDate &&
                ((_s = (_r = (0, moment_jalaali_1.default)(`${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.day}/${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.month}/${selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.year}`, "jDD/jMM/jYYYY")) === null || _r === void 0 ? void 0 : _r.endOf("day")) === null || _s === void 0 ? void 0 : _s.isAfter((_t = (0, moment_jalaali_1.default)(maxDate, "X")) === null || _t === void 0 ? void 0 : _t.endOf("day"), "day"))) {
                (0, sonner_1.toast)(maxDateError, sonnerOptions);
                isValid = false;
            }
            else {
                isValid = true;
            }
        }
    }
    return isValid;
};
exports.checkMinAndMaxDate = checkMinAndMaxDate;
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
