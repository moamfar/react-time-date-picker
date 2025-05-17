"use client";
import moment from "moment";
import React, { FC, Fragment, useMemo, useRef, useState } from "react";
import { generateDays } from "../../helpers/generateDays.helper";
import { generateYears } from "../../helpers/generateYears.helper";
import { DatePickerProps, DatePickerSelectedDate, DatePickerSelectedValue } from "../../types/DatePicker.types";
import { MONTHS } from "../../utils/months.util";
import WheelPicker from "../WheelPicker/WheelPicker";

const DatePicker: FC<DatePickerProps> = ({ ...props }) => {
  const {
    selectedDate,
    setSelectedDate,
    maxYear = moment().year(),
    minYear = moment().year() - 100,
    submitCallback,
    submitTitle = "Submit",
    buttonClassName = "w-full bg-black rounded-md flex items-center justify-center h-10",
    submitTitleClassName = "text-white",
    containerClassName = "flex flex-row items-center justify-between  w-full px-4 h-[18rem] overflow-hidden relative",
  } = props;
  const NOW = moment(new Date());
  const YEARS = useMemo(() => generateYears(minYear, maxYear), [minYear, maxYear]);

  const formatSelectedDate: (selectedDate: DatePickerSelectedDate) => DatePickerSelectedValue = (selectedDate) => {
    return {
      year: YEARS.find((i) => i?.id == Number(selectedDate?.year)) || YEARS?.[0],
      month: MONTHS.find((i) => i?.id == Number(selectedDate?.month)) || MONTHS?.[0],
      day: { id: Number(selectedDate?.day), title: selectedDate?.day },
    };
  };

  const SELECTED: DatePickerSelectedValue = !!selectedDate
    ? formatSelectedDate(selectedDate)
    : {
        year: YEARS.find((i) => i?.id == Number(NOW.year())) || YEARS?.[0],
        month: MONTHS.find((i) => i?.id == Number(NOW.month() + 1)) || MONTHS?.[0],
        day: { id: moment(NOW).date(), title: moment(NOW).date() },
      };

  const valueRef = useRef<DatePickerSelectedValue>(SELECTED);

  const [days_array, set_days_array] = useState(
    generateDays(
      Number(SELECTED?.month?.id || valueRef.current.month?.id),
      Number(SELECTED?.year?.id || valueRef.current.year?.id)
    )
  );
  const _onValueChange = (refValue: "day" | "month" | "year", value: { id: number; title: string | number }) => {
    valueRef.current = { ...valueRef.current, [`${refValue}`]: value };
    if (refValue == "month" || refValue == "year") {
      const TEMP = generateDays(Number(valueRef.current.month?.id), Number(valueRef.current.year?.id));
      set_days_array((days) => {
        if (days.length !== TEMP.length) return TEMP;
        return days;
      });
    }
  };

  const _onSubmit = () => {
    setSelectedDate({
      day: valueRef?.current?.day?.id,
      month: valueRef?.current?.month?.id,
      year: valueRef?.current?.year?.id,
    });
    if (!!submitCallback) {
      submitCallback();
    }
  };
  return (
    <Fragment>
      <div className={containerClassName}>
        <WheelPicker
          perspective="left"
          defaultValue={valueRef.current.day}
          slides={days_array}
          hasDynamicValue
          onSelect={(value) => _onValueChange("day", value)}
        />
        <WheelPicker
          perspective="center"
          defaultValue={valueRef.current.year}
          slides={YEARS}
          onSelect={(value) => _onValueChange("year", value)}
        />
        <WheelPicker
          perspective="right"
          defaultValue={valueRef.current.month}
          slides={MONTHS}
          onSelect={(value) => _onValueChange("month", value)}
        />
      </div>
      <button className={buttonClassName} onClick={_onSubmit}>
        <p className={submitTitleClassName}>{submitTitle}</p>
      </button>
    </Fragment>
  );
};

export default DatePicker;
