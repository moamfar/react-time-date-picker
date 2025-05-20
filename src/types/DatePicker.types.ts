export type DatePickerSelectedDate = { day: number | string; month: number | string; year: number | string };
export type DatePickerSelectedValue = {
  month: { id: number; title: string | number };
  day: { id: number; title: string | number };
  year: { id: number; title: string | number };
};
export type CalendarType = "jalaali" | "georgian" | "hijri";
export type DatePickerProps = {
  setSelectedDate: (a?: DatePickerSelectedDate) => void;
  selectedDate?: DatePickerSelectedDate;
  type?: CalendarType;
  useTransform?: boolean;
  minYear?: number;
  maxYear?: number;
  columnsOrder?: ("month" | "day" | "year")[];
  submitCallback?: () => void;
  submitTitle?: string;
  submitTitleClassName?: string;
  buttonClassName?: string;
  containerClassName?: string;
};
