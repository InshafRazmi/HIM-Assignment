import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import PatientDetailsCard from "./PatientDetailsCard";

export default function PatientDetailsDialog({
  patient,
  trigger,
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>

      <DialogContent className="w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Patient Details
          </DialogTitle>
        </DialogHeader>

        <PatientDetailsCard
          patient={patient}
        />
      </DialogContent>
    </Dialog>
  );
}