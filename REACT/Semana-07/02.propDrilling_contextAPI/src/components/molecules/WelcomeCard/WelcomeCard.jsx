import "./WelcomeCard.css";
import { Input, WelcomeMessage } from '../../atoms'

// PROP DRILLING
export function WelcomeCard({ user, placeholder }) {
  return (
    <div className="welcome-card">
      <h3>^^ Boas Vindas ^^</h3>
      <WelcomeMessage name={user.name} />
      <Input placeholder={placeholder} />
    </div>
  );
}

// PROP
export function WelcomeCard2({ mensagemAuxiliar, inputAuxiliar }) {
  return (
    <div className="welcome-card">
      <h3>^^ Boas Vindas ^^</h3>
      {mensagemAuxiliar}
      {inputAuxiliar}
    </div>
  );
}

// CHILDREN
export function WelcomeCard3({children}) {
  return (
    <div className="welcome-card">
      <h3>^^ Boas Vindas ^^</h3>
      {children}
    </div>
  );
}

// CONTEXT - HOOKS
export function WelcomeCard4() {
  return (
    <div className="welcome-card">
      <h3>^^ Boas Vindas ^^</h3>
    </div>
  );
}

// CONTEXT - CONSUMER
export function WelcomeCard5() {
  return (
    <div className="welcome-card">
      <h3>^^ Boas Vindas ^^</h3>
    </div>
  );
}
