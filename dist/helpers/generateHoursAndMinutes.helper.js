"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHoursAndMinutes = void 0;
const generateHoursAndMinutes = (is24Hours) => {
    const HOURS = Array.from({ length: is24Hours ? 24 : 12 }, (_, i) => {
        var _a;
        return ({
            id: is24Hours ? i : i + 1,
            title: is24Hours ? (i < 10 ? `0${i}` : `${i}`) : (_a = (i + 1)) === null || _a === void 0 ? void 0 : _a.toString(),
        });
    });
    const MINUTES = Array.from({ length: 60 }, (_, i) => ({ id: i, title: i < 10 ? `0${i}` : `${i}` }));
    return {
        HOURS,
        MINUTES,
        MERIDIEMS: [
            { id: 0, title: "AM" },
            { id: 1, title: "PM" },
        ],
    };
};
exports.generateHoursAndMinutes = generateHoursAndMinutes;
