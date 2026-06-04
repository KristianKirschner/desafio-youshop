import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChevronDown, Home, LineChart, Menu, MoreHorizontal, PieChart as PieIcon } from "lucide-react";
import MetricCard from "../components/MetricCard";
import {
  metrics,
  platformData,
  products,
  revenueData,
  trafficData,
} from "../data/mockData";

export default function Dashboard() {
  return (
    <section>
      <div className="dashboard-mobile-header">
        <div>
          <h1>Olá, Creator! 👋</h1>
          <p>Aqui está o resumo do seu negócio.</p>
        </div>
        <MoreHorizontal size={18} />
      </div>

      <div className="dashboard-title">
        <h1>Visão geral</h1>
        <p>Bem-vindo(a) de volta! 👋</p>
      </div>

      <div className="os-metrics-grid">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="os-panel chart-panel">
          <div className="panel-header">
            <h2>Receita ao longo do tempo</h2>
            <button>
              Últimos 30 dias <ChevronDown size={13} />
            </button>
          </div>

          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6d28d9" stopOpacity={0.26} />
                    <stop offset="95%" stopColor="#6d28d9" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid stroke="#f0edf7" vertical={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#6d28d9"
                  strokeWidth={3}
                  fill="url(#revenueGradient)"
                  dot={{ r: 4, fill: "#6d28d9", strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="os-panel">
          <div className="panel-header">
            <h2>Top produtos</h2>
            <button>Ver todos</button>
          </div>

          <div className="product-list">
            {products.map((product) => (
              <div className="product-row" key={product.name}>
                <div className="product-emoji">{product.emoji}</div>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="os-panel">
          <h2>Desempenho por plataforma</h2>

          <div className="list-stack">
            {platformData.map((item) => (
              <div className="list-row" key={item.name}>
                <span>{item.name}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="os-panel">
          <h2>Fontes de tráfego</h2>

          <div className="traffic-content">
            <ResponsiveContainer width={150} height={150}>
              <PieChart>
                <Pie
                  data={trafficData}
                  dataKey="value"
                  innerRadius={42}
                  outerRadius={64}
                  paddingAngle={4}
                >
                  {trafficData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={["#6d28d9", "#8b5cf6", "#c4b5fd"][index]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="traffic-legend">
              {trafficData.map((item) => (
                <div key={item.name}>
                  <span>{item.name}</span>
                  <strong>{item.value}%</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <nav className="mobile-bottom-nav">
        <Home className="active" size={18} />
        <LineChart size={18} />
        <PieIcon size={18} />
        <Menu size={18} />
      </nav>
    </section>
  );
}