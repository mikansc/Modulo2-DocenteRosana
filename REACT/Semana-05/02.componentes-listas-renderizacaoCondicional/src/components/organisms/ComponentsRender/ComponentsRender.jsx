import { Button, Paragraph } from "../../atoms";
import { BusinessCard } from "../../molecules";

export default function ComponentsRender() {
  return (
    <section>
      <h2>Criação e Reutilização de componentes</h2>
      <Paragraph />
      <Button />

      <Paragraph />
      <Button />

      <h3>Exercício</h3>
      <p>
        Crie um componente <code>Cartão de Visita</code> que contenha: uma foto,
        um nome e um e-mail e telefone. Estilize o componente para que ele
        pareça um cartão de visita.
      </p>
      <BusinessCard />
    </section>
  );
}
