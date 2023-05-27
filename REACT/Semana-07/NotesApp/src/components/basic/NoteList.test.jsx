import { render, screen } from "@testing-library/react";
import { NoteList } from "./NoteList";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("NoteList", () => {
  it("deve renderizar o componente corretamente", () => {
    render(<NoteList notes={[]} />);

    expect(screen.getByText(/Lista de/)).toBeInTheDocument();
  });

  it("deve exibir uma lista de notas corretamente", () => {
    const listaDeNotas = [
      { id: 1, title: "nota 1", content: "conteúdo nota 1" },
      { id: 2, title: "nota 2", content: "conteúdo nota 2" },
    ];

    render(<NoteList notes={listaDeNotas} />);

    const titulo1 = screen.getByText("nota 1");
    const titulo2 = screen.getByText("nota 2");

    expect(titulo1).toBeInTheDocument();
    expect(titulo2).toBeInTheDocument();
  });

  test("quando clicar em 'selecionar', deve chamar a prop handleNoteSelect com a nota como argumento", async () => {
    // ARRANGE
    const user = userEvent.setup();

    const listaDeNotas = [
      { id: 1, title: "nota 1", content: "conteúdo nota 1" },
      { id: 2, title: "nota 2", content: "conteúdo nota 2" },
    ];
    const funcaoSelectMock = vi.fn();

    render(
      <NoteList notes={listaDeNotas} handleNoteSelect={funcaoSelectMock} />
    );

    const botoesSelect = screen.getAllByText(/Selecionar/);

    // ACT
    await user.click(botoesSelect[0]);
    // ASSERT
    expect(funcaoSelectMock).toBeCalledWith(listaDeNotas[0]);

    // ACT
    await user.click(botoesSelect[1]);
    // ASSERT
    expect(funcaoSelectMock).toBeCalledWith(listaDeNotas[1]);
  });

  test("quando clicar em 'Excluir', deve chamar as props deleteNote e setSelectedNote com os argumentos corretos", async () => {
    // ARRANGE
    const user = userEvent.setup();

    const listaDeNotas = [
      { id: 1, title: "nota 1", content: "conteúdo nota 1" },
    ];
    const deleteNoteMock = vi.fn();
    const setSelectedMock = vi.fn();

    render(
      <NoteList
        notes={listaDeNotas}
        deleteNote={deleteNoteMock}
        setSelectedNote={setSelectedMock}
      />
    );

    const botoesSelect = screen.getAllByText(/Excluir/);

    // ACT
    await user.click(botoesSelect[0]);
    // ASSERT
    expect(deleteNoteMock).toBeCalledWith(listaDeNotas[0].id);
    expect(setSelectedMock).toBeCalledWith(null);
  });
});
