"use client";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Field, ErrorMessage, useFormikContext } from "formik";

const BookingDate = () => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  const options = [
    { value: "once", label: "مره واحده" },
    { value: "daily", label: "يوميا" },
    { value: "weekly", label: "أسبوعيا" },
    { value: "monthly", label: "شهريا" },
  ];

  return (
    <div className="w-1/2">
      <h2 className="text-xl font-bold mb-4 text-right">اختر موعد الحجز</h2>

      <div className="mb-4">
        <label className="block text-right font-medium">تكرار الخدمة</label>
        <div className="mt-2 flex items-center justify-between space-y-2">
          {options.map((option) => (
            <label
              key={option.value}
              className={`flex items-center text-gray-600 border-[2px] ${
                errors.serviceRepeat && touched.serviceRepeat
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md p-3 cursor-pointer hover:border-blue-500 transition`}
            >
              <Field
                type="radio"
                name="serviceRepeat"
                value={option.value}
                className="form-radio w-4 h-4"
              />
              <span className="mr-2">{option.label}</span>
            </label>
          ))}
        </div>
        <ErrorMessage
          name="serviceRepeat"
          component="div"
          className="text-red-500 text-sm mt-2"
        />
      </div>

      <div className="my-12">
        <label className="block mb-2 text-right font-medium">
          التاريخ والوقت
        </label>
        <div className="relative">
          <Field
            type="text"
            name="bookingDate"
            placeholder="التاريخ والوقت"
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.bookingDate && touched.bookingDate
                ? "border-red-500"
                : "border-gray-300"
            } text-gray-600 focus:ring focus:ring-blue-200`}
          />
          <div className="absolute left-3 top-3 text-gray-400">
            <FaCalendarAlt />
          </div>
        </div>
        <ErrorMessage
          name="bookingDate"
          component="div"
          className="text-red-500 text-sm mt-2"
        />
      </div>
    </div>
  );
};

export default BookingDate;
