import { useState } from "react";
import { Wand2 } from "lucide-react";
import { products } from "../data/mockData";

export default function Campaigns() {
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleGenerate() {
    setLoading(true);
    setGenerated(false);

    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 1200);
  }

  return (
    <section className="twoColumns">
      <div className="card">
        <h2>Gerador de campanha</h2>
        <p>Simule a criação de uma campanha usando IA generativa.</p>

        <label>Produto</label>
        <select>
          {products.map((product) => (
            <option key={product.id}>{product.name}</option>
          ))}
        </select>

        <label>Canal</label>
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

        <button className="primaryButton fullButton" onClick={handleGenerate}>
          <Wand2 size={18} />
          Gerar campanha com IA
        </button>
      </div>

      <div className="card resultCard">
        <h2>Campanha gerada</h2>

        {!loading && !generated && (
          <div className="emptyState">
            Clique em gerar campanha para visualizar a simulação.
          </div>
        )}

        {loading && (
          <div className="emptyState purple">
            IA analisando produto, público, canal e tendência...
          </div>
        )}

        {generated && (
          <div className="generatedContent">
            <h3>Gancho</h3>
            <p>“Você trabalha muito, mas sente que seu dinheiro nunca sobra?”</p>

            <h3>Roteiro</h3>
            <p>
              Abra com uma dor real, apresente uma solução simples e mostre como
              o produto ajuda o público a dar o primeiro passo.
            </p>

            <h3>Legenda</h3>
            <p>
              Organizar sua vida financeira pode ser mais simples do que parece.
              Comece hoje com um método prático e direto.
            </p>

            <h3>CTA</h3>
            <p>Clique no link e conheça o passo a passo completo.</p>

            <h3>Hashtags</h3>
            <p>#financas #rendadigital #educacaofinanceira #creator</p>
          </div>
        )}
      </div>
    </section>
  );
}