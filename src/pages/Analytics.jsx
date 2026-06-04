import { BarChart3, Clock, Target, TrendingUp } from "lucide-react";
import PageHeader from "../components/PageHeader";
import EmptyStateCard from "../components/EmptyStateCard";
import { aiInsights } from "../data/mockData";

export default function Analytics() {
  return (
    <section>
      <PageHeader
        eyebrow="Analytics"
        title="Dados claros para decisões melhores."
        description="Acompanhe métricas de campanha, conteúdo, produtos e creators em um único lugar."
      />

      <div className="content-grid">
        <EmptyStateCard
          icon={<TrendingUp size={24} />}
          title="Crescimento"
          description="Acompanhe evolução de receita, conversão e engajamento."
        />

        <EmptyStateCard
          icon={<Target size={24} />}
          title="Oportunidades"
          description="Identifique produtos, canais e campanhas com maior potencial."
        />

        <EmptyStateCard
          icon={<Clock size={24} />}
          title="Tempo economizado"
          description="Meça o impacto das automações na rotina do creator."
        />
      </div>

      <div className="os-panel">
        <h2>Insights acionáveis</h2>

        <div className="insight-list">
          {aiInsights.map((item) => (
            <div className="insight-row" key={item}>
              <BarChart3 size={18} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}