import { Check, Link2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { integrations } from "../data/mockData";

export default function Integrations() {
  return (
    <section>
      <PageHeader
        eyebrow="Integrações"
        title="Conecte as ferramentas que creators já usam."
        description="Centralize dados de canais, pagamentos, analytics e produtividade."
      />

      <div className="integration-grid">
        {integrations.map((item) => (
          <div className="os-panel integration-card" key={item}>
            <div className="soft-icon">
              <Link2 size={19} />
            </div>

            <strong>{item}</strong>

            <span>
              <Check size={15} />
              Conectado
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}