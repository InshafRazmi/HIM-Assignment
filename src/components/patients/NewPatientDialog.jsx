import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { Button } from "../ui/button";

import PatientForm from "./PatientForm";

export default function NewPatientDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>New Patient</Button>
      </DialogTrigger>

      <DialogContent className="w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto p-7 rounded-2xl">
        <DialogHeader>
          <DialogTitle>Register New Patient</DialogTitle>
        </DialogHeader>

        <PatientForm
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}