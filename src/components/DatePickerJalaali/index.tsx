"use client";
import moment from "moment-jalaali";
import React, { FC, Fragment, useMemo, useRef, useState } from "react";
import { generateDaysJalaali } from "../../helpers/generateDays.helper";
import { generateYears } from "../../helpers/generateYears.helper";
import { DatePickerProps, DatePickerSelectedDate, DatePickerSelectedValue } from "../../types/DatePicker.types";
import { JALAALI_MONTHS } from "../../utils/months.util";
import WheelPicker from "../WheelPicker/WheelPicker";

const DatePickerJalaali: FC<DatePickerProps> = ({ ...props }) => {
  const {
    selectedDate,
    setSelectedDate,
    maxYear = moment().jYear(),
    minYear = moment().jYear() - 100,
    submitCallback,
    submitTitle = "ثبت",
    buttonClassName = "w-full bg-black rounded-md flex items-center justify-center h-10",
    submitTitleClassName = "text-white",
    containerClassName = "flex flex-row items-center justify-between  w-full px-4 h-[18rem] overflow-hidden relative",
  } = props;
  const NOW = moment(new Date());
  const YEARS = useMemo(() => generateYears(minYear, maxYear), [minYear, maxYear]);

  const formatSelectedDate: (selectedDate: DatePickerSelectedDate) => DatePickerSelectedValue = (selectedDate) => {
    return {
      year: YEARS.find((i) => i?.id == Number(selectedDate?.year)) || YEARS?.[0],
      month: JALAALI_MONTHS.find((i) => i?.id == Number(selectedDate?.month)) || JALAALI_MONTHS?.[0],
      day: { id: Number(selectedDate?.day), title: selectedDate?.day },
    };
  };

  const SELECTED: DatePickerSelectedValue = !!selectedDate
    ? formatSelectedDate(selectedDate)
    : {
        year: YEARS.find((i) => i?.id == Number(NOW.jYear())) || YEARS?.[0],
        month: JALAALI_MONTHS.find((i) => i?.id == Number(NOW.jMonth() + 1)) || JALAALI_MONTHS?.[0],
        day: { id: moment(NOW).jDate(), title: moment(NOW).jDate() },
      };

  const valueRef = useRef<DatePickerSelectedValue>(SELECTED);

  const [days_array, set_days_array] = useState(
    generateDaysJalaali(
      Number(SELECTED?.month?.id || valueRef.current.month?.id),
      Number(SELECTED?.year?.id || valueRef.current.year?.id)
    )
  );

  const _onValueChange = (refValue: "day" | "month" | "year", value: { id: number; title: string | number }) => {
    valueRef.current = { ...valueRef.current, [`${refValue}`]: value };
    if (refValue == "month" || refValue == "year") {
      const TEMP = generateDaysJalaali(Number(valueRef.current.month?.id), Number(valueRef.current.year?.id));
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
          defaultValue={valueRef.current.month}
          slides={JALAALI_MONTHS}
          onSelect={(value) => _onValueChange("month", value)}
        />
        <WheelPicker
          perspective="right"
          defaultValue={valueRef.current.year}
          slides={YEARS}
          onSelect={(value) => _onValueChange("year", value)}
        />
      </div>
      <button className={buttonClassName} onClick={_onSubmit}>
        <p className={submitTitleClassName}>{submitTitle}</p>
      </button>
    </Fragment>
  );
};

export default DatePickerJalaali;
