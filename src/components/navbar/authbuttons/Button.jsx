import React from "react";
import "@/app/globals.css";

function Button() {
  const buttons = [
    { id: 1, name: "دخول" },
    { id: 2, name: "سجل الآن" },
  ];

  return (
    <div>
      {buttons.map((button) => (
        <button className={`btn ${button.id != 1 ? "btn-auth" : "btn-sign"}`} key={button.id}>
          {button.name}
        </button>
      ))}
    </div>
  );
}

export default Button;
