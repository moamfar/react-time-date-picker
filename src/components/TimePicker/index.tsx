import moment from "moment";
import React, { FC, Fragment, useRef } from "react";
import { generateHoursAndMinutes } from "../../helpers/generateHoursAndMinutes.helper";
import { TimePickerProps, TimePickerValueType } from "../../types/TimePicker.types";
import WheelPicker from "../WheelPicker/WheelPicker";
moment.locale("en");

const TimePicker: FC<TimePickerProps> = ({ ...props }) => {
  const {
    setSelectedTime,
    selectedTime,
    useTransform = true,
    utcOffset = 210,
    submitCallback,
    is24Hours = false,
    submitTitle = "ثبت",
    buttonClassName = "w-full bg-black rounded-md flex items-center justify-center h-10",
    submitTitleClassName = "text-white",
    containerClassName = "flex px-[10%] md:px-[25%] flex-row items-center justify-center  w-full  h-[18rem] overflow-hidden relative",
  } = props;
  const NOW = moment(new Date()).utcOffset(utcOffset);
  const { HOURS, MINUTES, MERIDIEMS } = generateHoursAndMinutes(is24Hours);

  const SELECTED: TimePickerValueType = selectedTime
    ? {
        hour: HOURS.find((i) => i?.title == selectedTime?.hour),
        minute: MINUTES.find((i) => i?.title == selectedTime?.minute),
        meridiem: MERIDIEMS.find((i) => i?.title == selectedTime?.meridiem),
      }
    : {
        hour: HOURS.find((i) => i?.id == Number(NOW.format(is24Hours ? "H" : "h"))),
        minute: MINUTES.find((i) => i?.id == NOW.minute()),
        meridiem: MERIDIEMS.find((i) => i?.title == NOW.format("A")),
      };
  const valueRef = useRef<TimePickerValueType>(SELECTED);

  const _onValueChange = (refValue: "hour" | "minute" | "meridiem", value: { id: number; title: string | number }) => {
    valueRef.current = { ...valueRef.current, [`${refValue}`]: value };
  };
  const _onSubmit = () => {
    if (is24Hours) {
      setSelectedTime({ hour: valueRef?.current?.hour?.title || "", minute: valueRef?.current?.minute?.title || "" });
    } else {
      setSelectedTime({
        hour: valueRef?.current?.hour?.title || "",
        minute: valueRef?.current?.minute?.title || "",
        meridiem: valueRef?.current?.meridiem?.title || "",
      });
    }

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
          perspective="left"
          defaultValue={valueRef.current.minute}
          slides={MINUTES}
          useTransform={useTransform}
          onSelect={(value) => _onValueChange("minute", value)}
        />
        <WheelPicker
          perspective={is24Hours ? "right" : "center"}
          defaultValue={valueRef.current.hour}
          useTransform={useTransform}
          slides={HOURS}
          onSelect={(value) => _onValueChange("hour", value)}
        />
        {!is24Hours && (
          <WheelPicker
            perspective="center"
            defaultValue={valueRef.current.meridiem}
            slides={MERIDIEMS}
            useTransform={false}
            onSelect={(value) => _onValueChange("meridiem", value)}
          />
        )}
      </div>
      <button className={buttonClassName} onClick={_onSubmit}>
        <p className={submitTitleClassName}>{submitTitle}</p>
      </button>
    </Fragment>
  );
};

export default TimePicker;
