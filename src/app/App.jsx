
import { Navigate, Route, Routes } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import ModuleRoutePage from "../pages/ModuleRoutePage/ModuleRoutePage";

export default function App() {
  return (
    <Routes>
      {/* Public website */}
      <Route path="/" element={<LandingPage />} />

      {/* Authentication */}
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/signup" element={<AuthPage />} />

      {/* Main dashboard */}
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* Workspace modules */}
      <Route path="/:moduleName" element={<ModuleRoutePage />} />

      {/* Unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
