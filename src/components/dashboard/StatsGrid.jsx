import {
  Users,
  UserRoundCheck,
  UserRoundX,
  Activity,
} from "lucide-react";

import StatCard from "./StatCard";
import usePatients from "../../hooks/usePatients";

export default function StatsGrid() {
  const { patients } = usePatients();

  const totalPatients = patients.length;

  const malePatients = patients.filter(
    (patient) => patient.gender === "Male"
  ).length;

  const femalePatients = patients.filter(
    (patient) => patient.gender === "Female"
  ).length;

  const activePatients = patients.filter(
    (patient) => patient.status === "Active"
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 m-4">
      <StatCard
        title="Total Patients"
        value={totalPatients}
        subtitle="Registered patients"
        icon={Users}
      />

      <StatCard
        title="Male Patients"
        value={malePatients}
        subtitle="Male patients"
        icon={UserRoundCheck}
      />

      <StatCard
        title="Female Patients"
        value={femalePatients}
        subtitle="Female patients"
        icon={UserRoundX}
      />

      <StatCard
        title="Active Patients"
        value={activePatients}
        subtitle="Currently monitored"
        icon={Activity}
      />
    </div>
  );
}