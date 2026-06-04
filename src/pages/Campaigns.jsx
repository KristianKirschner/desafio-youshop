import { useState } from "react";
import { Sparkles, Wand2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { campaigns, products } from "../data/mockData";

export default function Campaigns() {
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  function generateCampaign() {
    setLoading(true);
    setGenerated(false);

    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 900);
  }

  return (
    <section>
      <PageHeader
        eyebrow="Campanhas"
        title="Crie campanhas inteligentes para creators e afiliados."
        description="Simule geração de roteiros, CTAs, canais recomendados e otimizações automáticas."
      />

      <div className="two-columns">
        <div className="os-panel">
          <h2>Gerador de campanha IA</h2>

          <label>Produto</label>
          <select>
            {products.map((product) => (
              <option key={product.name}>{product.name}</option>
            ))}
          </select>

          <label>Canal principal</label>
          <select>
            <option>Instagram Reels</option>
            <option>TikTok</option>
            <option>YouTube Shorts</option>
          </select>

          <label>Objetivo</label>
          <select>
            <option>Aumentar conversão</option>
            <option>Gerar reconhecimento</option>
            <option>Recuperar leads</option>
          </select>

          <button className="primary-action" onClick={generateCampaign}>
            <Wand2 size={18} />
            Gerar campanha
          </button>
        </div>

        <div className="os-panel">
          <h2>Resultado gerado</h2>

          {!generated && !loading && (
            <div className="empty-result">
              <Sparkles size={26} />
              <p>Clique em gerar campanha para visualizar a simulação.</p>
            </div>
          )}

          {loading && (
            <div className="empty-result purple">
              IA analisando produto, público, canal e tendência...
            </div>
          )}

          {generated && (
            <div className="generated-box">
              <h3>Gancho</h3>
              <p>“Você trabalha muito, mas sente que sua operação não cresce?”</p>

              <h3>Roteiro</h3>
              <p>
                Comece mostrando a dor do creator, apresente o produto como
                solução prática e finalize com uma chamada direta.
              </p>

              <h3>CTA</h3>
              <p>“Acesse agora e organize sua operação em poucos minutos.”</p>

              <h3>Hashtags</h3>
              <p>#creator #marketingdigital #afiliados #conteudo</p>
            </div>
          )}
        </div>
      </div>

      <div className="os-panel">
        <h2>Campanhas ativas</h2>

        <div className="table-list">
          {campaigns.map((campaign) => (
            <div className="table-row" key={campaign.name}>
              <div>
                <strong>{campaign.name}</strong>
                <span>{campaign.channel} · Conversão {campaign.conversion}</span>
              </div>

              <b>{campaign.status}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}