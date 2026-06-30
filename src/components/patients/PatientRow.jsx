import { SquarePen, Trash2 } from "lucide-react";
import PatientDetailsDialog from "./PatientDetailsDialog";
import { Eye } from "lucide-react";

import { Avatar, AvatarFallback } from "../ui/avatar.jsx";
import { Badge } from "../ui/badge";
import EditPatientDialog from "./EditPatientDialog";
import DeletePatientDialog from "./DeletePatientDialog";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function PatientRow({ patient }) {
  const initials = patient.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  return (
    <tr className="border-b border-purple-100 hover:bg-purple-50 transition">
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="bg-purple-100 text-purple-700 font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div>
            <h3 className="font-semibold text-[var(--text)]">
              {patient.name}
            </h3>

            <p className="text-sm text-gray-500">
              {patient.age} years • {patient.gender}
            </p>
          </div>
        </div>
      </td>

      <td>
        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
          {patient.blood}
        </Badge>
      </td>

      <td>{patient.phone}</td>

      <td>{patient.diagnosis}</td>

      <td>
        <TooltipProvider>
          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <PatientDetailsDialog
                  patient={patient}
                  trigger={
                    <button className="p-2 rounded-xl hover:bg-blue-100 text-blue-600 transition">
                      <Eye size={18} />
                    </button>
                  }
                />
              </TooltipTrigger>

              <TooltipContent>View Patient</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <EditPatientDialog patient={patient} />
              </TooltipTrigger>
              <TooltipContent>Edit Patient</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <DeletePatientDialog patient={patient} />
               </TooltipTrigger>

              <TooltipContent>Delete Patient</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </td>
    </tr>
  );
}