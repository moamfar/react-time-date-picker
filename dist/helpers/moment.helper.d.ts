import { ToasterProps } from "sonner";
import { CalendarType, DatePickerSelectedDate } from "../types/DatePicker.types";
export declare const findDefaultMinAndMaxYear: (type?: CalendarType) => {
    minYear: number;
    maxYear: number;
};
export declare const checkMinAndMaxDate: ({ selectedDate, type, minDate, maxDate, minDateError, maxDateError, sonnerOptions, }: {
    selectedDate: DatePickerSelectedDate;
    type: CalendarType;
    minDate?: any;
    maxDate?: any;
    minDateError?: string;
    maxDateError?: string;
    sonnerOptions?: ToasterProps;
}) => boolean;
export declare const formatDefaultDate: (YEARS: {
    id: number;
    title: number;
}[], MONTHS: {
    id: number;
    title: string;
}[], type?: CalendarType) => {
    year: {
        id: number;
        title: number;
    };
    month: {
        id: number;
        title: string;
    };
    day: {
        id: number;
        title: number;
    };
};
export declare const findDefaultDay: (type?: CalendarType) => {
    id: number;
    title: number;
};
