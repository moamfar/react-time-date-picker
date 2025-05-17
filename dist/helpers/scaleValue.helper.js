"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scale = scale;
function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
