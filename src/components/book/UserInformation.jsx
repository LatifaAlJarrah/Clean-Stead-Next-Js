import React from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // For validation

// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required("الاسم مطلوب"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "رقم الجوال يجب أن يحتوي على أرقام فقط")
    .required("رقم الجوال مطلوب"),
  address: Yup.string().required("العنوان مطلوب"),
  detailedAddress: Yup.string().required("العنوان التفصيلي مطلوب"),
});

const UserInformation = () => {
  return (
    <div>
      {/* Title */}
      <div>
        <p className="text-lg font-semibold">
          أدخل معلوماتك{" "}
          <Link href="/login" className="text-custom-blue text-sm">
            تسجيل الدخول
          </Link>
        </p>
      </div>

      {/* Formik Form */}
      <Formik
        initialValues={{
          name: "",
          phone: "",
          address: "",
          detailedAddress: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          // Handle form submission
          console.log("Form Values:", values);
          alert("تم إرسال المعلومات بنجاح!");
          resetForm(); // Reset form fields
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* Name Field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium mb-2">
                الاسم
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="الاسم"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-blue"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Phone Field */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium mb-2">
                رقم الجوال
              </label>
              <Field
                id="phone"
                name="phone"
                inputMode="numeric"
                pattern="[0-9]*"
                type="text"
                placeholder="رقم الجوال"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-blue"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Address Field */}
            <div className="flex flex-col">
              <label htmlFor="address" className="text-sm font-medium mb-2">
                العنوان
              </label>
              <Field
                id="address"
                name="address"
                type="text"
                placeholder="العنوان"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-blue"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Detailed Address Field */}
            <div className="flex flex-col">
              <label
                htmlFor="detailedAddress"
                className="text-sm font-medium mb-2"
              >
                العنوان التفصيلي
              </label>
              <Field
                id="detailedAddress"
                name="detailedAddress"
                type="text"
                placeholder="العنوان التفصيلي"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-blue"
              />
              <ErrorMessage
                name="detailedAddress"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full h-12 bg-custom-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جارٍ الإرسال..." : "إرسال"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserInformation;
