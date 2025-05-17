import moment from "moment-jalaali";
import React, { FC, Fragment, useRef } from "react";
import { generateHoursAndMinutes } from "../../helpers/generateHoursAndMinutes.helper";
import { TimePickerProps, TimePickerValueType } from "../../types/TimePicker.types";
import WheelPicker from "../WheelPicker/WheelPicker";

const TimePicker: FC<TimePickerProps> = ({ ...props }) => {
  const {
    setSelectedTime,
    selectedTime,
    submitCallback,
    submitTitle = "ثبت",
    buttonClassName = "w-full bg-black rounded-md flex items-center justify-center h-10",
    submitTitleClassName = "text-white",
    containerClassName = "flex px-[10%] md:px-[25%] flex-row items-center justify-center  w-full  h-[18rem] overflow-hidden relative",
  } = props;
  const NOW = moment(new Date());
  const { HOURS, MINUTES } = generateHoursAndMinutes();
  const SELECTED: TimePickerValueType = selectedTime
    ? {
        hour: HOURS.find((i) => i?.title == selectedTime?.hour),
        minute: MINUTES.find((i) => i?.title == selectedTime?.minute),
      }
    : {
        hour: HOURS.find((i) => i?.title == NOW.hour()?.toString()),
        minute: MINUTES.find((i) => i?.title == NOW.minute()?.toString()),
      };
  const valueRef = useRef<TimePickerValueType>(SELECTED);

  const _onValueChange = (refValue: "hour" | "minute", value: { id: number; title: string | number }) => {
    valueRef.current = { ...valueRef.current, [`${refValue}`]: value };
  };
  const _onSubmit = () => {
    setSelectedTime({ hour: valueRef?.current?.hour?.title || "", minute: valueRef?.current?.minute?.title || "" });

    if (!!submitCallback) {
      submitCallback();
    }
  };
  return (
    <Fragment>
      <div className={containerClassName}>
        <WheelPicker
          perspective="left"
          defaultValue={valueRef.current.minute}
          slides={MINUTES}
          onSelect={(value) => _onValueChange("minute", value)}
        />
        <WheelPicker
          perspective="right"
          defaultValue={valueRef.current.hour}
          slides={HOURS}
          onSelect={(value) => _onValueChange("hour", value)}
        />
      </div>
      <button className={buttonClassName} onClick={_onSubmit}>
        <p className={submitTitleClassName}>{submitTitle}</p>
      </button>
    </Fragment>
  );
};

export default TimePicker;
