export default function TrendCard({ trend }) {
  return (
    <div className="card trendCard">
      <span>{trend.growth}</span>
      <h2>{trend.title}</h2>
      <p>{trend.description}</p>
    </div>
  );
}