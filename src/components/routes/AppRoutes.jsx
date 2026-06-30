import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Patients from "../pages/Patients.jsx";
import NewPatient from "../pages/NewPatients.jsx";
import HealthRecords from "../pages/HealthRecord.jsx";
import Analytics from "../pages/Analytics.jsx";

import DashboardLayout from "../layout/DashboardLayout.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="patients" element={<Patients />} />
          <Route path="new-patient" element={<NewPatient />} />
          <Route path="records" element={<HealthRecords />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}