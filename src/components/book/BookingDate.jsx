"use client";

import React from "react";
import "@/app/globals.css";
import { FaCalendarAlt } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schema
const validationSchema = Yup.object({
  serviceRepeat: Yup.string().required("اختيار تكرار الخدمة مطلوب"),
  bookingDate: Yup.string().required("التاريخ والوقت مطلوب"),
});

const BookingDate = () => {
  const options = [
    { value: "once", label: "مره واحده" },
    { value: "daily", label: "يوميا" },
    { value: "weekly", label: "أسبوعيا" },
    { value: "monthly", label: "شهريا" },
  ];

  return (
    <Formik
      initialValues={{
        serviceRepeat: "",
        bookingDate: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form Values:", values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex items-center justify-between">
          <div className="w-1/2">
            <h2 className="text-xl font-bold mb-4 text-right">
              اختر موعد الحجز
            </h2>

            {/* Service Repeat Section */}
            <div className="mb-4">
              <label className="block text-right font-medium">
                تكرار الخدمة
              </label>
              <div className="mt-2 flex items-center justify-between space-y-2">
                {options.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center text-gray-600 border-[2px] border-gray-300 rounded-md p-3 cursor-pointer hover:border-blue-500 transition"
                  >
                    <Field
                      type="radio"
                      name="serviceRepeat"
                      value={option.value}
                      className="form-radio text-blue-500 focus:ring-blue-400 focus:ring-2 w-4 h-4"
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

            {/* Date and Time Section */}
            <div className="my-12">
              <label className="block mb-2 text-right font-medium">
                التاريخ والوقت
              </label>
              <div className="relative">
                <Field
                  type="text"
                  name="bookingDate"
                  placeholder="التاريخ والوقت"
                  className="w-full px-4 py-2 border rounded-lg text-gray-600 focus:ring focus:ring-blue-200"
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

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                تأكيد
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingDate;

