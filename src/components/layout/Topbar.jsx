import { Search, CalendarDays } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Topbar() {
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/dashboard/patients": "Patients",
    "/dashboard/new-patient": "New Patient",
    "/dashboard/records": "Health Records",
    "/dashboard/analytics": "Analytics",
  };

  const title = pageTitles[location.pathname] || "Dashboard";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white rounded-[28px] px-5 lg:px-8 py-5 shadow-[var(--shadow)]">
      {/* Left */}
      <div className="">
        <h1 className="text-3xl font-bold text-[var(--text)]">
          {title}
        </h1>

        <p className="text-gray-500 mt-1">
          Hospital Medical Health Record Management System
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-5 w-full lg:w-auto">
        {/* Search */}
        {/*<div className="flex items-center gap-3 bg-[#F8F5FF] px-5 py-3 rounded-2xl w-full lg:w-80">
          <Search
            size={18}
            className="text-purple-500"
          />

          <input
            type="text"
            placeholder="Search patients..."
            className="bg-transparent outline-none w-full"
          />
        </div>*/}

        {/* Date */}
        <div
          className="flex items-center gap-2
                     bg-[#F8F5FF]
                     px-5 py-3
                     rounded-2xl"
        >
          <CalendarDays
            size={18}
            className="text-purple-500"
          />

          <span className="text-sm font-medium">
            {today}
          </span>
        </div>

        {/* Hospital Logo */}
        <div
          className="w-14 h-14
                     rounded-2xl
                     bg-[var(--primary)]
                     text-white
                     flex  items-center justify-center
                     font-bold text-xl"
        >
          HIM
        </div>
      </div>
    </header>
  );
}