import logo from '../../../assets/react-logo.png'
import "./Header.css"

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo React" />
      <h1 style={{ cor: "white" }}>Componentes React!</h1>
    </header>
  );
}
