import { useState } from "react";
import { Send } from "lucide-react";
import ChatMessage from "../components/ChatMessage";

export default function Assistant() {
  const [answered, setAnswered] = useState(false);

  return (
    <section className="card assistantPage">
      <h2>Assistente IA</h2>
      <p>
        Simulação de um assistente para apoiar decisões estratégicas do creator.
      </p>

      <div className="chatBox">
        <ChatMessage type="bot">
          Olá! Posso ajudar você a escolher produtos, melhorar campanhas ou
          interpretar métricas.
        </ChatMessage>

        <ChatMessage type="user">
          Qual produto eu deveria divulgar esta semana?
        </ChatMessage>

        {answered && (
          <ChatMessage type="bot">
            Com base no seu perfil, eu recomendaria o Curso de Finanças
            Pessoais. Ele possui alta comissão, comunicação simples e bom
            potencial para vídeos curtos.
          </ChatMessage>
        )}
      </div>

      <button className="primaryButton" onClick={() => setAnswered(true)}>
        <Send size={18} />
        Simular resposta
      </button>
    </section>
  );
}