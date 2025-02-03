import React from "react";
import "@/app/globals.css";

const BookingSummery = ({ service, items, total }) => {
  return (
    <aside className="">
      <div className="bg-blue-50 rounded-t-lg shadow">
        <h2 className="text-lg font-bold p-4">ملخص</h2>
      </div>
      <div className="bg-blue-50 rounded-b-lg shadow mt-2">
        <dl className="p-4">
          <dt className="text-custom-gray mb-1">الخدمة</dt>
          <dd className="mb-4">{service}</dd>
          <dt className="text-custom-gray mb-1">العناصر المختارة</dt>
          <dd className="pl-4 mb-4">
            {items.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </dd>
          <dt className="text-custom-gray mb-1">إجمالي السعر</dt>
          <dd className="font-bold">${total}</dd>
        </dl>
      </div>
    </aside>
  );
};

export default BookingSummery;
