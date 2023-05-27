import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NoteForm } from "./NoteForm";
import { vi } from "vitest";

describe("NoteForm", () => {
  test("deve renderizar o componente corretamente", () => {
    render(<NoteForm />);

    expect(screen.getByText("Adicionar Nova Nota")).toBeInTheDocument();
  });

  test("o botão de submeter deve ter o texto 'Adicionar Nota' caso selectedNote seja null", () => {
    render(<NoteForm selectedNote={null} />);

    const botao = screen.getByRole("button", { name: "Adicionar Nota" });
    expect(botao).toBeInTheDocument();
  });

  test("o botão de submeter deve ter o texto 'Adicionar Nota' caso selectedNote seja undefined", () => {
    render(<NoteForm selectedNote={undefined} />);

    const botao = screen.getByRole("button", { name: "Adicionar Nota" });
    expect(botao).toBeInTheDocument();
  });

  test("o botão de submeter deve ter o texto 'Atualizar Nota' caso exista selectedNote ", () => {
    const selectedNoteFake = { title: "test", content: "test" };
    render(<NoteForm selectedNote={selectedNoteFake} />);

    const botao = screen.getByRole("button", { name: "Atualizar Nota" });
    expect(botao).toBeInTheDocument();
  });

  test("deve preencher o formulario caso selectedNote exista", () => {
    // ARRANGE
    const selectedNoteFake = {
      title: "título da nota",
      content: "conteúdo da nota",
    };

    // ACT
    render(<NoteForm selectedNote={selectedNoteFake} />);

    const conteudo = screen.getByDisplayValue("conteúdo da nota");
    const titulo = screen.getByDisplayValue("título da nota");

    // ASSERT
    expect(conteudo).toBeInTheDocument();
    expect(titulo).toBeInTheDocument();
  });

  test("ao submeter o form sem um selectedNote, deve chamar a função addNote", async () => {
    // ARRANGE
    vi.setSystemTime(1685199070394);
    const user = userEvent.setup();
    const addNoteMock = vi.fn();
    render(<NoteForm selectedNote={null} addNote={addNoteMock} />);

    const campos = screen.getAllByRole("textbox");

    await user.type(campos[0], "Titulo da Nota");
    await user.type(campos[1], "Conteúdo da nota");

    await user.click(screen.getByRole("button", { name: "Adicionar Nota" }));

    expect(addNoteMock).toBeCalledWith({
      id: 1685199070394,
      title: "Titulo da Nota",
      content: "Conteúdo da nota",
    });

    vi.useRealTimers();
  });

  test("ao submeter o form com um selectedNote, deve chamar a função updateNote", async () => {
    // ARRANGE
    const user = userEvent.setup();
    const updateNote = vi.fn();
    const setSelectedMock = vi.fn();
    const selectedNoteFake = {
      id: 99999,
      title: "título antigo",
      content: "conteúdo antigo",
    };
    render(
      <NoteForm
        selectedNote={selectedNoteFake}
        updateNote={updateNote}
        setSelectedNote={setSelectedMock}
      />
    );

    const campos = screen.getAllByRole("textbox");

    // ACT
    await user.clear(campos[0]);
    await user.type(campos[0], "novo titulo");

    await user.clear(campos[1]);
    await user.type(campos[1], "novo conteúdo");

    await user.click(screen.getByRole("button", { name: "Atualizar Nota" }));

    // ASSERT
    expect(updateNote).toBeCalledWith(selectedNoteFake.id, {
      id: selectedNoteFake.id,
      title: "novo titulo",
      content: "novo conteúdo",
    });
    expect(setSelectedMock).toBeCalledWith(null);
  });
});
