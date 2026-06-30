import { useForm } from "react-hook-form";
import usePatients from "./usePatients";

export default function usePatientForm(patient, onSuccess) {
  const { patients, addPatient, updatePatient } = usePatients();

  const form = useForm({
    defaultValues: patient || {
      nic: "",
      name: "",
      age: "",
      dob: "",
      gender: "",
      blood: "",
      maritalStatus: "",
      phone: "",
      emergencyContact: "",
      address: "",
      occupation: "",
      diagnosis: "",
      treatment: "",
      allergies: "",
      medicalHistory: "",
      medications: "",
      doctorNotes: "",
      attendingDoctor: "",
      department: "",
      admissionDate: "",
      dischargeDate: "",
    },
  });

  const generateMRN = () => {
    const year = new Date().getFullYear();
    const number = String(patients.length + 1).padStart(4, "0");
    return `MRN-${year}-${number}`;
  };

  const onSubmit = (data) => {
    const nicExists = patients.some(
      (p) => p.nic === data.nic && p.id !== patient?.id
    );

    if (nicExists) {
      form.setError("nic", {
        type: "manual",
        message: "NIC already exists. Patient record already registered.",
      });
      return;
    }

    if (patient) {
      updatePatient({
        ...patient,
        ...data,
        age: Number(data.age),
      });
    } else {
      addPatient({
        id: Date.now(),
        mrn: generateMRN(),
        ...data,
        age: Number(data.age),
        status: "Active",
        createdAt: new Date().toISOString(),
      });
    }

    form.reset();
    onSuccess?.();
  };

  return {
    ...form,
    onSubmit,
  };
}