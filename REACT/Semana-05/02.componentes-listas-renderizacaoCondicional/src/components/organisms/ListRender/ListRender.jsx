import './ListRender.css'
import { CitiesTable } from "../../molecules";

export default function ListRender() {
  const numeros = [1, 2, 3];

  const listaDeDoces = [
    { id: 1, nome: "Chocolate", marca: "Nestle" },
    { id: 2, nome: "Bala", marca: "Finni" },
    { id: 3, nome: "Biscoito", marca: "Bauducco" },
  ];

  return (
    <section className="list-render">
      <h2>Renderização de listas</h2>

      <div>
        {numeros.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>

      <div>
        {listaDeDoces.map((doce) => {
          return (
            <div key={doce.id} className="doce">
              <p>Doce: {doce.nome}</p>
              <p>Marca: {doce.marca}</p>
            </div>
          );
        })}
      </div>

      <h3>Exercício</h3>
      <p>
        Crie uma lista de cidades em que cada cidade tenha um nome, um estado e
        quantos habitantes ela tem. Em seguida renderize a lista de cidades em
        uma tabela. OBS: Não esqueça de adicionar um identificador único para
        cada item da lista e utilize-o como valor da propriedade{" "}
        <code>key</code> do elemento da tabela.
      </p>
      <CitiesTable />
    </section>
  );
}
