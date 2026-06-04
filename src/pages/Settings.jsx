import { ShieldCheck, UserRound } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Settings() {
  return (
    <section>
      <PageHeader
        eyebrow="Configurações"
        title="Controle, segurança e preferências do creator."
        description="Configurações conceituais para mostrar maturidade de produto, privacidade e governança."
      />

      <div className="two-columns">
        <div className="os-panel settings-card">
          <UserRound size={24} />
          <h2>Perfil do creator</h2>
          <p>
            Preferências de canais, objetivos de crescimento, nicho principal e
            configurações de conteúdo.
          </p>
        </div>

        <div className="os-panel settings-card">
          <ShieldCheck size={24} />
          <h2>Privacidade e segurança</h2>
          <p>
            Permissões, transparência sobre uso de dados, controle de acesso e
            conformidade com boas práticas.
          </p>
        </div>
      </div>
    </section>
  );
}