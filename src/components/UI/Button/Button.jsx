import React from "react";
const Button = ({ text, icon: Icon }) => {
  return (
    <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-2 py-2 md:px-6 md:py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
      {" "}
      {Icon && <Icon className="w-5 h-5" />} <span>{text}</span>{" "}
    </button>
  );
};
export default Button;
