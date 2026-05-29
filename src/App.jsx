import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Campaigns from "./pages/Campaigns";
import Trends from "./pages/Trends";
import Analytics from "./pages/Analytics";
import Assistant from "./pages/Assistant";
import Shield from "./pages/Shield";
import Report from "./pages/Report";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/shield" element={<Shield />} />
        <Route path="/report" element={<Report />} />
      </Route>
    </Routes>
  );
}