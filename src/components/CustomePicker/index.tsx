import moment from "moment";
import React, { FC, Fragment, useRef } from "react";
import WheelPicker from "../WheelPicker/WheelPicker";
import { CustomePickerProps, CustomePickerValueType } from "../../types/CustomePicker.types";
moment.locale("en");

const CustomePicker: FC<CustomePickerProps> = ({ ...props }) => {
  const {
    setValue,
    value,
    useTransform = true,
    submitCallback,
    submitTitle = "ثبت",
    buttonClassName = "w-full bg-black rounded-md flex items-center justify-center h-10",
    submitTitleClassName = "text-white",
    containerClassName = "flex px-[10%] md:px-[25%] flex-row items-center justify-center  w-full  h-[18rem] overflow-hidden relative",
    slides,
  } = props;

  const SELECTED = value;

  const valueRef = useRef<CustomePickerValueType>(SELECTED || { id: 0, title: "" });

  const _onValueChange = (value: { id: number; title: string | number }) => {
    valueRef.current = value;
  };
  const _onSubmit = () => {
    setValue(valueRef?.current);

    if (!!submitCallback) {
      submitCallback();
    }
  };
  return (
    <Fragment>
      <div className={`embla-parent ${containerClassName}`}>
        <div className="top-gradient" />
        <div className="bottom-gradient" />

        <WheelPicker
          perspective={"center"}
          defaultValue={valueRef.current}
          useTransform={useTransform}
          slides={slides}
          onSelect={(value) => _onValueChange(value)}
        />
      </div>
      <button className={buttonClassName} onClick={_onSubmit}>
        <p className={submitTitleClassName}>{submitTitle}</p>
      </button>
    </Fragment>
  );
};

export default CustomePicker;
