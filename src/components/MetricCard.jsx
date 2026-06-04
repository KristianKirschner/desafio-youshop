export default function MetricCard({ title, value, change, subtitle }) {
  return (
    <div className="os-metric-card">
      <p>{title}</p>
      <strong>{value}</strong>

      <div>
        <span>{change}</span>
        <small>{subtitle}</small>
      </div>
    </div>
  );
}