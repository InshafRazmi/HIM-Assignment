import { createContext, useState } from "react";
import patientsData from "../components/data/patients";

const PatientsContext = createContext();

export function PatientsProvider({ children }) {
  const [patients, setPatients] = useState(patientsData);

  const addPatient = (newPatient) => {
    setPatients((prevPatients) => [...prevPatients, newPatient]);
  };

  const deletePatient = (id) => {
    setPatients((prevPatients) =>
      prevPatients.filter((patient) => patient.id !== id)
    );
  };

  const updatePatient = (updatedPatient) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient
      )
    );
  };

  const getPatientById = (id) => {
    return patients.find((patient) => patient.id === id);
  };

  return (
    <PatientsContext.Provider
      value={{
        patients,
        addPatient,
        deletePatient,
        updatePatient,
        getPatientById,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
}

export default PatientsContext;