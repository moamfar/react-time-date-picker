export const generateHoursAndMinutes = (is24Hours: boolean) => {
  const HOURS = Array.from({ length: is24Hours ? 24 : 12 }, (_, i) => ({
    id: is24Hours ? i : i + 1,
    title: is24Hours ? (i < 10 ? `0${i}` : `${i}`) : (i + 1)?.toString(),
  }));
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
