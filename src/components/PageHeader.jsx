export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="os-page-header">
      <p>{eyebrow}</p>
      <h1>{title}</h1>
      <span>{description}</span>
    </div>
  );
}