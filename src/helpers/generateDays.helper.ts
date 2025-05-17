import moment from "moment";
import { default as momentJalaali } from "moment-jalaali";
export const generateDaysJalaali = (month: number, year: number) => {
  const DAYS_IN_MONTH = momentJalaali.jDaysInMonth(year, month - 1);

  return Array.from({ length: DAYS_IN_MONTH }, (_, i) => ({ id: i + 1, title: i + 1 }));
};
export const generateDays = (month: number, year: number) => {
  const DAYS_IN_MONTH = moment(`${year}-${month}`, "YYYY-MMMM").daysInMonth();

  return Array.from({ length: DAYS_IN_MONTH }, (_, i) => ({ id: i + 1, title: i + 1 }));
};
