import React from 'react'
import AppRoutes from './components/routes/AppRoutes.jsx'
import { PatientsProvider } from "./context/PatientsContext.jsx";

export default function App() {
  return (
    <PatientsProvider>
      <AppRoutes />
    </PatientsProvider>
  );
}