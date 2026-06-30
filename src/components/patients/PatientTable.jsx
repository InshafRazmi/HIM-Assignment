import usePatients from "../../hooks/usePatients";
import PatientRow from "./PatientRow";

export default function PatientTable({ searchTerm = "" }) {
  const { patients } = usePatients();

  const filteredPatients = patients.filter((patient) => {
    const search = searchTerm.toLowerCase();

    return (
      patient.name?.toLowerCase().includes(search) ||
      patient.phone?.toLowerCase().includes(search) ||
      patient.diagnosis?.toLowerCase().includes(search) ||
      patient.blood?.toLowerCase().includes(search) ||
      patient.mrn?.toLowerCase().includes(search) ||
      patient.nic?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="mt-6 bg-white rounded-[30px] overflow-hidden shadow-[var(--shadow)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px]">
          <thead className="bg-purple-50">
            <tr>
              <th className="text-left p-5">Patient</th>
              <th>Blood Group</th>
              <th>Phone</th>
              <th>Diagnosis</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredPatients.map((patient) => (
              <PatientRow key={patient.id} patient={patient} />
            ))}
          </tbody>
        </table>
      </div>

      {filteredPatients.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No patients found.
        </div>
      )}
    </div>
  );
}