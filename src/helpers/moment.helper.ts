import moment from "moment";
import { default as momentHijri } from "moment-hijri";
import { default as momentJalaali } from "moment-jalaali";
import { CalendarType } from "../types/DatePicker.types";

export const findDefaultMinAndMaxYear = (type?: CalendarType) => {
  switch (true) {
    case type == "georgian":
      return { minYear: moment(new Date()).year() - 100, maxYear: moment(new Date()).year() };
    case type == "hijri":
      return { minYear: momentHijri(new Date()).iYear() - 100, maxYear: momentHijri(new Date()).iYear() };
    case type == "jalaali":
      return { minYear: momentJalaali(new Date()).jYear() - 100, maxYear: momentJalaali(new Date()).jYear() };
    default:
      return { minYear: moment(new Date()).year() - 100, maxYear: moment(new Date()).year() };
  }
};

export const formatDefaultDate = (
  YEARS: { id: number; title: number }[],
  MONTHS: { id: number; title: string }[],
  type?: CalendarType
) => {
  const GEORGIAN_NOW = moment(new Date());
  const JALAALI_NOW = momentJalaali(new Date());
  const HIJRI_NOW = momentHijri(new Date());
  switch (true) {
    case type == "georgian":
      return {
        year: YEARS.find((i) => i?.id == Number(GEORGIAN_NOW.year())) || YEARS?.[0],
        month: MONTHS.find((i) => i?.id == Number(GEORGIAN_NOW.month() + 1)) || MONTHS?.[0],
        day: { id: GEORGIAN_NOW.date(), title: GEORGIAN_NOW.date() },
      };
    case type == "hijri":
      return {
        year: YEARS.find((i) => i?.id == Number(HIJRI_NOW.iYear())) || YEARS?.[0],
        month: MONTHS.find((i) => i?.id == Number(HIJRI_NOW.iMonth() + 1)) || MONTHS?.[0],
        day: { id: HIJRI_NOW.iDate(), title: HIJRI_NOW.iDate() },
      };
    case type == "jalaali":
      return {
        year: YEARS.find((i) => i?.id == Number(JALAALI_NOW.jYear())) || YEARS?.[0],
        month: MONTHS.find((i) => i?.id == Number(JALAALI_NOW.jMonth() + 1)) || MONTHS?.[0],
        day: { id: JALAALI_NOW.jDate(), title: JALAALI_NOW.jDate() },
      };
    default:
      return {
        year: YEARS.find((i) => i?.id == Number(GEORGIAN_NOW.year())) || YEARS?.[0],
        month: MONTHS.find((i) => i?.id == Number(GEORGIAN_NOW.month() + 1)) || MONTHS?.[0],
        day: { id: GEORGIAN_NOW.date(), title: GEORGIAN_NOW.date() },
      };
  }
};

export const findDefaultDay = (type?: CalendarType) => {
  switch (true) {
    case type == "georgian":
      return { id: moment(new Date()).date(), title: moment(new Date()).date() };
    case type == "hijri":
      return { id: momentHijri(new Date()).iDate(), title: momentHijri(new Date()).iDate() };
    case type == "jalaali":
      return { id: momentJalaali(new Date()).jDate(), title: momentJalaali(new Date()).jDate() };
    default:
      return { id: moment(new Date()).date(), title: moment(new Date()).date() };
  }
};
