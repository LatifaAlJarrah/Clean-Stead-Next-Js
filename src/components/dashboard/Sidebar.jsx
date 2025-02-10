// import { Home, FileText, Settings, LogOut, Calendar } from "lucide-react";
// import Logo from "@/components/navbar/logo/Logo"
// import Link from "next/link";
// const Sidebar = () => {
//   return (
//     <div className="h-screen w-64 bg-white shadow-lg flex flex-col">
//       <div className="p-4 text-xl font-bold text-blue-600">
//         <Logo steadColor={"text-custom-blue"} id={1} />
//       </div>
//       <nav className="flex-1 mt-4">
//         <ul className="space-y-4 px-4">
//           <li className="flex items-center text-custom-green hover:text-custom-blue cursor-pointer">
//             <Home />
//             <span className="mr-2">نظرة عامة</span>
//           </li>
//           {/* <li className="flex items-center text-custom-green hover:text-custom-blue cursor-pointer">
//             <User />
//             <span className="mr-2">الحجوزات</span>
//           </li> */}
//           <li>
//             <Link
//               href="/dashboard/bookings"
//               className="flex items-center gap-2 text-gray-700 hover:text-blue-500"
//             >
//               <Calendar />
//               الحجوزات
//             </Link>
//           </li>
//           <li className="flex items-center text-custom-green hover:text-custom-blue cursor-pointer">
//             <FileText />
//             <span className="mr-2">التقارير</span>
//           </li>
//           <li className="flex items-center text-custom-green hover:text-custom-blue cursor-pointer">
//             <Settings />
//             <span className="mr-2">الإعدادات</span>
//           </li>
//         </ul>
//       </nav>
//       <div className="p-4 text-gray-600 border-t flex items-center space-x-2 cursor-pointer hover:text-red-500">
//         <LogOut />
//         <span>تسجيل خروج</span>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
"use client";

import { usePathname } from "next/navigation";
import { Home, Calendar, FileText, Settings, LogOut } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const currentPath = usePathname(); // ✅ الحل الصحيح للحصول على المسار الحالي

  return (
    <div className="w-64 bg-white h-screen p-4 shadow-md">
      <h2 className="text-xl font-bold mb-6">كلين سيد</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center gap-2 p-2 rounded-lg ${
                currentPath === "/dashboard"
                  ? "bg-blue-50 border-r-4 border-blue-500 text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              <Home />
              نظرة عامة
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/bookings"
              className={`flex items-center gap-2 p-2 rounded-lg ${
                currentPath === "/dashboard/bookings"
                  ? "bg-blue-50 border-r-4 border-blue-500 text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              <Calendar />
              الحجوزات
            </Link>
          </li>
          <li className="flex items-center text-custom-green hover:text-custom-blue cursor-pointer">
            <FileText />
            <span className="mr-2">التقارير</span>
          </li>
          <li className="flex items-center text-custom-green hover:text-custom-blue cursor-pointer">
            <Settings />
            <span className="mr-2">الإعدادات</span>
          </li>
        </ul>
      </nav>
      <div className="p-4 text-gray-600 border-t flex items-center space-x-2 cursor-pointer hover:text-red-500">
        <LogOut />
        <span>تسجيل خروج</span>
      </div>
    </div>
  );
};

export default Sidebar;
