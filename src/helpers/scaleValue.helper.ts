export function scale(number: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
