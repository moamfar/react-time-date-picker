import { FC } from "react";
declare const WheelPicker: FC<{
    perspective: "left" | "center" | "right";
    hasDynamicValue?: boolean;
    defaultValue?: {
        id: number;
        title: string | number;
    };
    slides: {
        id: number;
        title: string | number;
    }[];
    onSelect: (a: {
        id: number;
        title: string | number;
    }) => void;
}>;
export default WheelPicker;
