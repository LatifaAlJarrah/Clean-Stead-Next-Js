// import React from "react";

// const Buttons = ({
//   currentStep,
//   onClickNext,
//   onClickBack,
//   onSubmit,
//   disabledNext,
//   disabledBack,
// }) => {
//   return (
//     <div className="flex justify-between">
//       <button
//         onClick={onClickBack}
//         disabled={disabledBack}
//         className={`px-4 py-2 rounded-lg ${
//           disabledBack ? "bg-gray-300" : "bg-blue-500 text-white"
//         }`}
//       >
//         الرجوع
//       </button>
//       <button
//         onClick={currentStep === 3 ? onSubmit : onClickNext}
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
import React from "react";

const Buttons = ({
  currentStep,
  onClickNext,
  onClickBack,
  disabledNext,
  buttonColor,
}) => {
  return (
    <div className="flex justify-between">
      <button
        onClick={onClickBack}
        disabled={currentStep === 1}
        className={`px-4 py-2 rounded-lg ${
          currentStep === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
        }`}
      >
        الرجوع
      </button>
      <button
        onClick={onClickNext}
        disabled={disabledNext}
        className={`px-4 py-2 rounded-lg ${
          disabledNext ? "bg-gray-300" : "bg-blue-500 text-white"
        }`}
      >
        {currentStep === 3 ? "إرسال" : "استمرار"}
      </button>
    </div>
  );
};

export default Buttons;
