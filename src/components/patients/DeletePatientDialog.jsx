import { useState } from "react";
import { Trash2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { Button } from "../ui/button";

import usePatients from "../../hooks/usePatients";

export default function DeletePatientDialog({ patient }) {
  const { deletePatient } = usePatients();

  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    deletePatient(patient.id);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="p-2 rounded-xl hover:bg-red-100 text-red-600 transition">
          <Trash2 size={18} />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Patient</DialogTitle>

          <DialogDescription>
            Are you sure you want to delete{" "}
            <span className="font-semibold">
              {patient.name}
            </span>
            ?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}