import { CheckCircle2, Sparkles } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { automations } from "../data/mockData";

export default function Automations() {
  return (
    <section>
      <PageHeader
        eyebrow="Automações"
        title="Menos tarefas manuais, mais tempo para criar."
        description="Automatize rotinas repetitivas e deixe a IA sugerir próximos passos."
      />

      <div className="automation-grid">
        {automations.map((item) => (
          <div className="os-panel automation-card" key={item.title}>
            <div className="soft-icon">
              <Sparkles size={20} />
            </div>

            <h2>{item.title}</h2>
            <p>{item.description}</p>

            <span className={item.active ? "status active" : "status"}>
              <CheckCircle2 size={15} />
              {item.active ? "Ativa" : "Pausada"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}