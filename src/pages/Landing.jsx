import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Sparkles, TrendingUp } from "lucide-react";

export default function Landing() {
  return (
    <main className="landing">
      <section className="hero">
        <div className="heroText">
          <div className="pill">Desafio de Inovação com IA</div>

          <h1>O sistema operacional inteligente para creators.</h1>

          <p>
            O CreatorOS centraliza estratégia, conteúdo, performance e análise
            em uma única plataforma baseada em IA.
          </p>

          <Link to="/dashboard" className="primaryButton heroButton">
            Acessar demo <ArrowRight size={18} />
          </Link>
        </div>

        <div className="heroMockup">
          <div className="mockupHeader">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="mockupGrid">
            <div>
              <Sparkles size={24} />
              <strong>IA Campaigns</strong>
              <p>Campanhas geradas automaticamente.</p>
            </div>

            <div>
              <TrendingUp size={24} />
              <strong>Trends Radar</strong>
              <p>Nichos e produtos em alta.</p>
            </div>

            <div>
              <BarChart3 size={24} />
              <strong>Analytics</strong>
              <p>Decisões orientadas por dados.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}