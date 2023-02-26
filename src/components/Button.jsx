import React from "react";

const Button = ({ children, onClick, type, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-[12px] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
