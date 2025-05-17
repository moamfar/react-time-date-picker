"use client";
import React, { FC, Fragment, useMemo, useRef, useState } from "react";
import { generateDays } from "../../helpers/generateDays.helper";
import { generateMonths } from "../../helpers/generateMonths.helper";
import { generateYears } from "../../helpers/generateYears.helper";
import { findDefaultMinAndMaxYear, formatDefaultDate } from "../../helpers/moment.helper";
import { DatePickerProps, DatePickerSelectedDate, DatePickerSelectedValue } from "../../types/DatePicker.types";
import WheelPicker from "../WheelPicker/WheelPicker";

const DatePicker: FC<DatePickerProps> = ({ ...props }) => {
  const DEFAULT_MIN_MAX_YEAR = findDefaultMinAndMaxYear(props?.type);
  const {
    selectedDate,
    setSelectedDate,
    maxYear = DEFAULT_MIN_MAX_YEAR.maxYear,
    minYear = DEFAULT_MIN_MAX_YEAR.minYear,
    submitCallback,
    type = "jalaali",
    submitTitle = "Submit",
    buttonClassName = "w-full bg-black rounded-md flex items-center justify-center h-10",
    submitTitleClassName = "text-white",
    containerClassName = "flex flex-row items-center justify-between  w-full px-4 h-[18rem] overflow-hidden relative",
  } = props;
  const YEARS = useMemo(() => generateYears(minYear, maxYear), [minYear, maxYear]);
  const MONTHS = generateMonths(type);
  const formatSelectedDate: (selectedDate: DatePickerSelectedDate) => DatePickerSelectedValue = (selectedDate) => {
    return {
      year: YEARS.find((i) => i?.id == Number(selectedDate?.year)) || YEARS?.[0],
      month: MONTHS.find((i) => i?.id == Number(selectedDate?.month)) || MONTHS?.[0],
      day: { id: Number(selectedDate?.day), title: selectedDate?.day },
    };
  };

  const SELECTED: DatePickerSelectedValue = !!selectedDate
    ? formatSelectedDate(selectedDate)
    : formatDefaultDate(YEARS, MONTHS, type);

  const valueRef = useRef<DatePickerSelectedValue>(SELECTED);

  const [days_array, set_days_array] = useState(
    generateDays(
      Number(SELECTED?.month?.id || valueRef.current.month?.id),
      Number(SELECTED?.year?.id || valueRef.current.year?.id),
      type
    )
  );
  const _onValueChange = (refValue: "day" | "month" | "year", value: { id: number; title: string | number }) => {
    valueRef.current = { ...valueRef.current, [`${refValue}`]: value };
    if (refValue == "month" || refValue == "year") {
      const TEMP = generateDays(Number(valueRef.current.month?.id), Number(valueRef.current.year?.id), type);
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
