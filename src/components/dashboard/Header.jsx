import { Bell } from "lucide-react";
import Image from "next/image";
import userImage from "../../assest/images/photo.png"
const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="text-xl font-bold text-gray-800">نظرة عامة</div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-medium">محمد الهيل</span>
          <Image
            src={userImage}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
        </div>
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
