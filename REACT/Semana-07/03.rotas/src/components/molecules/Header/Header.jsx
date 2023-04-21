import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/react-logo.png";

export function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div>
        <img src={logo} alt="Logo React" />
        <h1 onClick={() => navigate("/")}> Rotas </h1>
      </div>

      <nav>
        <button onClick={() => navigate("/login")}> Login </button>

        <button className="back" onClick={() => navigate(-1)}>
          &#x2190; {/* isso é um caractere unicode, que representa uma seta para a esquerda */}
        </button>
      </nav>
    </header>
  );
}
