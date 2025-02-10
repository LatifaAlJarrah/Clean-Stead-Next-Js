"use client";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 6351,
      name: "محمد الهيل",
      address: "النصر، شارع النصر",
      price: "150$",
      time: "22/5/2022 | 09:30 AM",
      status: "معلق",
      repeat: "مرة واحدة",
    },
    {
      id: 5451,
      name: "محمد الهيل",
      address: "الكرامة، شارع الكرامة",
      price: "356$",
      time: "22/5/2022 | 09:30 AM",
      status: "تم القبول",
      repeat: "مرة واحدة",
    },
    {
      id: 2548,
      name: "محمد الهيل",
      address: "الكرامة، شارع الكرامة",
      price: "648$",
      time: "22/5/2022 | 09:30 AM",
      status: "تم الرفض",
      repeat: "مرة واحدة",
    },
  ]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-100 p-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-lg font-bold mb-4">الحجوزات</h1>
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-2">رقم الحجز</th>
                  <th className="border border-gray-200 p-2">الاسم</th>
                  <th className="border border-gray-200 p-2">العنوان</th>
                  <th className="border border-gray-200 p-2">السعر</th>
                  <th className="border border-gray-200 p-2">الوقت</th>
                  <th className="border border-gray-200 p-2">الحالة</th>
                  <th className="border border-gray-200 p-2">تكرار العمل</th>
                  <th className="border border-gray-200 p-2">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="border border-gray-200 p-2">{booking.id}</td>
                    <td className="border border-gray-200 p-2">
                      {booking.name}
                    </td>
                    <td className="border border-gray-200 p-2">
                      {booking.address}
                    </td>
                    <td className="border border-gray-200 p-2">
                      {booking.price}
                    </td>
                    <td className="border border-gray-200 p-2">
                      {booking.time}
                    </td>
                    <td
                      className={`border border-gray-200 p-2 ${
                        booking.status === "تم القبول"
                          ? "text-green-500"
                          : booking.status === "تم الرفض"
                          ? "text-red-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {booking.status}
                    </td>
                    <td className="border border-gray-200 p-2">
                      {booking.repeat}
                    </td>
                    <td className="border border-gray-200 p-2 flex gap-2 justify-center">
                      <button className="text-blue-500 hover:underline">
                        تعديل
                      </button>
                      <button className="text-red-500 hover:underline">
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Bookings;
