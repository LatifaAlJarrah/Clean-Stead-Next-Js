// "use client";

// import React from "react";
// import Image from "next/image";
// import RoomImage from "@/assest/images/room.png";
// import "@/app/globals.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const servicesData = [
//   {
//     id: 1,
//     category: "تنظيف المنازل",
//     services: [
//       {
//         id: 1,
//         name: "غرفة النوم",
//         price: 0,
//         image: RoomImage,
//         details: ["العناصر المختارة", "العناصر المختارة", "العناصر المختارة"],
//       },
//     ],
//   },
// ];

// // Validation Schema
// const validationSchema = Yup.object().shape({
//   services: Yup.array()
//     .of(
//       Yup.object().shape({
//         id: Yup.number().required(),
//         quantity: Yup.number()
//           .min(0, "الكمية يجب أن تكون 0 أو أكثر")
//           .required(),
//       })
//     )
//     .required("يجب اختيار خدمة واحدة على الأقل"),
// });

// const BookingServices = () => {
//   return (
//     <Formik
//       initialValues={{
//         services: servicesData[0].services.map((service) => ({
//           id: service.id,
//           quantity: 0,
//           selected: false,
//           price: 0, // إضافة السعر ليتم تحديثه داخل `Formik`
//         })),
//       }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         console.log("Form Values:", values);
//       }}
//     >
//       {({ values, setFieldValue }) => (
//         <Form className="p-6 bg-white rounded-xl shadow-md">
//           {servicesData.map((category) => (
//             <div key={category.id} className="mb-6">
//               <h3 className="text-lg font-semibold mb-4">
//                 {category.category}
//               </h3>
//               {category.services.map((service, index) => {
//                 const serviceState = values.services[index];

//                 return (
//                   <div
//                     key={service.id}
//                     className={`p-4 mb-4 border rounded-lg ${
//                       serviceState.selected
//                         ? "border-blue-500"
//                         : "border-gray-300"
//                     }`}
//                   >
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-4">
//                         <Field
//                           type="checkbox"
//                           name={`services[${index}].selected`}
//                           checked={serviceState.selected}
//                           onChange={(e) =>
//                             setFieldValue(
//                               `services[${index}].selected`,
//                               e.target.checked
//                             )
//                           }
//                           className="w-6 h-6 text-blue-500 rounded"
//                         />
//                         <Image
//                           src={service.image}
//                           alt={service.name}
//                           width={50}
//                           height={50}
//                           className="rounded-lg"
//                         />
//                         <span className="font-medium">{service.name}</span>
//                       </div>
//                       <div className="flex items-center gap-4">
//                         <button
//                           type="button"
//                           className="px-2 py-1 bg-blue-50 text-custom-gray rounded"
//                           onClick={() => {
//                             const newQuantity = Math.max(
//                               serviceState.quantity - 1,
//                               0
//                             );
//                             setFieldValue(
//                               `services[${index}].quantity`,
//                               newQuantity
//                             );
//                             setFieldValue(
//                               `services[${index}].price`,
//                               newQuantity * 5
//                             ); // تحديث السعر
//                             if (newQuantity === 0) {
//                               setFieldValue(
//                                 `services[${index}].selected`,
//                                 false
//                               );
//                             }
//                           }}
//                         >
//                           -
//                         </button>

//                         <span>{serviceState.quantity}</span>
//                         <button
//                           type="button"
//                           className="px-2 py-1 bg-blue-50 text-custom-gray rounded"
//                           onClick={() => {
//                             const newQuantity = serviceState.quantity + 1;
//                             setFieldValue(
//                               `services[${index}].quantity`,
//                               newQuantity
//                             );
//                             setFieldValue(
//                               `services[${index}].price`,
//                               newQuantity * 5
//                             ); // تحديث السعر
//                             if (!serviceState.selected) {
//                               setFieldValue(
//                                 `services[${index}].selected`,
//                                 true
//                               );
//                             }
//                           }}
//                         >
//                           +
//                         </button>
//                       </div>
//                       <span className="font-medium text-gray-700">
//                         {serviceState.price} $
//                       </span>
//                       <button
//                         type="button"
//                         onClick={() =>
//                           setFieldValue(
//                             "expandedService",
//                             values.expandedService === service.id
//                               ? null
//                               : service.id
//                           )
//                         }
//                         className="text-custom-blue mt-2"
//                       >
//                         {values.expandedService === service.id
//                           ? "إخفاء التفاصيل"
//                           : "رؤية التفاصيل"}
//                         <FontAwesomeIcon
//                           icon={
//                             values.expandedService === service.id
//                               ? faAngleUp
//                               : faAngleDown
//                           }
//                           className="w-4 h-4"
//                         />
//                       </button>
//                     </div>

