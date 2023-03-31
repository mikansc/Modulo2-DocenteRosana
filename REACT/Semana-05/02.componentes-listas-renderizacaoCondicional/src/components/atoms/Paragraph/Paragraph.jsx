import "./Paragraph.css";

export default function Paragraph({ children }) {
  return (
    <p className="meu-paragrafo">
      {children}
    </p>
  );
}
