import { Bell, CalendarDays, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <header className="os-topbar">
      <div>
        <p>CreatorOS Demo</p>
        <span>Protótipo conceitual com dados simulados</span>
      </div>

      <div className="os-topbar-actions">
        <button>
          <CalendarDays size={15} />
          01 - 30 Mai 2024
          <ChevronDown size={14} />
        </button>

        <button className="os-bell">
          <Bell size={16} />
          <i></i>
        </button>

        <div className="os-avatar">J</div>
      </div>
    </header>
  );
}