"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import "@/app/globals.css";
import GroupTwo from "@/assest/images/group2.svg";
import Image from "next/image";

import BookingServiceSelected from "./BookingServiceSelected";
import BookingSummery from "./BookingSummery";
import BookingType from "./BookingType";
import Buttons from "./Buttons";
import BookingDate from "./BookingDate";
import UserInformation from "./UserInformation";

const validationSchema = Yup.object({
  serviceRepeat: Yup.string().required("اختيار تكرار الخدمة مطلوب"),
  bookingDate: Yup.string().required("التاريخ والوقت مطلوب"),
  userName: Yup.string().required("الاسم مطلوب"),
  userPhone: Yup.string()
    .matches(/^[0-9]+$/, "رقم الجوال يجب أن يحتوي على أرقام فقط")
    .required("رقم الجوال مطلوب"),
  userAddress: Yup.string().required("العنوان مطلوب"),
  userDetailedAddress: Yup.string().required("العنوان التفصيلي مطلوب"),
});

const BookingPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userPhone: "",
    userAddress: "",
    userDetailedAddress: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  // const handleNextStep = (validateForm, values) => {
  //   validateForm().then((errors) => {
  //     if (
  //       (currentStep === 2 && Object.keys(errors).length > 0) ||
  //       (currentStep === 3 && Object.keys(errors).length > 0)
  //     ) {
  //       console.log("Form validation failed:", errors);
  //       return;
  //     }
  //     if (currentStep < 3) {
  //       setCurrentStep((prev) => prev + 1);
  //     }
  //   });
  // };

  // const handlePreviousStep = () => {
  //   if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  // };
  const handleNextStep = async (validateForm, values) => {
    let stepFields = [];

    if  (currentStep === 2) {
      stepFields = ["bookingDate"]; // 🟡 الحقول الخاصة بالخطوة 2
    } else if (currentStep === 3) {
      stepFields = [
        "userName",
        "userPhone",
        "userAddress",
        "userDetailedAddress",
      ]; // 🔴 الحقول الخاصة بالخطوة 3
    }

    // ✅ التحقق فقط من الحقول الخاصة بالخطوة الحالية
    const errors = await validateForm();
    const stepErrors = Object.keys(errors).filter((key) =>
      stepFields.includes(key)
    );

    console.log("Form Submition Values: ",values)
    if (stepErrors.length > 0) {
      console.log("⚠ هناك أخطاء في التحقق:", stepErrors);
      return; // ❌ لا تسمح بالانتقال إذا كان هناك أخطاء
    }

    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1); // ✅ الانتقال إلى الخطوة التالية فقط إذا لم يكن هناك أخطاء
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1); // ⬅ العودة إلى الخطوة السابقة
    }
  };
  return (
    <Formik
      initialValues={{
        serviceRepeat: "",
        bookingDate: "",
        userName: "",
        userPhone: "",
        userAddress: "",
        userDetailedAddress: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Final Submission:", values)}
      validateOnMount={false}
    >
      {({ values, validateForm, isValid }) => (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-row mt-4">
            <h3 className="h-16 xl:text-4xl sm:text-2xl xs:text-2xl text-black font-medium leading-normal">
              احجز الآن
            </h3>
            <Image
              src={GroupTwo}
              alt="Small icon"
              className="w-6 h-9 mt-1 mr-2"
              priority
            />
          </div>

          <div className="lg:col-start-1 lg:col-end-3 space-y-4 card-shadow p-6 rounded-t-3xl shadow-lg">
            <BookingType />
          </div>

          <div className="lg:col-start-3 lg:col-end-4">
            <BookingSummery
              service="تنظيف المنازل"
              items={["تنظيف المنازل (1)"]}
              total={55}
            />
          </div>

          <Form className="lg:col-start-1 lg:col-end-3 space-y-4 card-shadow p-6 shadow-lg">
            <div>
              {currentStep === 1 && <BookingServiceSelected />}
              {currentStep === 2 && <BookingDate />}
              {currentStep === 3 && <UserInformation />}
            </div>
          </Form>
          <div className="lg:col-start-1 lg:col-end-3 space-y-4 card-shadow p-6 rounded-b-3xl shadow-lg">
            <Buttons
              currentStep={currentStep}
              onClickNext={() => handleNextStep(validateForm, values)}
              onClickBack={handlePreviousStep}
              // disabledNext={currentStep === 3}
              disabledBack={currentStep === 1}
              disabledSubmit={currentStep === 3}
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default BookingPage;
