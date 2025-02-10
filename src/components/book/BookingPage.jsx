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
// import UserInformation from "./UserInformation";

// const validationSchema = Yup.object({
//   serviceRepeat: Yup.string().required("اختيار تكرار الخدمة مطلوب"),
//   // bookingDate: Yup.string().required("التاريخ والوقت مطلوب"),
//   bookingDate: Yup.date()
//     .required("التاريخ والوقت مطلوب")
//     .min(new Date(), "يجب أن يكون التاريخ والوقت في المستقبل"),
//   userName: Yup.string().required("الاسم مطلوب"),
//   userPhone: Yup.string()
//     .matches(/^[0-9]+$/, "رقم الجوال يجب أن يحتوي على أرقام فقط")
//     .required("رقم الجوال مطلوب"),
//   userAddress: Yup.string().required("العنوان مطلوب"),
//   userDetailedAddress: Yup.string().required("العنوان التفصيلي مطلوب"),
//   services: Yup.array()
//     .of(
//       Yup.object().shape({
//         id: Yup.number().required(),
//         quantity: Yup.number()
//           .min(0, "الكمية يجب أن تكون 0 أو أكثر")
//           .required(),
//         selected: Yup.boolean().required(),
//         price: Yup.number().required(),
//       })
//     )
//     .min(1, "يجب اختيار خدمة واحدة على الأقل"),
// });

// const BookingPage = () => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleNextStep = async (validateForm, values) => {
//     let stepFields = [];
//     if (currentStep === 2) {
//       stepFields = ["bookingDate"]; // التحقق من التاريخ في الخطوة 2
//     } else if (currentStep === 3) {
//       stepFields = [
//         "userName",
//         "userPhone",
//         "userAddress",
//         "userDetailedAddress",
//       ]; // التحقق من معلومات المستخدم في الخطوة 3
//     }

//     console.log("Form Submition Values: ", values);
//     const errors = await validateForm();
//     const stepErrors = Object.keys(errors).filter((key) =>
//       stepFields.includes(key)
//     );

//     if (stepErrors.length > 0) {
//       console.log("⚠ هناك أخطاء في التحقق:", stepErrors);
//       return;
//     }

//     if (currentStep < 3) {
//       setCurrentStep((prev) => prev + 1); // الانتقال إلى الخطوة التالية
//     }
//   };

//   const handlePreviousStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep((prev) => prev - 1); // العودة إلى الخطوة السابقة
//     }
//   };

//   return (
//     <Formik
//       initialValues={{
//         serviceRepeat: "",
//         bookingDate: "",
//         userName: "",
//         userPhone: "",
//         userAddress: "",
//         userDetailedAddress: "",
//         services: [],
//       }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => console.log("Final Submission:", values)}
//       validateOnMount={false}
//     >
//       {({ values, validateForm, setFieldValue, errors, touched }) => (
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
//             {currentStep === 1 && (
//               <BookingServiceSelected
//                 values={values}
//                 setFieldValue={setFieldValue}
//               />
//             )}
//             {currentStep === 2 && <BookingDate />}
//             {currentStep === 3 && <UserInformation />}
//           </div>

//           <div className="lg:col-start-1 lg:col-end-3 space-y-4 card-shadow p-6 rounded-b-3xl shadow-lg">
//             <Buttons
//               currentStep={currentStep}
//               onClickNext={() => handleNextStep(validateForm, values)}
//               onClickBack={handlePreviousStep}
//               disabledBack={currentStep === 1}
//               disabledNext={
//                 (currentStep === 1 &&
//                   values.services.filter((service) => service.selected)
//                     .length === 0) || // تعطيل الزر إذا لم يتم اختيار أي خدمة
//                 (currentStep === 3 &&
//                   (!!errors.userName ||
//                     !!errors.userPhone ||
//                     !!errors.userAddress ||
//                     !!errors.userDetailedAddress)) // تعطيل الزر إذا كانت هناك أخطاء في الحقول
//               }
//             />
//           </div>
//         </div>
//       )}
//     </Formik>
//   );
// };

