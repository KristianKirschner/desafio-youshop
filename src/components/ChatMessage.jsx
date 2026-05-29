export default function ChatMessage({ type = "bot", children }) {
  return <div className={`chatMessage ${type}`}>{children}</div>;
}