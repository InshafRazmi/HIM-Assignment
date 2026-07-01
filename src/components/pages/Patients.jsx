import { useState } from "react";
import { Search } from "lucide-react";

import NewPatientDialog from "../patients/NewPatientDialog";
import PatientTable from "../patients/PatientTable";
import { Input } from "../ui/input";

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="relative w-full sm:max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400"
          />

          <Input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-11 rounded-2xl bg-white h-[40px]"
          />
        </div>

        <NewPatientDialog />
      </div>

      <PatientTable searchTerm={searchTerm} />
    </>
  );
}