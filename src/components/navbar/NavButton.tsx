import React from "react";
import { useNavigate } from "react-router-dom";

interface NavButtonProps {
  icon: string;
  label?: string;
  path: string;
  isActive?: boolean;
  isLarge?: boolean; // Додаємо проп для збільшення іконки
}

const NavButton: React.FC<NavButtonProps> = ({
  icon,
  label,
  path,
  isActive = false,
  isLarge = false, // Встановлюємо стандартне значення для isLarge
}) => {
  const navigate = useNavigate();

  return (
    <li className="flex flex-col items-center">
      <button
        className={`flex flex-col items-center text-center space-y-1 ${
          isActive ? "text-black" : "text-gray-500"
        }`}
        onClick={() => navigate(path)}
      >
        <img
          src={icon}
          alt={label || "icon"}
          className={`w-6 h-6 ${isLarge ? "w-9 h-9" : ""}`} // Збільшуємо розмір, якщо isLarge = true
        />
        {label && <span className="text-xs">{label}</span>}
      </button>
    </li>
  );
};

export default NavButton;
