import usePatients from "../../hooks/usePatients";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function Analytics() {
  const { patients } = usePatients();

  const genderData = [
    {
      name: "Male",
      value: patients.filter((p) => p.gender === "Male").length,
    },
    {
      name: "Female",
      value: patients.filter((p) => p.gender === "Female").length,
    },
    {
      name: "Other",
      value: patients.filter((p) => p.gender === "Other").length,
    },
  ];

  const bloodData = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
    (group) => ({
      name: group,
      value: patients.filter((p) => p.blood === group).length,
    })
  );

  const COLORS = [
    "#7C3AED",
    "#A855F7",
    "#C084FC",
    "#DDD6FE",
    "#6D28D9",
    "#8B5CF6",
    "#9333EA",
    "#C4B5FD",
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="bg-white rounded-[30px] shadow-[var(--shadow)] p-6">
        <h2 className="text-xl font-semibold mb-6">
          Gender Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={genderData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="value" fill="#7C3AED" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-[30px] shadow-[var(--shadow)] p-6">
        <h2 className="text-xl font-semibold mb-6">
          Blood Group Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={bloodData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
            >
              {bloodData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}