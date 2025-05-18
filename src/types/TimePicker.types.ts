export type TimePickerSelectedType = { hour?: string; minute?: string; meridiem?: string };
export type TimePickerValueType = {
  hour?: { id: number; title: string };
  minute?: { id: number; title: string };
  meridiem?: { id: number; title: string };
};
export type TimePickerProps = {
  setSelectedTime: (a?: TimePickerSelectedType) => void;
  selectedTime?: TimePickerSelectedType;
  submitCallback?: () => void;
  submitTitle?: string;
  is24Hours?: boolean;
  utcOffset?: string | number;
  submitTitleClassName?: string;
  buttonClassName?: string;
  containerClassName?: string;
};
