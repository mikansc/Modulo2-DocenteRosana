import "./Button.css";

export default function Button({ vermelho, children }) {

  return (
    <button className={vermelho ? "danger" : "default"}>
      {children}
    </button>
  );
}
