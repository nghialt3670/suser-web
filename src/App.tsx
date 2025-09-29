import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Root } from "./layouts/root/root.layout";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { DriverManagement } from "./pages/driver-management";
import { VehicleManagement } from "./pages/vehicle-management";
import { MaintenanceManagement } from "./pages/maintenance-management";
import { RepairManagement } from "./pages/repair-management";
import { Report } from "./pages/report";
import { Settings } from "./pages/settings";
import { LoginCallback } from "./pages/login-callback/login-callback.page";
import { LogoutCallback } from "./pages/logout-callback/logout-callback.page";
import { ProtectedRoute } from "./components/common/protected-route/protected-route.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login/callback" element={<LoginCallback />} />
        <Route path="/logout/callback" element={<LogoutCallback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute>
            <Root />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="/vehicles" element={<VehicleManagement />} />
          <Route path="/drivers" element={<DriverManagement />} />
          <Route path="/maintenances" element={<MaintenanceManagement />} />
          <Route path="/repairs" element={<RepairManagement />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
