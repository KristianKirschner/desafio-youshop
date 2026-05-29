export default function Analytics() {
  return (
    <section className="twoColumns">
      <div className="card largeCard">
        <h2>Análise de campanha</h2>
        <p>Diagnóstico simulado de performance para melhoria contínua.</p>

        <div className="analyticsList">
          <div>
            <strong>Retenção inicial</strong>
            <span>Baixa nos 3 primeiros segundos</span>
          </div>

          <div>
            <strong>Clareza do CTA</strong>
            <span>Moderada</span>
          </div>

          <div>
            <strong>Melhor horário</strong>
            <span>19h às 21h</span>
          </div>

          <div>
            <strong>Recomendação</strong>
            <span>Iniciar o vídeo com uma pergunta direta sobre a dor.</span>
          </div>
        </div>
      </div>

      <div className="card centerCard">
        <h2>Score de oportunidade</h2>
        <div className="scoreCircle">86</div>
        <p>
          Produto com boa aderência ao público e alto potencial para creators de
          nicho.
        </p>
      </div>
    </section>
  );
}