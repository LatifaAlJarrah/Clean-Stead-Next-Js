"use client";

import React, { useState } from "react";
import "@/app/globals.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faTeletype,
  faUser,
  faClose
} from "@fortawesome/free-solid-svg-icons";

function Button() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("signup"); // "signup" or "login"

  const toggleModal = () => setIsOpen(!isOpen);

  const buttons = [
    { id: 1, name: "دخول", link: { toggleModal } },
    { id: 2, name: "سجل الآن", link: "/book" },
  ];
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {buttons.map((button) => (
        <Link href={button.link} key={button.id}>
          <button
            className={`btn ${button.id != 1 ? "btn-auth" : "btn-sign"}`}
            onClick={button.id === 1 ? toggleModal : null}
          >
            {button.name}
          </button>
        </Link>
      ))}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg">
            {/* رأس النافذة */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold">
                من فضلك قم بتسجيل الدخول للاستمرار
              </h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon
                  icon={faClose}
                />
              </button>
            </div>

            {/* التبويبات */}
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab("signup")}
                className={`flex-1 py-2 text-center ${
                  activeTab === "signup"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                إنشاء حساب
              </button>
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-2 text-center ${
                  activeTab === "login"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                تسجيل دخول
              </button>
            </div>

            {/* محتوى النافذة */}
            <div className="p-4">
              {activeTab === "signup" && (
                <form className="space-y-4">
                  <label>الاسم</label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="ادخل الاسم"
                      className="w-full p-3 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <FontAwesomeIcon
                      icon={faUser}
                      className="absolute right-3 text-gray-400 w-5 h-5 cursor-pointer"
                    />
                  </div>
                  <label>الايميل</label>
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      className="w-full p-3 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="absolute right-3 text-gray-400 w-5 h-5"
                    />
                  </div>
                  <label>رقم الجوال</label>
                  <div className="relative flex items-center">
                    <input
                      type="telephone"
                      placeholder="رقم الجوال"
                      className="w-full p-3 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <FontAwesomeIcon
                      icon={faTeletype}
                      className="absolute right-3 text-gray-400 w-5 h-5"
                    />
                  </div>
                  <label>كلمة المرور</label>
                  <div className="relative flex items-center">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="absolute right-3 text-gray-400 w-5 h-5 cusror-pointer"
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="أدخل كلمة المرور"
                      className="w-full p-3 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={togglePasswordVisibility}
                      className="absolute left-3 text-gray-400 w-5 h-5 cursor-pointer"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    إنشاء حساب
                  </button>
                </form>
              )}

              {activeTab === "login" && (
                <form className="space-y-4">
                  <label>الايميل</label>
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      className="w-full p-3 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="absolute right-3 text-gray-400 w-5 h-5"
                    />
                  </div>
                  <label>كلمة المرور</label>
                  <div className="relative flex items-center">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="absolute right-3 text-gray-400 w-5 h-5 cusror-pointer"
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="أدخل كلمة المرور"
                      className="w-full p-3 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={togglePasswordVisibility}
                      className="absolute left-3 text-gray-400 w-5 h-5 cursor-pointer"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    تسجيل دخول
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Button;
