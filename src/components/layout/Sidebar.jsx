import { NavLink } from "react-router-dom";
import { navigation } from "../utils/navigation.js";
import logo from '../assets/images/logo.png'

export default function Sidebar( { mobile = false, onLinkClick } ) {
  return (
    <aside
      className={`
    w-72 min-h-[calc(100vh-32px)]
    m-4 rounded-[32px] p-6
    bg-white/70 backdrop-blur-xl
    shadow-[var(--shadow)]
    transition-all duration-1000 ease-in-out
    animate-in slide-in-from-left
    ${mobile ? "min-h-[calc(100vh-32px)]" : ""}
  `}
    >
      <div className="">
        <div className=" flex items-center justify-center  ">
          <img
            src={logo}
            alt="Hospital Logo"
            className=" w-[200px] h-[190px] object-obtain drop-shadow-sm"
          />
        </div>

        <h1 className="flex  text-2xl font-bold text-[var(--text)] justify-center items-center ">
          HIM System
        </h1>

        <p className="flex text-sm text-purple-400 justify-center mb-5">
          Health Record Manager
        </p>
      </div>

      <nav className="space-y-3">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={onLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${isActive
                  ? "bg-[var(--primary)] text-white shadow-lg scale-[1.02]"
                  : "text-purple-500 hover:bg-purple-100 hover:text-purple-700"
                }`
              }
            >
              <Icon size={21} />
              <span className="font-medium">{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}