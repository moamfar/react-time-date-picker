export const generateYears = (minYear: number, maxYear: number) => {
  return Array.from({ length: maxYear - minYear }, (_, i) => ({ id: i + 1 + minYear, title: i + 1 + minYear }));
};
