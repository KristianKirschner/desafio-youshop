import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Content from "./pages/Content";
import Campaigns from "./pages/Campaigns";
import Analytics from "./pages/Analytics";
import Affiliates from "./pages/Affiliates";
import Finance from "./pages/Finance";
import Automations from "./pages/Automations";
import Integrations from "./pages/Integrations";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/content" element={<Content />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/automations" element={<Automations />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}