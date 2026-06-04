import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function AppLayout() {
  return (
    <div className="os-shell">
      <Sidebar />

      <main className="os-main">
        <Topbar />
        <Outlet />
      </main>
    </div>
  );
}