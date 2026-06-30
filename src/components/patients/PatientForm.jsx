import usePatientForm from "../../hooks/usePatientForm";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select.jsx";

import bloodGroups from "../../components/constants/bloodGroups";
import genders from "../../components/constants/genders";

export default function PatientForm({ patient = null, onSuccess }) {
  const {
    register,
    handleSubmit,
    reset,
    onSubmit,
    formState: { errors },
  } = usePatientForm(patient, onSuccess);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div>
          <Label className="my-2">NIC *</Label>
          <Input placeholder="Enter NIC number" {...register("nic")} />
          {errors.nic && (
            <p className="text-sm text-red-500 mt-1">{errors.nic.message}</p>
          )}
        </div>

        <div>
          <Label className="my-2">Full Name *</Label>
          <Input placeholder="Enter patient name" {...register("name")} />
        </div>

        <div>
          <Label className="my-2">Age</Label>
          <Input type="number" placeholder="Enter age" {...register("age")} />
        </div>

        <div>
          <Label className="my-2">Date of Birth</Label>
          <Input type="date" {...register("dob")} />
        </div>

        <div>
          <Label className="my-2">Gender</Label>
          <Select
            defaultValue={patient?.gender}
            onValueChange={(value) =>
              register("gender").onChange({
                target: { name: "gender", value },
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>

            <SelectContent>
              {genders.map((gender) => (
                <SelectItem key={gender} value={gender}>
                  {gender}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="my-2">Blood Group</Label>
          <Select
            defaultValue={patient?.blood}
            onValueChange={(value) =>
              register("blood").onChange({
                target: { name: "blood", value },
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Blood Group" />
            </SelectTrigger>

            <SelectContent>
              {bloodGroups.map((group) => (
                <SelectItem key={group} value={group}>
                  {group}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="my-2">Marital Status</Label>
          <Input placeholder="Single / Married" {...register("maritalStatus")} />
        </div>

        <div>
          <Label className="my-2">Phone</Label>
          <Input placeholder="0771234567" {...register("phone")} />
        </div>

        <div>
          <Label className="my-2">Emergency Contact</Label>
          <Input
            placeholder="Emergency phone number"
            {...register("emergencyContact")}
          />
        </div>

        <div>
          <Label className="my-2">Occupation</Label>
          <Input placeholder="Enter occupation" {...register("occupation")} />
        </div>

        <div>
          <Label className="my-2">Attending Doctor</Label>
          <Input placeholder="Dr. Name" {...register("attendingDoctor")} />
        </div>

        <div>
          <Label className="my-2">Department</Label>
          <Input placeholder="General Medicine" {...register("department")} />
        </div>

        <div>
          <Label className="my-2">Admission Date</Label>
          <Input type="date" {...register("admissionDate")} />
        </div>

        <div>
          <Label className="my-2">Discharge Date</Label>
          <Input type="date" {...register("dischargeDate")} />
        </div>

        <div className="md:col-span-2">
          <Label className="my-2">Address</Label>
          <Input placeholder="Enter address" {...register("address")} />
        </div>
      </div>

      <div>
        <Label className="my-2">Diagnosis</Label>
        <Textarea placeholder="Enter diagnosis" {...register("diagnosis")} />
      </div>

      <div>
        <Label className="my-2">Treatment</Label>
        <Textarea placeholder="Enter treatment details" {...register("treatment")} />
      </div>

      <div>
        <Label className="my-2">Medications</Label>
        <Textarea placeholder="Enter current medications" {...register("medications")} />
      </div>

      <div>
        <Label className="my-2">Allergies</Label>
        <Textarea placeholder="Enter allergies if any" {...register("allergies")} />
      </div>

      <div>
        <Label className="my-2">Past Medical History</Label>
        <Textarea
          placeholder="Enter past medical history"
          {...register("medicalHistory")}
        />
      </div>

      <div>
        <Label className="my-2">Doctor Notes</Label>
        <Textarea placeholder="Enter doctor notes" {...register("doctorNotes")} />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline" onClick={() => reset()}>
          Clear
        </Button>

        <Button type="submit">
          {patient ? "Update Patient" : "Save Patient"}
        </Button>
      </div>
    </form>
  );
}