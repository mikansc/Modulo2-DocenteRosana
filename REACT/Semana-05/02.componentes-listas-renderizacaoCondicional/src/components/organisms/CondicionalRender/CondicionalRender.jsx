import { HappyKid, Loading, SadKid } from "../../molecules";

export default function CondicionalRender() {
  const carregando = false;
  const felicidade = true;

  if (carregando === true) {
    return <Loading />;
  }

  const listaDeDoces = [
    { id: 1, nome: "Chocolate", marca: "Nestle" },
    { id: 2, nome: "Bala", marca: "Finni" },
    { id: 3, nome: "Biscoito", marca: "xxx" },
  ];

  if (listaDeDoces.length === 0) {
    return <p>Não há doces na lista</p>;
  }

  return (
    <section>
      <h2>Renderização condicional</h2>

      <div className="lista-de-doces">
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
        Crie dois componentes: <code>CriancaFeliz</code> e{" "}
        <code>CriancaTriste</code>. Seja criativo no conteúdo. Crie um variável{" "}
        <code>felicidade</code> que pode ser <code>true</code> ou{" "}
        <code>false</code>. Renderize o componente <code>CriancaFeliz</code> se
        a variável <code>felicidade</code> for <code>true</code> e o componente{" "}
        <code>CriancaTriste</code> se a variável <code>felicidade</code> for{" "}
        <code>false</code>.
      </p>

      {felicidade ? <HappyKid /> : <SadKid />}


    </section>
  );

  // return carregando ? <Loading /> : (
  //   <section>
  //     <h2>Renderização condicional</h2>
  //   </section>
  // )
}
