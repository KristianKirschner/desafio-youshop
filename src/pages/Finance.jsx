import { Wallet } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { financeRows } from "../data/mockData";

export default function Finance() {
  return (
    <section>
      <PageHeader
        eyebrow="Financeiro"
        title="Receita, comissões e repasses em uma visão simples."
        description="Visualize ganhos, pagamentos, comissões e indicadores financeiros da operação."
      />

      <div className="finance-grid">
        {financeRows.map((row) => (
          <div className="os-panel finance-card" key={row.label}>
            <Wallet size={22} />
            <p>{row.label}</p>
            <strong>{row.value}</strong>
            <span>{row.trend}</span>
          </div>
        ))}
      </div>
    </section>
  );
}