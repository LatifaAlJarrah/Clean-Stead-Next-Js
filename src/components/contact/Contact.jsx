import React from "react";
import SharedLayout from "../SharedLayout";

const About = () => {
  return (
    <SharedLayout name={"تواصل معنا"}>
      <form className="max-w-4xl">
        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2">الخدمة</label>
          <input
            type="text"
            placeholder="اسم الخدمة"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-blue"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">الاسم</label>
            <input
              type="text"
              placeholder="الاسم"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-blue"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">رقم الجوال</label>
            <input
              inputMode="numeric"
              pattern="[0-9]*"
              type="text"
              placeholder="رقم الجوال"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-blue appearance-none"
            />
          </div>
        </div>
        <div className="flex flex-col mb-1">
          <label className="text-lg font-medium mb-2">الرسالة</label>
          <textarea
            placeholder="اكتب رسالتك هنا"
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-custom-blue"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-32 h-10 bg-custom-blue text-white rounded-3xl hover:bg-blue-700 transition-colors duration-300"
        >
          تواصل معنا
        </button>
      </form>
    </SharedLayout>
  );
};

export default About;