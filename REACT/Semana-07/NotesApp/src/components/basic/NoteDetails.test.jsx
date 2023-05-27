import { render, screen } from "@testing-library/react";
import { NoteDetails } from "./NoteDetails";

describe("NoteDetails", () => {
  it("should render properly", () => {
    // ARRANGE
    // ACT
    render(<NoteDetails />);
    // ASSERT
    expect(screen.getByText("Detalhes da Nota")).toBeInTheDocument();
  });

  it("should show the default message when the note prop didnt exists", () => {
    // ARRANGE
    // ACT
    render(<NoteDetails />);

    // ASSERT
    const mensagemPadrao = screen.getByText(/Selecione uma nota/);
    expect(mensagemPadrao).toBeInTheDocument();

    const titulo = screen.queryByText(/Título:/);
    expect(titulo).not.toBeInTheDocument();

    const conteudo = screen.queryByText(/Conteúdo:/);
    expect(conteudo).not.toBeInTheDocument();
  });

  test("quando a prop note existir, deve exibir os dados da nota", () => {
    const notaExemplo = {
      title: "titulo",
      content: "conteudo",
    };

    render(<NoteDetails note={notaExemplo} />);

    const titulo = screen.getByText(/titulo/);
    const conteudo = screen.getByText(/conteudo/);

    expect(titulo).toBeInTheDocument();
    expect(conteudo).toBeInTheDocument();

    const mensagemPadrao = screen.queryByText(/Selecione uma nota/);
    expect(mensagemPadrao).not.toBeInTheDocument();
  });
});
