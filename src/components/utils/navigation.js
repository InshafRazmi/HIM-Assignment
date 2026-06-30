import {
  LayoutDashboard,
  Users,
  UserPlus,
  FolderHeart,
  ChartColumn,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Patients",
    path: "/dashboard/patients",
    icon: Users,
  },
  {
    title: "Health Records",
    path: "/dashboard/records",
    icon: FolderHeart,
  },
  {
    title: "Analytics",
    path: "/dashboard/analytics",
    icon: ChartColumn,
  },
];