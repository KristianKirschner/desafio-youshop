export default function EmptyStateCard({ icon, title, description }) {
  return (
    <div className="os-empty-card">
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}