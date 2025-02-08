// import React from "react";

// const Buttons = ({
//   currentStep,
//   onClickNext,
//   onClickBack,
//   disabledNext,
// }) => {
//   return (
//     <div className="flex justify-between">
//       <button
//         onClick={onClickBack}
//         disabled={currentStep === 1}
//         className={`px-4 py-2 rounded-lg ${
//           currentStep === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
//         }`}
//       >
//         الرجوع
//       </button>

//       <button
//         onClick={onClickNext}
//         disabled={disabledNext}
//         className={`px-4 py-2 rounded-lg ${
//           disabledNext ? "bg-gray-300" : "bg-blue-500 text-white"
//         }`}
//       >
//         {currentStep === 3 ? "إرسال" : "استمرار"}
//       </button>
//     </div>
//   );
// };

// export default Buttons;
"use client";
import React from "react";

const Buttons = ({
  currentStep,
  onClickNext,
  onClickBack,
  disabledBack,
  disabledNext,
  disabledSubmit,
}) => {
  return (
    <div className="flex justify-between">
      <button
        type="button"
        onClick={onClickBack}
        disabled={disabledBack}
        className={`px-4 py-2 rounded-lg ${
          currentStep === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
        }`}
      >
        رجوع
      </button>
      <button
        type="button"
        onClick={onClickNext}
        disabled={disabledNext || disabledSubmit}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
      >
        {currentStep === 3 ? "تأكيد الحجز" : "استمرار"}
      </button>
    </div>
  );
};

export default Buttons;
