import "./CitiesTable.css";

export default function CitiesTable() {
  const listaDeCidades = [
    { id: 1, nome: "São Paulo", estado: "SP", habitantes: 12000000 },
    { id: 2, nome: "Rio de Janeiro", estado: "RJ", habitantes: 6000000 },
    { id: 3, nome: "Salvador", estado: "BA", habitantes: 3000000 },
  ];

  return (
    <table>

      <thead>
        <tr>
          <th>Cidade</th>
          <th>Estado</th>
          <th>Habitantes</th>
        </tr>
      </thead>

      <tbody>
        {listaDeCidades.map((item) => (
          <tr key={item.id}>
            <td>{item.nome}</td>
            <td>{item.estado}</td>
            <td>{item.habitantes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
