import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export default function PatientDetailsCard({ patient }) {
  return (
    <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-2">
      <div>
        <h2 className="text-2xl font-bold text-[var(--text)]">
          {patient.name}
        </h2>

        <div className="flex gap-2 mt-2">
          <Badge>{patient.mrn}</Badge>
          <Badge variant="outline">{patient.status}</Badge>
        </div>
      </div>

      <Section title="Patient Information">
        <Info title="MRN" value={patient.mrn} />
        <Info title="NIC" value={patient.nic} />
        <Info title="Full Name" value={patient.name} />
        <Info title="DOB" value={patient.dob} />
        <Info title="Age" value={patient.age} />
        <Info title="Gender" value={patient.gender} />
        <Info title="Blood Group" value={patient.blood} />
        <Info title="Marital Status" value={patient.maritalStatus} />
        <Info title="Occupation" value={patient.occupation} />
      </Section>

      <Section title="Contact Information">
        <Info title="Phone" value={patient.phone} />
        <Info title="Emergency Contact" value={patient.emergencyContact} />
        <Info title="Address" value={patient.address} />
      </Section>

      <Section title="Medical Information">
        <Info title="Diagnosis" value={patient.diagnosis} />
        <Info title="Treatment" value={patient.treatment} />
        <Info title="Medications" value={patient.medications} />
        <Info title="Allergies" value={patient.allergies} />
        <Info title="Past Medical History" value={patient.medicalHistory} />
      </Section>

      <Section title="Hospital Information">
        <Info title="Attending Doctor" value={patient.attendingDoctor} />
        <Info title="Department" value={patient.department} />
        <Info title="Admission Date" value={patient.admissionDate} />
        <Info title="Discharge Date" value={patient.dischargeDate || "Not discharged"} />
        <Info title="Created At" value={patient.createdAt} />
      </Section>

      <div>
        <h3 className="font-semibold text-[var(--text)]">Doctor Notes</h3>
        <p className="mt-2 text-gray-600 bg-purple-50 rounded-2xl p-4">
          {patient.doctorNotes || "No notes available"}
        </p>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <Separator className="mb-4" />

      <h3 className="text-lg font-bold text-[var(--text)] mb-4">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div className="bg-purple-50 rounded-2xl p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <h4 className="font-semibold mt-1 text-[var(--text)]">
        {value || "Not provided"}
      </h4>
    </div>
  );
}