"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDays = void 0;
const moment_1 = __importDefault(require("moment"));
const moment_hijri_1 = __importDefault(require("moment-hijri"));
const moment_jalaali_1 = __importDefault(require("moment-jalaali"));
const generateDays = (month, year, type) => {
    let DAYS_IN_MONTH;
    switch (true) {
        case type == "georgian":
            DAYS_IN_MONTH = (0, moment_1.default)(`${year}-${month}`, "YYYY-MMMM").daysInMonth();
            break;
        case type == "jalaali":
            DAYS_IN_MONTH = moment_jalaali_1.default.jDaysInMonth(year, month - 1);
            break;
        case type == "hijri":
            DAYS_IN_MONTH = moment_hijri_1.default.iDaysInMonth(year, month - 1);
            break;
        default:
            DAYS_IN_MONTH = (0, moment_1.default)(`${year}-${month}`, "YYYY-MMMM").daysInMonth();
            break;
    }
    return Array.from({ length: DAYS_IN_MONTH }, (_, i) => ({ id: i + 1, title: i + 1 }));
};
exports.generateDays = generateDays;
