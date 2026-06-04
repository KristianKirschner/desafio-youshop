import { Calendar, FileText, PenTool, Sparkles } from "lucide-react";
import PageHeader from "../components/PageHeader";
import EmptyStateCard from "../components/EmptyStateCard";
import { contentIdeas } from "../data/mockData";

export default function Content() {
  return (
    <section>
      <PageHeader
        eyebrow="Conteúdo"
        title="Planeje, crie e organize conteúdo com IA."
        description="Transforme ideias em roteiros, briefs e publicações prontas para cada canal."
      />

      <div className="content-grid">
        <EmptyStateCard
          icon={<PenTool size={24} />}
          title="Gerador de roteiros"
          description="Crie ganchos, legendas e CTAs com base no produto escolhido."
        />

        <EmptyStateCard
          icon={<Calendar size={24} />}
          title="Calendário editorial"
          description="Organize publicações por canal, campanha e objetivo."
        />

        <EmptyStateCard
          icon={<Sparkles size={24} />}
          title="Sugestões da IA"
          description="Receba ideias com base em tendências e desempenho."
        />
      </div>

      <div className="os-panel">
        <h2>Ideias recomendadas</h2>

        <div className="table-list">
          {contentIdeas.map((idea) => (
            <div className="table-row" key={idea.title}>
              <div>
                <strong>{idea.title}</strong>
                <span>{idea.channel} · {idea.status}</span>
              </div>

              <b>Score {idea.score}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}