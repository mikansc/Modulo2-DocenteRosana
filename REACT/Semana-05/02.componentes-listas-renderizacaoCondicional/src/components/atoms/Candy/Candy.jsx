export default function Candy({ doce }) {
  return (
    <div className="doce">
      <p>Doce: {doce.nome}</p>
      <p>Marca: {doce.marca}</p>
    </div>
  );
}

export function Candy2({ nome, marca }) {
  return (
    <div className="doce">
      <p>Doce: {nome}</p>
      <p>Marca: {marca}</p>
    </div>
  );
}

Candy2.defaultProps = {
  nome: "Sem nome",
  marca: "Sem marca"
}
