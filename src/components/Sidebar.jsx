import {
  BarChart3,
  FileText,
  Home,
  Link2,
  Megaphone,
  Settings,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Visão geral", icon: Home },
  { to: "/content", label: "Conteúdo", icon: FileText },
  { to: "/campaigns", label: "Campanhas", icon: Megaphone },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/affiliates", label: "Afiliados", icon: Users },
  { to: "/finance", label: "Financeiro", icon: Wallet },
  { to: "/automations", label: "Automações", icon: Sparkles },
  { to: "/integrations", label: "Integrações", icon: Link2 },
  { to: "/settings", label: "Configurações", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="os-sidebar">
      <div className="os-logo">
        <div className="os-logo-mark">C</div>
        <strong>
          Creator<span>OS</span>
        </strong>
      </div>

      <nav className="os-nav">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink key={item.to} to={item.to}>
              <Icon size={16} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}