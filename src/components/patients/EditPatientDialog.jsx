import { useState } from "react";
import { SquarePen } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import PatientForm from "./PatientForm";

export default function EditPatientDialog({ patient }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="p-2 rounded-xl hover:bg-green-100 text-green-600 transition">
          <SquarePen size={18} />
        </button>
      </DialogTrigger>

      <DialogContent className="w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto p-7 rounded-2xl">
        <DialogHeader>
          <DialogTitle>Edit Patient</DialogTitle>
        </DialogHeader>

        <PatientForm
          patient={patient}
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}