import React from "react";
import { Field, ErrorMessage } from "formik";

const UserInformation = () => {
  const fields = [
    { name: "userName", label: "الاسم" },
    { name: "userPhone", label: "رقم الجوال" },
    { name: "userAddress", label: "العنوان" },
    { name: "userDetailedAddress", label: "العنوان التفصيلي" },
  ];

  return fields.map(({ name, label }) => (
    <div key={name} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-medium mb-2">
          {label}
        </label>
        <Field
          id={name}
          name={name}
          type="text"
          placeholder="ادخل البيانات"
          className="w-full h-12 px-4 border border-gray-300 rounded-lg"
        />
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  ));
};

export default UserInformation;
