
import { Navigate, Route, Routes } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import ModuleRoutePage from "../pages/ModuleRoutePage/ModuleRoutePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/auth" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/signup" element={<AuthPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />

      <Route path="/intelligence" element={<ModuleRoutePage />} />
      <Route path="/context" element={<ModuleRoutePage />} />
      <Route path="/workflows" element={<ModuleRoutePage />} />
      <Route path="/integrations" element={<ModuleRoutePage />} />
      <Route path="/activity" element={<ModuleRoutePage />} />
      <Route path="/security" element={<ModuleRoutePage />} />
      <Route path="/settings" element={<ModuleRoutePage />} />
      <Route path="/help" element={<ModuleRoutePage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
