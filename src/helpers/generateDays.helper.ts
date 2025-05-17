import moment from "moment";
import { default as momentHijri } from "moment-hijri";
import { default as momentJalaali } from "moment-jalaali";
import { CalendarType } from "../types/DatePicker.types";

export const generateDays = (month: number, year: number, type?: CalendarType) => {
  let DAYS_IN_MONTH;
  switch (true) {
    case type == "georgian":
      DAYS_IN_MONTH = moment(`${year}-${month}`, "YYYY-MMMM").daysInMonth();
      break;
    case type == "jalaali":
      DAYS_IN_MONTH = momentJalaali.jDaysInMonth(year, month - 1);
      break;
    case type == "hijri":
      DAYS_IN_MONTH = momentHijri.iDaysInMonth(year, month - 1);
      break;

    default:
      DAYS_IN_MONTH = moment(`${year}-${month}`, "YYYY-MMMM").daysInMonth();
      break;
  }

  return Array.from({ length: DAYS_IN_MONTH }, (_, i) => ({ id: i + 1, title: i + 1 }));
};