// export default BookingPage;
"use client";
import React, { useState } from "react";
import { Formik } from "formik";
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
  bookingDate: Yup.date()
    .required("التاريخ والوقت مطلوب")
    .min(new Date(), "يجب أن يكون التاريخ والوقت في المستقبل"),
  userName: Yup.string().required("الاسم مطلوب"),
  userPhone: Yup.string()
    .matches(/^[0-9]+$/, "رقم الجوال يجب أن يحتوي على أرقام فقط")
    .required("رقم الجوال مطلوب"),
  userAddress: Yup.string().required("العنوان مطلوب"),
  userDetailedAddress: Yup.string().required("العنوان التفصيلي مطلوب"),
  services: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.number().required(),
        quantity: Yup.number()
          .min(0, "الكمية يجب أن تكون 0 أو أكثر")
          .required(),
        selected: Yup.boolean().required(),
        price: Yup.number().required(),
      })
    )
    .min(1, "يجب اختيار خدمة واحدة على الأقل"),
});

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = async (validateForm, values) => {
    let stepFields = [];
    if (currentStep === 2) {
      stepFields = ["bookingDate"];
    } else if (currentStep === 3) {
      stepFields = [
        "userName",
        "userPhone",
        "userAddress",
        "userDetailedAddress",
      ];
    }

    console.log("Form Submition Values: ", values);
    const errors = await validateForm();
    const stepErrors = Object.keys(errors).filter((key) =>
      stepFields.includes(key)
    );

    if (stepErrors.length > 0) {
      console.log("⚠ هناك أخطاء في التحقق:", stepErrors);
      return;
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
        userName: "",
        userPhone: "",
        userAddress: "",
        userDetailedAddress: "",
        services: [],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Final Submission:", values)}
      validateOnMount={false}
    >
      {({ values, validateForm, setFieldValue, errors }) => (
        // <div className="grid grid-cols-4 lg:grid-cols-3">
        //   <div className="flex flex-row mt-4">
        //     <h3 className="h-16 xl:text-4xl sm:text-2xl xs:text-2xl text-black font-medium leading-normal">
        //       احجز الآن
        //     </h3>
        //     <Image
        //       src={GroupTwo}
        //       alt="Small icon"
        //       className="w-6 h-9 mt-1 mr-2"
        //       priority
        //     />
        //   </div>
        //   <div className="col-span-1 xl:col-start-3 xl:col-end-4">
        //     <BookingSummery
        //       service="تنظيف المنازل"
        //       items={["تنظيف المنازل (1)"]}
        //       total={55}
        //     />
        //   </div>
        //   <div className="col-span-3 xl:col-start-1 xl:col-end-3">
        //     <div className="card-shadow p-6 shadow-lg rounded-t-3xl">
        //       <BookingType currentStep={currentStep} />
        //     </div>
        //     <div className="card-shadow p-6 shadow-lg rounded-b-3xl">
        //       {currentStep === 1 && (
        //         <BookingServiceSelected
        //           values={values}
        //           setFieldValue={setFieldValue}
        //         />
        //       )}
        //       {currentStep === 2 && <BookingDate />}
        //       {currentStep === 3 && <UserInformation />}
        //     </div>
        //     <div className="card-shadow p-6 rounded-b-3xl shadow-lg">
        //       <Buttons
        //         currentStep={currentStep}
        //         onClickNext={() => handleNextStep(validateForm, values)}
        //         onClickBack={handlePreviousStep}
        //         disabledBack={currentStep === 1}
        //         disabledNext={
        //           (currentStep === 1 &&
        //             values.services.filter((service) => service.selected)
        //               .length === 0) ||
        //           (currentStep === 3 &&
        //             (!!errors.userName ||
        //               !!errors.userPhone ||
        //               !!errors.userAddress ||
        //               !!errors.userDetailedAddress))
        //         }
        //       />
        //     </div>
        //   </div>
        // </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-row mt-4 sm:col-span-2 lg:col-span-3">
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

          <div className="col-span-1 sm:col-span-2 lg:col-span-2  h-full">
            <div className="card-shadow p-6 shadow-lg rounded-t-3xl">
              <BookingType currentStep={currentStep} />
            </div>
            <div className="card-shadow p-6 shadow-lg rounded-b-3xl">
              {currentStep === 1 && (
                <BookingServiceSelected
                  values={values}
                  setFieldValue={setFieldValue}
                />
              )}
              {currentStep === 2 && <BookingDate />}
              {currentStep === 3 && <UserInformation />}
            </div>
            <div className="card-shadow p-6 rounded-b-3xl shadow-lg">
              <Buttons
                currentStep={currentStep}
                onClickNext={() => handleNextStep(validateForm, values)}
                onClickBack={handlePreviousStep}
                disabledBack={currentStep === 1}
                disabledNext={
                  (currentStep === 1 &&
                    values.services.filter((service) => service.selected)
                      .length === 0) ||
                  (currentStep === 3 &&
                    (!!errors.userName ||
                      !!errors.userPhone ||
                      !!errors.userAddress ||
                      !!errors.userDetailedAddress))
                }
              />
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 h-full sm:mb-4">
            <BookingSummery
              service="تنظيف المنازل"
              items={["تنظيف المنازل (1)"]}
              total={55}
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default BookingPage;
