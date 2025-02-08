// "use client";
// import React from "react";
// import { FaCalendarAlt } from "react-icons/fa";
// import { Field, ErrorMessage, useFormikContext } from "formik";

// const BookingDate = () => {
//   const { errors, touched } = useFormikContext();

//   const options = [
//     { value: "once", label: "مره واحده" },
//     { value: "daily", label: "يوميا" },
//     { value: "weekly", label: "أسبوعيا" },
//     { value: "monthly", label: "شهريا" },
//   ];

//   return (
//     <div className="w-1/2">
//       <h2 className="text-xl font-bold mb-4 text-right">اختر موعد الحجز</h2>

//       <div className="mb-4">
//         <label className="block text-right font-medium">تكرار الخدمة</label>
//         <div className="mt-2 flex items-center justify-between space-y-2">
//           {options.map((option) => (
//             <label
//               key={option.value}
//               className={`flex items-center text-gray-600 border-[2px] ${
//                 errors.serviceRepeat && touched.serviceRepeat
//                   ? "border-red-500"
//                   : "border-gray-300"
//               } rounded-md p-3 cursor-pointer hover:border-blue-500 transition`}
//             >
//               <Field
//                 type="radio"
//                 name="serviceRepeat"
//                 value={option.value}
//                 className="form-radio w-4 h-4"
//               />
//               <span className="mr-2">{option.label}</span>
//             </label>
//           ))}
//         </div>
//         {errors.serviceRepeat && touched.serviceRepeat && (
//           <div className="text-red-500 text-sm mt-2">
//             {errors.serviceRepeat}
//           </div>
//         )}
//       </div>

//       <div className="my-12">
//         <label className="block mb-2 text-right font-medium">
//           التاريخ والوقت
//         </label>
//         <div className="relative">
//           <Field
//             type="text"
//             name="bookingDate"
//             placeholder="التاريخ والوقت"
//             className={`w-full px-4 py-2 border rounded-lg ${
//               errors.bookingDate && touched.bookingDate
//                 ? "border-red-500"
//                 : "border-gray-300"
//             } text-gray-600 focus:ring focus:ring-blue-200`}
//           />
//           <div className="absolute left-3 top-3 text-gray-400">
//             <FaCalendarAlt />
//           </div>
//         </div>
//         <ErrorMessage
//           name="bookingDate"
//           component="div"
//           className="text-red-500 text-sm mt-2"
//         />
//       </div>
//     </div>
//   );
// };

// export default BookingDate;
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaTimes } from "react-icons/fa";
import { useFormikContext, Field } from "formik";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ar from "date-fns/locale/ar";

registerLocale("ar", ar);
setDefaultLocale("ar");

const CustomInput = React.forwardRef(({ value, onClick, onChange }, ref) => (
  <div className="relative w-full">
    <input
      type="text"
      value={value}
      onClick={onClick}
      onChange={onChange}
      ref={ref}
      placeholder="التاريخ والوقت"
      className="w-full px-10 py-2 border border-gray-300 rounded-lg text-gray-600 focus:ring focus:ring-blue-200"
      readOnly // لجعل الحقل للعرض فقط دون إدخال يدوي
    />
    <FaCalendarAlt
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
      onClick={onClick}
    />
    {value && (
      <FaTimes
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation(); // لمنع فتح الـ DatePicker عند النقر
          onChange({ target: { value: "" } });
        }}
      />
    )}
  </div>
));

