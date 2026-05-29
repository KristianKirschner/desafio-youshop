import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout() {
  return (
    <div className="appShell">
      <Sidebar />

      <main className="content">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}