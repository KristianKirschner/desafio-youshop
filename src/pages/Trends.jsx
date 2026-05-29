import TrendCard from "../components/TrendCard.jsx";
import { trends } from "../data/mockData";

export default function Trends() {
  return (
    <section>
      <div className="pageIntro">
        <h2>Radar de tendências</h2>
        <p>
          O CreatorOS identifica nichos, formatos e oportunidades com maior
          potencial de crescimento.
        </p>
      </div>

      <div className="trendGrid">
        {trends.map((trend) => (
          <TrendCard key={trend.title} trend={trend} />
        ))}
      </div>

      <div className="card recommendationBox">
        <h2>Recomendação da IA</h2>
        <p>
          Creators iniciantes devem priorizar campanhas com dor clara,
          transformação rápida e CTA direto. Nichos de finanças, carreira e
          bem-estar apresentam melhor aderência para conteúdo curto.
        </p>
      </div>
    </section>
  );
}