import usePatients from "../../hooks/usePatients";
import PatientDetailsDialog from "../patients/PatientDetailsDialog";
import { Badge } from "../ui/badge";
import { Eye } from "lucide-react";

export default function HealthRecord() {
  const { patients } = usePatients();

  return (
    <div className="bg-white rounded-[30px] shadow-[var(--shadow)] overflow-hidden">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-[var(--text)]">
          Health Records
        </h1>
        <p className="text-gray-500 mt-1">
          Click a patient to view complete health record.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px]">
          <thead className="bg-purple-50">
            <tr>
              <th className="text-left p-5">Patient</th>
              <th>Blood Group</th>
              <th>Diagnosis</th>
              <th>Status</th>
              <th>Record</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient) => (
              <tr
                key={patient.id}
                className="border-b hover:bg-purple-50 transition"
              >
                <td className="p-5 font-semibold">{patient.name}</td>

                <td>{patient.blood}</td>

                <td>{patient.diagnosis}</td>

                <td>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    {patient.status}
                  </Badge>
                </td>

                <td>
                  <PatientDetailsDialog
                    patient={patient}
                    trigger={
                      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-100 text-purple-700 hover:bg-purple-200 transition">
                        <Eye size={17} />
                        View Record
                      </button>
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {patients.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          No health records available.
        </div>
      )}
    </div>
  );
}