//                     {values.expandedService === service.id && (
//                       <div className="mt-6">
//                         <p className="text-custom-gray">
//                           العناصر التي سيتم تنظيفها في هذه الغرفة
//                         </p>
//                         <ul className="mt-2 list-disc list-inside">
//                           {service.details.map((detail, idx) => (
//                             <li key={idx}>{detail}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default BookingServices;
"use client";
import React from "react";
import Image from "next/image";
import RoomImage from "@/assest/images/room.png";
import "@/app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Field, ErrorMessage } from "formik";

const servicesData = [
  {
    id: 1,
    category: "تنظيف المنازل",
    services: [
      {
        id: 1,
        name: "غرفة النوم",
        price: 0,
        image: RoomImage,
        details: ["العناصر المختارة", "العناصر المختارة", "العناصر المختارة"],
      },
    ],
  },
];

const BookingServices = ({ values, setFieldValue }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {servicesData.map((category) => (
        <div key={category.id} className="mb-6">
          <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
          {category.services.map((service, index) => {
            // const serviceState = values.services[index] || {
            //   id: service.id,
            //   quantity: 0,
            //   selected: false,
            //   price: 0,
            // };
            const serviceState = values.services?.[index] || {
              selected: false,
              quantity: 0,
              price: 0,
            };

            return (
              <div
                key={service.id}
                className={`p-4 mb-4 border rounded-lg ${
                  serviceState.selected ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Field
                      type="checkbox"
                      name={`services[${index}].selected`}
                      checked={serviceState.selected}
                      onChange={(e) =>
                        setFieldValue(
                          `services[${index}].selected`,
                          e.target.checked
                        )
                      }
                      className="w-6 h-6 text-blue-500 rounded"
                    />
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={50}
                      height={50}
                      className="rounded-lg"
                    />
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      className="px-2 py-1 bg-blue-50 text-custom-gray rounded"
                      onClick={() => {
                        const newQuantity = Math.max(
                          serviceState.quantity - 1,
                          0
                        );
                        setFieldValue(
                          `services[${index}].quantity`,
                          newQuantity
                        );
                        setFieldValue(
                          `services[${index}].price`,
                          newQuantity * 5
                        );
                        if (newQuantity === 0) {
                          setFieldValue(`services[${index}].selected`, false);
                        }
                      }}
                    >
                      -
                    </button>

                    <span>{serviceState.quantity}</span>
                    <button
                      type="button"
                      className="px-2 py-1 bg-blue-50 text-custom-gray rounded"
                      onClick={() => {
                        const newQuantity = serviceState.quantity + 1;
                        setFieldValue(
                          `services[${index}].quantity`,
                          newQuantity
                        );
                        setFieldValue(
                          `services[${index}].price`,
                          newQuantity * 5
                        );
                        if (!serviceState.selected) {
                          setFieldValue(`services[${index}].selected`, true);
                        }
                      }}
                    >
                      +
                    </button>
                  </div>
                  <span className="font-medium text-gray-700">
                    {serviceState.price} $
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setFieldValue(
                        "expandedService",
                        values.expandedService === service.id
                          ? null
                          : service.id
                      )
                    }
                    className="text-custom-blue mt-2"
                  >
                    {values.expandedService === service.id
                      ? "إخفاء التفاصيل"
                      : "رؤية التفاصيل"}
                    <FontAwesomeIcon
                      icon={
                        values.expandedService === service.id
                          ? faAngleUp
                          : faAngleDown
                      }
                      className="w-4 h-4"
                    />
                  </button>
                </div>

                {values.expandedService === service.id && (
                  <div className="mt-6">
                    <p className="text-custom-gray">
                      العناصر التي سيتم تنظيفها في هذه الغرفة
                    </p>
                    <ul className="mt-2 list-disc list-inside">
                      {service.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default BookingServices;
