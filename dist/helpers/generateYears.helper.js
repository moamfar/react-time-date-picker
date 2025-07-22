"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateYears = void 0;
const generateYears = (minYear, maxYear) => {
    return Array.from({ length: maxYear - minYear + 1 }, (_, i) => ({ id: i + minYear, title: i + minYear }));
};
exports.generateYears = generateYears;
