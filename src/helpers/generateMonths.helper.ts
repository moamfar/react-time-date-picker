import { CalendarType } from "../types/DatePicker.types";
import { HIJRI_MONTHS, JALAALI_MONTHS, MONTHS } from "../utils/months.util";

export const generateMonths = (type: CalendarType) => {
  switch (true) {
    case type == "georgian":
      return MONTHS;
    case type == "hijri":
      return HIJRI_MONTHS;
    case type == "jalaali":
      return JALAALI_MONTHS;
    default:
      return MONTHS;
  }
};
