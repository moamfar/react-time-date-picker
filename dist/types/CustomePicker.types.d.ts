export type CustomePickerValueType = {
    id: number;
    title: string | number;
};
export type CustomePickerProps = {
    setValue: (a?: CustomePickerValueType) => void;
    value?: CustomePickerValueType;
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
