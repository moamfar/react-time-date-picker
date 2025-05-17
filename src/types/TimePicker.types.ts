export type TimePickerSelectedType = { hour?: string; minute?: string };
export type TimePickerValueType = {
  hour?: { id: number; title: string };
  minute?: { id: number; title: string };
};
export type TimePickerProps = {
  setSelectedTime: (a?: TimePickerSelectedType) => void;
  selectedTime?: TimePickerSelectedType;
  submitCallback?: () => void;
  submitTitle?: string;
  submitTitleClassName?: string;
  buttonClassName?: string;
  containerClassName?: string;
};
