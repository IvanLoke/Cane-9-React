import React from "react";

const Button = ({ children, onClick, type, className, index, page }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-[12px] ${index === page ? "text-[#FF6635] font-bold" : ""} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
