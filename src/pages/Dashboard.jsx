import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import MetricCard from "../components/MetricCard";
import InsightCard from "../components/InsightCard";
import { chartData, insights, metrics } from "../data/mockData";

export default function Dashboard() {
  return (
    <>
      <section className="metricsGrid">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </section>

      <section className="twoColumns">
        <div className="card largeCard">
          <h2>Performance semanal</h2>
          <p>Evolução simulada de vendas atribuídas a campanhas com creators.</p>

          <div className="chartBox">
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="purple" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#ece7f4" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="vendas"
                  stroke="#7c3aed"
                  fill="url(#purple)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h2>Insights da IA</h2>
          <p>Sugestões geradas para apoiar decisões do creator.</p>

          <div className="insightList">
            {insights.map((item) => (
              <InsightCard key={item} text={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}