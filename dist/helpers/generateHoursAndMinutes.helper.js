"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHoursAndMinutes = void 0;
const generateHoursAndMinutes = () => {
    const HOURS = Array.from({ length: 24 }, (_, i) => ({ id: i + 1, title: i < 10 ? `0${i}` : `${i}` }));
    const MINUTES = Array.from({ length: 60 }, (_, i) => ({ id: i, title: i < 10 ? `0${i}` : `${i}` }));
    return { HOURS, MINUTES };
};
exports.generateHoursAndMinutes = generateHoursAndMinutes;
