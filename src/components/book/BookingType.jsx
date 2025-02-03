import React from "react";

import '@/app/globals.css';
const BookingType = () => {
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
          <div className="w-10 h-10 flex items-center justify-center bg-blue-50 text-black rounded-full mx-1">
            {type.id}
          </div>
          <span className="text-gray-500">{type.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BookingType;