const BookingDate = () => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const [startDate, setStartDate] = useState(new Date());
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
        {errors.serviceRepeat && touched.serviceRepeat && (
          <div className="text-red-500 text-sm mt-2">
            {errors.serviceRepeat}
          </div>
        )}
      </div>
      <div className="my-12">
        <label className="block mb-2 text-right font-medium">
          التاريخ والوقت
        </label>
        <DatePicker
          locale="ar"
          selected={
            values.bookingDate ? new Date(values.bookingDate) : startDate
          }
          onChange={(date) => {
            setStartDate(date);
            setFieldValue("bookingDate", date.toISOString());
          }}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="yyyy/MM/dd hh:mm aa"
          customInput={<CustomInput />} // استخدام حقل إدخال مخصص يحتوي على الأيقونات
        />
        {errors.bookingDate && touched.bookingDate && (
          <div className="text-red-500 text-sm mt-2">{errors.bookingDate}</div>
        )}
      </div>
    </div>
  );
};

export default BookingDate;

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Field, useFormikContext } from "formik";
// import { FaCalendarAlt, FaTimes } from "react-icons/fa";
// import { registerLocale, setDefaultLocale } from "react-datepicker";
// import ar from "date-fns/locale/ar";
// import { ErrorMessage } from "formik";

// const BookingDate = () => {
//   const { setFieldValue, values, errors, touched } = useFormikContext();
//   const [startDate, setStartDate] = useState(new Date());

//      const options = [
//        { value: "once", label: "مره واحده" },
//        { value: "daily", label: "يوميا" },
//        { value: "weekly", label: "أسبوعيا" },
//        { value: "monthly", label: "شهريا" },
//      ];

//   registerLocale("ar", ar);
//   setDefaultLocale("ar");

//   return (
//     <div className="w-1/2">
//       <h2 className="text-xl font-bold mb-4 text-right">اختر موعد الحجز</h2>

//       <div className="mb-4">
//         <label className="block text-right font-medium">تكرار الخدمة</label>
//         <div className="mt-2 flex items-center justify-between space-y-2">
//           {options.map((option) => (
//             <label
//               key={option.value}
//               className={`flex items-center text-gray-600 border-[2px] ${
//                 errors.serviceRepeat && touched.serviceRepeat
//                   ? "border-red-500"
//                   : "border-gray-300"
//               } rounded-md p-3 cursor-pointer hover:border-blue-500 transition`}
//             >
//               <Field
//                 type="radio"
//                 name="serviceRepeat"
//                 value={option.value}
//                 className="form-radio w-4 h-4"
//               />
//               <span className="mr-2">{option.label}</span>
//             </label>
//           ))}
//         </div>
//         {errors.serviceRepeat && touched.serviceRepeat && (
//           <div className="text-red-500 text-sm mt-2">
//             {errors.serviceRepeat}
//           </div>
//         )}
//       </div>

//       <div className="my-12">
//         <label className="block mb-2 text-right font-medium">
//           التاريخ والوقت
//         </label>
//         <div className="relative">
//           <DatePicker
//             selected={
//               values.bookingDate ? new Date(values.bookingDate) : startDate
//             }
//             onChange={(date) => {
//               setStartDate(date);
//               setFieldValue("bookingDate", date.toISOString());
//             }}
//             showTimeSelect
//             timeFormat="HH:mm"
//             timeIntervals={15}
//             dateFormat="yyyy/MM/dd hh:mm aa"
//             placeholderText="التاريخ والوقت"
//             className={`w-full px-4 py-2 border rounded-lg ${
//               errors.bookingDate && touched.bookingDate
//                 ? "border-red-500"
//                 : "border-gray-300"
//             } text-gray-600 focus:ring focus:ring-blue-200`}
//           />
//           <div className="absolute left-3 top-3 text-gray-400">
//             <FaCalendarAlt />

//           </div>
//           {values.bookingDate && (
//             <button
//               type="button"
//               onClick={() => {
//                 setStartDate(null);
//                 setFieldValue("bookingDate", "");
//               }}
//               className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
//             >
//               <FaTimes />
//             </button>
//           )}
//         </div>
//         <ErrorMessage
//           name="bookingDate"
//           component="div"
//           className="text-red-500 text-sm mt-2"
//         />
//       </div>
//     </div>
//   );
// };

// export default BookingDate;
