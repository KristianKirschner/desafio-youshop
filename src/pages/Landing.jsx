import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Sparkles,
    title: "IA integrada",
    description: "Gere campanhas, ideias, insights e recomendações em poucos segundos.",
  },
  {
    icon: Layers3,
    title: "Tudo em um só lugar",
    description: "Conteúdo, campanhas, produtos, afiliados e analytics conectados.",
  },
  {
    icon: BarChart3,
    title: "Decisões por dados",
    description: "Acompanhe métricas importantes e descubra oportunidades de crescimento.",
  },
  {
    icon: ShieldCheck,
    title: "Confiança e controle",
    description: "Privacidade, transparência e segurança para creators e marcas.",
  },
];

const steps = [
  "Planeje conteúdo",
  "Crie campanhas",
  "Publique nos canais",
  "Analise resultados",
  "Otimize com IA",
];

export default function Landing() {
  return (
    <main className="landing-page landing-clean">
      <header className="landing-header">
        <div className="os-logo">
          <div className="os-logo-mark">C</div>
          <strong>
            Creator<span>OS</span>
          </strong>
        </div>

        <Link to="/dashboard" className="landing-link">
          Ver demo do sistema
        </Link>
      </header>

      <section className="clean-hero">
        <div className="clean-hero-content">
          <div className="landing-pill">Desafio de inovação com IA</div>

          <h1>
            O sistema operacional inteligente para creators.
          </h1>

          <p>
            O CreatorOS centraliza conteúdo, campanhas, analytics, afiliados,
            automações e insights de IA em uma única plataforma para ajudar
            creators a crescerem com mais clareza, produtividade e resultado.
          </p>

          <div className="clean-actions">
            <Link to="/dashboard" className="landing-button">
              Ver demo do sistema <ArrowRight size={18} />
            </Link>

            <a href="#como-funciona" className="secondary-link">
              Como funciona
            </a>
          </div>
        </div>

        <div className="clean-hero-panel">
          <div className="hero-stat main">
            <Wand2 size={24} />
            <span>IA para creators</span>
            <strong>Campanhas, insights e automações conectadas.</strong>
          </div>

          <div className="hero-stat-grid">
            <div>
              <strong>9</strong>
              <span>módulos integrados</span>
            </div>

            <div>
              <strong>1</strong>
              <span>plataforma central</span>
            </div>

            <div>
              <strong>IA</strong>
              <span>em todo o fluxo</span>
            </div>
          </div>

          <div className="hero-checklist">
            <div>
              <CheckCircle2 size={18} />
              Menos ferramentas desconectadas
            </div>

            <div>
              <CheckCircle2 size={18} />
              Mais clareza para tomar decisões
            </div>

            <div>
              <CheckCircle2 size={18} />
              Mais tempo para criar e crescer
            </div>
          </div>
        </div>
      </section>

      <section className="clean-features">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div key={feature.title} className="clean-feature-card">
              <div>
                <Icon size={22} />
              </div>

              <strong>{feature.title}</strong>
              <p>{feature.description}</p>
            </div>
          );
        })}
      </section>

      <section id="como-funciona" className="clean-flow">
        <div>
          <p className="section-eyebrow">Como funciona</p>
          <h2>Um fluxo completo para criar, analisar e crescer.</h2>
        </div>

        <div className="flow-steps">
          {steps.map((step, index) => (
            <div key={step} className="flow-step">
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="clean-final-cta">
        <div>
          <Zap size={24} />
          <h2>Veja o CreatorOS funcionando.</h2>
          <p>
            Acesse a demo navegável e explore a visão geral, campanhas,
            analytics, afiliados, automações e integrações.
          </p>
        </div>

        <Link to="/dashboard" className="landing-button">
          Abrir demo <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}