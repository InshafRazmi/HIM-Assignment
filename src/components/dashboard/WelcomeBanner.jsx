import { Link } from "react-router-dom";
import { UserPlus, FolderHeart } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <section className="rounded-[32px] p-10 flex justify-between items-center bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 text-white shadow-[var(--shadow)]">
      <div className="max-w-xl">
        <span className="text-lg font-medium opacity-90">
          👋 Good Morning
        </span>

        <h1 className="text-4xl font-bold mt-3">
          Welcome to HIM System
        </h1>

        <p className="mt-4 text-purple-100 leading-7">
          Manage patient medical records securely, efficiently, and with confidence.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            to="/dashboard/patients"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-purple-700 font-semibold hover:scale-105 transition"
          >
            <UserPlus size={20} />
            Add Patient
          </Link>

          <Link
            to="/dashboard/records"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/40 hover:bg-white/10 transition"
          >
            <FolderHeart size={20} />
            View Records
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center">
        <div className="text-8xl">🏥</div>
      </div>
    </section>
  );
}