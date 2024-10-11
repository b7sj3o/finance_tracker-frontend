import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const ModalButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  type,
}) => {
  return (
    <button
      className={`text-white text-base px-3 py-2 rounded-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-transparent md:px-6 ${className}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default ModalButton;
