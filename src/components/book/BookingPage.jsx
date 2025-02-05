"use client";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

import "@/app/globals.css";
import GroupTwo from "@/assest/images/group2.svg";

import BookingServiceSelected from "./BookingServiceSelected";
import BookingSummery from "./BookingSummery";
import BookingType from "./BookingType";
import Buttons from "./Buttons";
import BookingDate from "./BookingDate";
import UserInformation from "./UserInformation";

// Form validation schema
const validationSchema = Yup.object({
  serviceRepeat: Yup.string().required("اختيار تكرار الخدمة مطلوب"),
  bookingDate: Yup.string().required("التاريخ والوقت مطلوب"),
  name: Yup.string().required("الاسم مطلوب"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "رقم الجوال يجب أن يحتوي على أرقام فقط")
    .required("رقم الجوال مطلوب"),
  address: Yup.string().required("العنوان مطلوب"),
  detailedAddress: Yup.string().required("العنوان التفصيلي مطلوب"),
});

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    address: "",
    detailedAddress: "",
  });

  const handleNextStep = async (validateForm, setFieldTouched) => {
    const errors = await validateForm(); // Validate form and get errors

    if (currentStep === 2 || currentStep === 3) {
      // Mark all fields as touched to show error messages
      Object.keys(errors).forEach((field) => setFieldTouched(field, true));
    }

    if (currentStep === 3 && Object.keys(errors).length > 0) {
      console.log("Form validation failed:", errors);
      return; // Stop moving forward if errors exist
    }

    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <Formik
      initialValues={{
        serviceRepeat: "",
        bookingDate: "",
        name: "",
        phone: "",
        address: "",
        detailedAddress: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Final Submission:", values)}
    >
      {({ values, errors, touched, validateForm, setFieldTouched }) => {
        const isFormFilled = Object.keys(errors).length === 0;

        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Header */}
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

            {/* Booking Type */}
            <div className="lg:col-start-1 lg:col-end-3 space-y-4 card-shadow p-6 rounded-t-3xl shadow-lg">
              <BookingType />
            </div>

            {/* Booking Summary */}
            <div className="lg:col-start-3 lg:col-end-4">
              <BookingSummery
                service="تنظيف المنازل"
                items={["تنظيف المنازل (1)"]}
                total={55}
              />
            </div>

            {/* Steps */}
            <div className="lg:col-start-1 lg:col-end-3 space-y-4 card-shadow p-6 shadow-lg">
              {currentStep === 1 && <BookingServiceSelected />}
              {currentStep === 2 && <BookingDate />}
              {currentStep === 3 && <UserInformation />}
            </div>

            {/* Buttons */}
            <div className="lg:col-start-1 lg:col-end-3 space-y-4 card-shadow p-6 rounded-b-3xl shadow-lg">
              <Buttons
                currentStep={currentStep}
                onClickNext={() =>
                  handleNextStep(validateForm, setFieldTouched)
                }
                onClickBack={handlePreviousStep}
                disabledNext={currentStep === 3 && !isFormFilled}
              />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default BookingPage;

// "use client";
// import React, { useState } from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";

// import "@/app/globals.css";
// import GroupTwo from "@/assest/images/group2.svg";
// import Image from "next/image";

// import BookingServiceSelected from "./BookingServiceSelected";
// import BookingSummery from "./BookingSummery";
// import BookingType from "./BookingType";
// import Buttons from "./Buttons";
// import BookingDate from "./BookingDate";
// import UserInformation from "./UserInformation"; // Import UserInformation component

// const validationSchema = Yup.object({
//   serviceRepeat: Yup.string().required("اختيار تكرار الخدمة مطلوب"),
//   bookingDate: Yup.string().required("التاريخ والوقت مطلوب"),
// });

// const BookingPage = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formValues, setFormValues] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     detailedAddress: "",
//   });

//   // Function to update form values
//   const updateFormValues = (newValues) => {
//     setFormValues(newValues);
//   };

//   // Check if all fields are filled
//   const isFormFilled = Object.values(formValues).every(
//     (value) => value.trim() !== ""
//   );

//   const handleNextStep = (validateForm, values) => {
//     validateForm().then((errors) => {
//       if (currentStep === 2 && Object.keys(errors).length > 0) {
//         console.log("Form validation failed:", errors);
//         return;
//       }
//       if (currentStep < 3) {
//         setCurrentStep((prev) => prev + 1);
//       }
//     });
//   };

//   const handlePreviousStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep((prev) => prev - 1);
//     }
//   };

//   return (
//     <Formik
//       initialValues={{ serviceRepeat: "", bookingDate: "" }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => console.log("Final Submission:", values)}
//     >
//       {({ values, errors, touched, validateForm }) => (
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//           <div className="flex flex-row mt-4">
//             <h3 className="h-16 xl:text-4xl sm:text-2xl xs:text-2xl text-black font-medium leading-normal">
//               احجز الآن
//             </h3>
//             <Image
//               src={GroupTwo}
//               alt="Small icon"
//               className="w-6 h-9 mt-1 mr-2"
//               priority
//             />
//           </div>

//           <div className="lg:col-start-1 lg:col-end-3 space-y-4 card-shadow p-6 rounded-t-3xl shadow-lg">
//             <BookingType />
//           </div>

//           <div className="lg:col-start-3 lg:col-end-4">
//             <BookingSummery
//               service="تنظيف المنازل"
//               items={["تنظيف المنازل (1)"]}
//               total={55}
//             />
//           </div>

//           <div className="lg:col-start-1 lg:col-end-3 space-y-4 card-shadow p-6 shadow-lg">
//             {currentStep === 1 && <BookingServiceSelected />}
//             {currentStep === 2 && <BookingDate />}
//             {currentStep === 3 && (
//               <UserInformation
//                 formValues={formValues}
//                 updateFormValues={updateFormValues}
//               />
//             )}
//           </div>

//           <div className="lg:col-start-1 lg:col-end-3 space-y-4 card-shadow p-6 rounded-b-3xl shadow-lg">
//             <Buttons
//               currentStep={currentStep}
//               onClickNext={() => handleNextStep(validateForm, values)}
//               onClickBack={handlePreviousStep}
//               onSubmit={handleFormSubmit}
//               disabledNext={currentStep === 3 && !isFormFilled} // Disable if form is not filled
//               disabledBack={currentStep === 1}
//             />
//           </div>
//         </div>
//       )}
//     </Formik>
//   );
// };

// export default BookingPage;
