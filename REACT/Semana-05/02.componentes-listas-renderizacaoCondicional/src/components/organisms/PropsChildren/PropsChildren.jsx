import { Button, Text } from "../../atoms";

export default function PropsChildren() {
  return (
    <section>
      <h2>Props + Children</h2>
      <Button>
        Sou um botão
      </Button>

      <Button vermelho>
        Clica aqui
      </Button>

      <Button titulo>
        Clica aqui
      </Button>

      <h3>Exercício</h3>
      <p>
        Crie um componente <strong>Texto</strong> que receba children, mas que
        também receba propriedades titulo, subtitulo e cores (por exemplo cor,
        corTitulo, corSubtitulo).
      </p>
      <ul>
        <li>
          Se o titulo for passado, deve ser renderizado dentro de uma tag h2.
        </li>
        <li>
          Se o subtitulo for passado, deve ser renderizado dentro de uma tag h3.
        </li>
        <li>
          Se um texto for enviado como filho, deve ser renderizado dentro de uma
          tag p.
        </li>
      </ul>

      <Text corParagrafo="red">
        Parágrafo
      </Text>

      <Text titulo="Titulo" corTitulo="blue" />

      <Text
        cor="pink"
        corParagrafo="red"
        titulo="Sou um título"
        corTitulo="blue"
        subtitulo="Sou um subtitulo"
        textoH3="Sou um h3"
        corH3="green"
      >
        Sou parágrafo
      </Text>
    </section>
  );
}
