import { useState } from "react";
import { UserContext, UserProvider } from "../../../contexts/user";
import { useTheme } from "../../../contexts/theme";
import { Input } from "../../atoms";

export function ContextAPI() {
  // Não teremos mais os dados do usuário aqui, mas sim no contexto
  // const user = { name: "Maria", email: "maria@email.com" };
  // const [setTheme] = useState('light');
  const { setTheme } = useTheme();

  return (
    <UserProvider>
      <section>
        <h2>Context API</h2>
        <p>
          Permite criar um contexto compartilhado que pode ser acessado por
          componentes em diferentes níveis da árvore de componentes, sem
          precisar passar props manualmente por cada nível intermediário
        </p>

        {/* Para usar o contexto o componente precisa ser "abraçado por um provider" */}
        {/* <UserContext.Consumer>
          {(props) =>{
            return <p>{props.user.name}</p>
          }}
        </UserContext.Consumer> */}

        {/* <Input /> */}
        <div>
          <button onClick={() => setTheme("dark")}>Escuro</button>
          <button onClick={() => setTheme("light")}>Claro</button>
        </div>

        {/* Como o tema é usado em toda a aplicação (header e também main) abraçamos (ThemeProvider) a aplicação inteira (no main.js) e não aqui */}
      </section>
    </UserProvider>
  );
}
