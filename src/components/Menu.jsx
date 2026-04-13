import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Menu = () => {
  const linkBase =
    "px-4 py-1.5 rounded-full font-medium transition-all duration-300";
  const linkInactive =
    "text-white hover:bg-[#7AD180] hover:text-[#1c9770ff]";
  const linkActive =
    "bg-white text-[#1c9770ff] shadow-md";

  return (
    <header className="w-full bg-[#1c9770ff] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        <nav className="flex items-center gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/app"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            App
          </NavLink>

          <NavLink
            to="/suporte"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Suporte
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Menu;