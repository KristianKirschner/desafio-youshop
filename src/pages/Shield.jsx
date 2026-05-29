import { ShieldCheck } from "lucide-react";
import { fraudAlerts } from "../data/mockData";

export default function Shield() {
  return (
    <section className="twoColumns">
      <div className="card centerCard">
        <ShieldCheck size={42} color="#7c3aed" />
        <h2>CreatorOS Shield</h2>
        <div className="scoreCircle small">92</div>
        <p>
          Score de confiabilidade simulado para proteção contra tráfego inválido
          e comportamentos anormais.
        </p>
      </div>

      <div className="card">
        <h2>Alertas de risco</h2>

        <div className="analyticsList">
          {fraudAlerts.map((alert) => (
            <div key={alert.title}>
              <strong>
                {alert.title} — {alert.risk}
              </strong>
              <span>{alert.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}