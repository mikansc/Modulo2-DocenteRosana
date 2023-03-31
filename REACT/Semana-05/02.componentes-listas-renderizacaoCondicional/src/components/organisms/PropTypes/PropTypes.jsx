import { Sum1, Sum2 } from "../../molecules";

export default function PropTypes() {
  return (
    <section>
      <h2>
        PropTypes
      </h2>

      <h4>
        Componentes sem PropTypes
      </h4>
      <p>
        Mesmo a aplicação quebrando, o console do navegador não gera nenhum erro no console.
      </p>
      <Sum1 numeroA={10} numeroB="5" />
      <Sum2 numeroB={5} />


      <h4>
        Componentes com PropTypes
      </h4>
      <p>
        A aplicação está quebrando, mas agora o console do navegador gera um erro.
      </p>

      {/* gera erro no console, pq numeroB deveria ser number e não string */}
      <Sum2 numeroA={10} numeroB="5" />

      {/* gera erro console, pq numeroA é obrigatório */}
      <Sum2 numeroB={5} />


      <h3>
        Exercício
      </h3>
      <p>
        Refatore o componente <strong>Produto</strong>, adicionando o tipo de
        cada propriedade com <strong>PropTypes</strong>.
        Insira um valor padrão para uma delas, caso necessário.
      </p>
    </section>
  )
}
