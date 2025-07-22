export const generateYears = (minYear: number, maxYear: number) => {
  return Array.from({ length: maxYear - minYear + 1 }, (_, i) => ({ id: i + minYear, title: i + minYear }));
};
