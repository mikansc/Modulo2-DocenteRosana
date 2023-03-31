import "./Props.css";
import { Button, Image, Candy, Candy2 } from "../../atoms";

export default function Props() {
  const listaDeDoces = [
    { id: 1, nome: "Chocolate", marca: "Nestle" },
    { id: 2, nome: "Bala", marca: "Finni" },
    { id: 3, nome: "Biscoito", marca: "Bauducco" },
  ];

  return (
    <section>
      <h2>Props</h2>

      <Image
        formato="quadrado"
        url="https://s1.static.brasilescola.uol.com.br/be/2022/06/paisagem-natural-floresta.jpg"
        nomeAlternativo="Floresta"
      />
      <Image
        formato="redondo"
        url="https://caosplanejado.com/wp-content/uploads/2021/02/cidade-centrada.jpg"
        nomeAlternativo="Cidade"
      />
      <br/>

      <Button vermelho />
      <Button />

      <br/><br/>

      <h4>Props em listas</h4>
      <p>
        <strong>1.</strong> Passa o objeto inteiro
      </p>
      <div className="lista-de-doces">
        {listaDeDoces.map((item) => {
          return <Candy key={item.id} doce={item} />;
        })}
      </div>

      <p>
        <strong>2.</strong> Passa cada propriedade
      </p>

      <div className="lista-de-doces">
        {/* Manda um por um */}
        {listaDeDoces.map((item) => {
          return <Candy2 key={item.id} nome={item.nome} marca={item.marca} />
        })}
      </div>

      <div className="lista-de-doces">
        {/* Manda um por um, mas usa o spread operator */}
        {listaDeDoces.map((item) => {
          return <Candy2 key={item.id} {...item} />
        })}
      </div>
    </section>
  );
}
