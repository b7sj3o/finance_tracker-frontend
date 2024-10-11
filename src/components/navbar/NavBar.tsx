import { Outlet, useLocation } from "react-router-dom";
import {
  graphIcon,
  activeGraphIcon,
  homeIcon,
  activeHomeIcon,
  plusIcon,
  activePlusIcon,
} from "../../assets";
import NavButton from "./NavButton";
import { useEffect, useState } from "react";

const NavBar: React.FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname); // Оновлюємо шлях при зміні маршруту
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-440">
        <ul className="flex justify-around px-4 py-2">
          <NavButton
            icon={currentPath === "/" ? activeHomeIcon : homeIcon}
            label="Home"
            path="/"
            isActive={currentPath === "/"}
          />
          <NavButton
            icon={
              currentPath === "/add-transaction" ? activePlusIcon : plusIcon
            }
            path="/add-transaction"
            isActive={currentPath === "/add-transaction"}
            isLarge
          />
          <NavButton
            icon={currentPath === "/insight" ? activeGraphIcon : graphIcon}
            label="Insight"
            path="/insight"
            isActive={currentPath === "/insight"}
          />
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
