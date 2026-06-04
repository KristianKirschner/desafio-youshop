import { Medal, Users } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { affiliates } from "../data/mockData";

export default function Affiliates() {
  return (
    <section>
      <PageHeader
        eyebrow="Afiliados"
        title="Gerencie creators, parceiros e performance."
        description="Acompanhe vendas, nichos, comissões e oportunidades de crescimento por afiliado."
      />

      <div className="os-panel">
        <h2>Ranking de afiliados</h2>

        <div className="table-list">
          {affiliates.map((affiliate) => (
            <div className="table-row" key={affiliate.name}>
              <div className="row-with-icon">
                <div className="soft-icon">
                  <Users size={18} />
                </div>

                <div>
                  <strong>{affiliate.name}</strong>
                  <span>{affiliate.niche} · Vendas {affiliate.sales}</span>
                </div>
              </div>

              <b>
                <Medal size={15} /> Score {affiliate.score}
              </b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}