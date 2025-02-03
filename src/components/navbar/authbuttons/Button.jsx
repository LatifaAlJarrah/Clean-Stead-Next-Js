import React from "react";
import "@/app/globals.css";
import Link from "next/link";

function Button() {
  const buttons = [
    { id: 1, name: "دخول", link: "/login" },
    { id: 2, name: "سجل الآن", link: "/book" },
  ];

  return (
    <div>
      {buttons.map((button) => (
        <Link href={button.link} key={button.id}>
          <button className={`btn ${button.id != 1 ? "btn-auth" : "btn-sign"}`}>
            {button.name}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Button;
