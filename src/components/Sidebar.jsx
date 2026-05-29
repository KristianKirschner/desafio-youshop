import {
  BarChart3,
  Bot,
  FileText,
  LayoutDashboard,
  PackageSearch,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wand2,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/products", label: "Produtos", icon: PackageSearch },
  { to: "/campaigns", label: "Campanhas IA", icon: Wand2 },
  { to: "/trends", label: "Tendências", icon: TrendingUp },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/assistant", label: "Assistente IA", icon: Bot },
  { to: "/shield", label: "Shield", icon: ShieldCheck },
  { to: "/report", label: "Relatório", icon: FileText },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brandIcon">
          <Sparkles size={20} />
        </div>

        <div>
          <strong>CreatorOS</strong>
          <span>YouShop AI Lab</span>
        </div>
      </div>

      <nav className="nav">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink key={item.to} to={item.to}>
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}