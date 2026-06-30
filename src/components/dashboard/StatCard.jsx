export default function StatCard({ title, value, icon: Icon, subtitle }) {
  return (
    <div className="bg-white rounded-[28px] p-6 shadow-[var(--shadow)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-purple-400 font-medium">{title}</p>

          <h2 className="text-3xl font-bold text-[var(--text)] mt-2">
            {value}
          </h2>

          <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
          <Icon size={28} />
        </div>
      </div>
    </div>
  );
}