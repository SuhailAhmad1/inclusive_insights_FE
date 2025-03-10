import React from "react";

export default function FilterButton({ children, isActive, onClick }) {
  return (
    <p
      onClick={onClick}
      className={`hover:scale-105 transform transition-transform duration-300 hover:shadow-xl border-2 border-black rounded-md px-3 text-xl py-2 cursor-pointer ${
        isActive ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {children}
    </p>
  );
}
