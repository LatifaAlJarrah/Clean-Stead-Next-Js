"use client";
import "@/app/globals.css";
import React from "react";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

import LogoDeclare from '@/components/navbar/logo/Logo'

function LoginAdmin() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col mx-auto justify-center items-center my-auto h-screen p-5 w-screen">
      <LogoDeclare />
      <div className="flex">
        <form className="flex flex-col w-full space-y-4">
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
              className="absolute right-3 text-gray-400 w-5 h-5"
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
          <button type="submit" className="btn-login">
            دخول
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginAdmin;
