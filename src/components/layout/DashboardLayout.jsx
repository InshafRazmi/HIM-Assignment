import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";

export default function DashboardLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background lg:flex">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <main className="flex-1 p-4 lg:p-6 overflow-x-hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <h1 className="font-bold text-xl text-[var(--text)]">
            HIM System
          </h1>

          <Sheet
            open={mobileSidebarOpen}
            onOpenChange={setMobileSidebarOpen}
          >
            <SheetTrigger asChild>
              <button className="p-3 rounded-2xl bg-white shadow-[var(--shadow-sm)] text-purple-700">
                <Menu size={22} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-80 p-0 bg-transparent border-none"
            >
              <Sidebar
                mobile
                onLinkClick={() => setMobileSidebarOpen(false)}
              />
            </SheetContent>
          </Sheet>
        </div>

        <Topbar />

        <div className="mt-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}