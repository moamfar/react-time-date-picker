"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateYears = void 0;
const generateYears = (minYear, maxYear) => {
    return Array.from({ length: maxYear - minYear }, (_, i) => ({ id: i + 1 + minYear, title: i + 1 + minYear }));
};
exports.generateYears = generateYears;
