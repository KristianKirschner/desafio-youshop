import { Brain } from "lucide-react";

export default function InsightCard({ text }) {
  return (
    <div className="insightCard">
      <Brain size={18} />
      <p>{text}</p>
    </div>
  );
}