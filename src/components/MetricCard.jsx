export default function MetricCard({ title, value, description }) {
  return (
    <div className="metricCard">
      <p>{title}</p>
      <strong>{value}</strong>
      <span>{description}</span>
    </div>
  );
}