"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMonths = void 0;
const months_util_1 = require("../utils/months.util");
const generateMonths = (type) => {
    switch (true) {
        case type == "georgian":
            return months_util_1.MONTHS;
        case type == "hijri":
            return months_util_1.HIJRI_MONTHS;
        case type == "jalaali":
            return months_util_1.JALAALI_MONTHS;
        default:
            return months_util_1.MONTHS;
    }
};
exports.generateMonths = generateMonths;
