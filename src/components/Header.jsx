import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div>
        <p className="eyebrow">Protótipo conceitual com dados simulados</p>
        <h1>CreatorOS</h1>
      </div>

      <button className="primaryButton">
        <Rocket size={18} />
        Simular otimização
      </button>
    </header>
  );
}