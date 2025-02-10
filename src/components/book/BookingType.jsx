// import React from "react";

// import "@/app/globals.css";
// const BookingType = () => {
//   const bookingType = [
//     { id: 1, name: "اختر الخدمات" },
//     { id: 2, name: "التاريخ و الوقت" },
//     { id: 3, name: "معلوماتك" },
//   ];

//   return (
//     <div className="flex items-center justify-between w-full">
//       {bookingType.map((type) => (
//         <div
//           key={type.id}
//           className="flex items-center justify-between text-center"
//         >
//           <div className={`w-10 h-10 flex items-center justify-center ${type.id == 1 ? "bg-blue-500 text-white" : "bg-blue-50"} text-custom-gray rounded-full mx-1`}>
//             {type.id}
//           </div>
//           <span className="text-custom-gray">{type.name}</span>
//           {type.id !== 3 && (
//             <div
//               key={type.id}
//               className="flex w-44 h-1 bg-blue-500 mx-10"
//             ></div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookingType;
import React from "react";
import "@/app/globals.css";

const BookingType = ({ currentStep }) => {
  const bookingType = [
    { id: 1, name: "اختر الخدمات" },
    { id: 2, name: "التاريخ و الوقت" },
    { id: 3, name: "معلوماتك" },
  ];

  return (
    <div className="flex items-center justify-between w-full">
      {bookingType.map((type) => (
        <div
          key={type.id}
          className="flex items-center justify-between text-center"
        >
          <div
            className={`w-10 h-10 flex items-center justify-center ${
              currentStep >= type.id ? "bg-blue-500 text-white" : "bg-blue-50"
            } text-custom-gray rounded-full mx-1`}
          >
            {type.id}
          </div>
          <span
            className={`${
              currentStep >= type.id ? "xl:font-bold font-normal text-black" : "text-custom-gray"
            }`}
          >
            {type.name}
          </span>
          {type.id !== 3 && (
            <div
              className={`flex xl:w-44 md:w-32 w-20 h-1 ${
                currentStep > type.id ? "bg-blue-500" : "bg-gray-300"
              } xl:mx-10 md:mx-8 mx-4`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookingType;