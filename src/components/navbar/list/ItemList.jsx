import React from "react";
import Link from "next/link";

function ItemList() {
  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "الخدمات", path: "/service" },
    { name: "من نحن", path: "/about" },
    { name: "اتصل بنا", path: "/contact" },
  ];

  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-4">
      {navLinks.map((link, index) => (
        <li
          key={index}
          className="flex hover:text-blue-500 cursor-pointer item-name"
        >
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
    </div>
  );
}

export default ItemList;
