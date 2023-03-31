import { Text } from "../../atoms";
import { BusinessCard, Subtraction } from "../../molecules";

export default function ValoresPadrao() {
  return (
    <section>
      <h2>Valores Padrão</h2>
      <p>
        É possível definir valores padrão para as props de um componente.
        Existem duas estratégias para isso:
      </p>

      <h6>1. Definindo o valor padrão no corpo da função do componente</h6>

      <h6>2. Usando a propriedade .defaultProps</h6>

      <h4>Exemplos</h4>

      <ul>
        <li>
          <p>
            Mesmo não enviando as props o componente não quebra, pois tem propriedades padrão
          </p>
          <Subtraction />
        </li>

        <li>
          <p>
            Se não passar o valor da propriedade <strong>corH3</strong>, o componente renderiza a cor padrão
          </p>
          <Text textoH3="Tem a cor padrão" />
          <p>
            Se passar o valor da propriedade <strong>corH3</strong>, o componente renderiza a cor passada
          </p>
          <Text textoH3="Tem a cor passada como prop" corH3="pink" />
        </li>
      </ul>

      <h3>Exercício</h3>
      <p>
        Refatore mais uma vez o componente CartaoDeVisita para que ele receba
        valores padrão que você julgar necessário.
      </p>
      <BusinessCard
        name="Maria"
        email="maria@email.com"
        phone="123456789"
      />
    </section>
  );
}
