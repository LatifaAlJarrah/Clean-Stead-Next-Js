// "use client";
// import React, { useState } from "react";
// import "@/app/globals.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
// import BookingServices from "./BookingServices";

// const BookingServiceSelected = ({ values, setFieldValue }) => {
//   const [expandedService, setExpandedService] = useState(null);

//   const services = [
//     "تنظيف المنازل",
//     "تنظيف التجاري",
//     "تنظيف النوافذ",
//     "تنظيف السجاد",
//   ];

//   const toggleBookingServices = (serviceIndex) => {
//     setExpandedService((prev) => (prev === serviceIndex ? null : serviceIndex));
//   };

//   return (
//     <div className="lg:col-start-1 lg:col-end-3 ">
//       <section>
//         <div className="p-6">
//           <ul className="space-y-4">
//             {services.map((service, index) => (
//               <li
//                 key={index}
//                 className="bg-blue-50 p-4 rounded-lg flex flex-col gap-4 transition"
//               >
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-800">{service}</span>
//                   <button
//                     className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-md text-custom-blue"
//                     onClick={() => toggleBookingServices(index)}
//                   >
//                     {expandedService === index
//                       ? "إخفاء الخدمات"
//                       : "رؤية الخدمات"}
//                     <FontAwesomeIcon
//                       icon={expandedService === index ? faAngleUp : faAngleDown}
//                       className="w-4 h-4"
//                     />
//                   </button>
//                 </div>

//                 {expandedService === index && (
//                   <div
//                     className="w-full"
//                     style={{ maxHeight: "60vh", overflowY: "auto" }}
//                   >
//                     <BookingServices
//                       values={values}
//                       setFieldValue={setFieldValue}
//                     />
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BookingServiceSelected;
"use client";
import React, { useState } from "react";
import "@/app/globals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import BookingServices from "./BookingServices";

const BookingServiceSelected = ({ values, setFieldValue }) => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    "تنظيف المنازل",
    "تنظيف التجاري",
    "تنظيف النوافذ",
    "تنظيف السجاد",
  ];

  const toggleBookingServices = (serviceIndex) => {
    setExpandedService((prev) => (prev === serviceIndex ? null : serviceIndex));
  };

  return (
    <div className="lg:col-start-1 lg:col-end-3 ">
      <section>
        <div className="p-6">
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li
                key={index}
                className="bg-blue-50 p-4 rounded-lg flex flex-col gap-4 transition"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">{service}</span>
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-md text-custom-blue"
                    onClick={() => toggleBookingServices(index)}
                  >
                    {expandedService === index
                      ? "إخفاء الخدمات"
                      : "رؤية الخدمات"}
                    <FontAwesomeIcon
                      icon={expandedService === index ? faAngleUp : faAngleDown}
                      className="w-4 h-4"
                    />
                  </button>
                </div>

                {expandedService === index && (
                  <div
                    className="w-full"
                    style={{ maxHeight: "60vh", overflowY: "auto" }}
                  >
                    <BookingServices
                      values={values}
                      setFieldValue={setFieldValue}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BookingServiceSelected;