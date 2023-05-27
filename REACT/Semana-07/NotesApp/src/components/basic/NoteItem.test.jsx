import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NoteItem } from "./NoteItem";
import { vi } from "vitest";

describe("NoteItem", () => {
  test("deve renderizar corretamente", () => {
    // ARRANGE
    // ACT
    render(<NoteItem note={{ title: "", content: "" }} />);
    // ASSERT
    const excluir = screen.getByText(/Excluir/);
    expect(excluir).toBeInTheDocument();
  });

  test("quando clicar em 'selecionar', deve chamar a prop handleNoteSelect com a nota como argumento", async () => {
    // ARRANGE
    const user = userEvent.setup();
    const notaTeste = { title: "nota teste", content: "olá mundo!" };
    const funcaoSelectMock = vi.fn();

    render(<NoteItem note={notaTeste} handleNoteSelect={funcaoSelectMock} />);
    const botaoSelect = screen.getByText(/Selecionar/);
    // ACT
    await user.click(botaoSelect);
    // ASSERT
    expect(funcaoSelectMock).toBeCalledWith(notaTeste);
  });

  test("quando clicar em 'excluir', deve chamar a prop deleteNote e setSelectedNote com os argumentos corretos", async () => {
    // ARRANGE
    const user = userEvent.setup();
    const notaTeste = { id: 1, title: "nota teste", content: "olá mundo!" };
    const funcaoDelete = vi.fn();
    const setSelected = vi.fn();
    render(
      <NoteItem
        note={notaTeste}
        deleteNote={funcaoDelete}
        setSelectedNote={setSelected}
      />
    );
    const botaoExcluir = screen.getByText(/Excluir/);
    // ACT
    await user.click(botaoExcluir);
    // ASSERT
    expect(funcaoDelete).toBeCalledWith(notaTeste.id);
    expect(setSelected).toBeCalledWith(null);
  });

  test("deve exibir o title e o content da nota quando esta existir", () => {
    // ARRAGE
    const notaTeste = { id: 1, title: "nota teste", content: "olá mundo!" };
    // ACT
    render(<NoteItem note={notaTeste} />);
    // ASSERT
    const titulo = screen.getByText("nota teste");
    const conteudo = screen.getByText("olá mundo!");

    expect(titulo).toBeInTheDocument();
    expect(conteudo).toBeInTheDocument();
  });
});
