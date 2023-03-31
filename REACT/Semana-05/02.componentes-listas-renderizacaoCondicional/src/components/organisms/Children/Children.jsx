import { Paragraph, Image } from "../../atoms";
import { GiftCard } from "../../molecules";

export default function Children() {
  return (
    <section>
      <h2>Children</h2>
      <Paragraph>
        <strong>Children</strong> é uma propriedade especial que todos os
      </Paragraph>

      <Paragraph>
        Posso colocar mais de um filho, por exemplo vários <span>span</span>,
        <strong>strong</strong>, <em>em</em>, <i>i</i>, <b>b</b>, <u>u</u>,
        <a href="https://www.google.com"> link</a>, <code>code</code>, etc.
      </Paragraph>

      <p>
        Sou um parágrafo comum, não recebo as estilizações do componente
        Paragraph
      </p>

      <h3>Exercício</h3>
      <p>
        Crie um componente <strong>CartaoDePresente</strong> que recebe children
        e possua uma estilização de cartão de presente (por exemplo tamanho, cor
        de fundo, borda, fonte, etc.).
      </p>

      <GiftCard>
        <h4>Parabéns</h4>
        <p>Você ganhou um bolo de chocolate</p>
      </GiftCard>

      <GiftCard>
        <h5><em>FULANO</em>, você é a pessoa mais incrível que eu já conheci.</h5>
        <p>Do seu eterno, <strong>Beltrano</strong></p>
        <Image
          url="https://liciniarossi.com.br/wp-content/uploads/2013/06/Captura-de-Tela-2021-11-03-%C3%A0s-16.24.34.png"
          nomeAlternativo="Gif de um casal de namorados"
        />
      </GiftCard>
    </section>
  );
}
