import ProductCard from "../components/ProductCard";
import { products } from "../data/mockData";

export default function Products() {
  return (
    <section>
      <div className="pageIntro">
        <h2>Produtos recomendados</h2>
        <p>
          A IA prioriza produtos por potencial de conversão, comissão, nicho e
          aderência ao perfil do creator.
        </p>
      </div>

      <div className="productsGrid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}