import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="card productCard">
      <div className="scoreBadge">{product.score}</div>

      <p className="eyebrow">{product.category}</p>
      <h2>{product.name}</h2>

      <div className="productInfo">
        <span>Comissão</span>
        <strong>{product.commission}</strong>
      </div>

      <p>{product.audience}</p>

      <Link to="/campaigns" className="textButton">
        Gerar campanha <ArrowRight size={16} />
      </Link>
    </div>
  );
}