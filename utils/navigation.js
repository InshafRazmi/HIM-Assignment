import {
  LayoutDashboard,
  Users,
  UserPlus,
  FolderHeart,
  ChartColumn,
} from "lucide-react";

const navigation = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    title: "Patients",
    path: "/dashboard/patients",
    icon: Users,
  },
  {
    id: 3,
    title: "New Patient",
    path: "/dashboard/new-patient",
    icon: UserPlus,
  },
  {
    id: 4,
    title: "Health Records",
    path: "/dashboard/records",
    icon: FolderHeart,
  },
  {
    id: 5,
    title: "Analytics",
    path: "/dashboard/analytics",
    icon: ChartColumn,
  },
];

export default navigation;