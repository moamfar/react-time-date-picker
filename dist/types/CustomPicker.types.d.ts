export type CustomPickerValueType = {
    id: number;
    title: string | number;
};
export type CustomPickerProps = {
    setValue: (a?: CustomPickerValueType) => void;
    value?: CustomPickerValueType;
    loading?: boolean;
    submitCallback?: () => void;
    submitTitle?: string;
    useTransform?: boolean;
    submitTitleClassName?: string;
    buttonClassName?: string;
    containerClassName?: string;
    slides: {
        id: number;
        title: string | number;
    }[];
};
