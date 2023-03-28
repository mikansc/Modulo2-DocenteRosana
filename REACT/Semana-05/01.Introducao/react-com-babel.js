const conteudoBabel = document.getElementById("react-com-babel");
const containerBabel = ReactDOM.createRoot(conteudoBabel);

// Todo o código poderá ser escrito em JSX
// containerBabel.render(
//   <div id="minha-div">
//       Um texto qualquer
//       <p>Olá Turma, eu sou o Tutu!</p>
//       <img
//       src="https://user-images.githubusercontent.com/45580434/226222743-7f5f3d54-4702-4e09-9a6f-df8031b477f7.jpg"
//       className="ring-neck"
//     />
//     </div>
// );


// Isso nos permite criar funções para cada parte do código
containerBabel.render(<Conteudo />);

function Conteudo() {
  return (
    <div id="minha-div">
      Um texto qualquer
      <p>Olá Turma, eu sou o Tutu!</p>
      <ImagemTutu />
      <ImagemTutu />
    </div>
  );
}

function ImagemTutu() {
  return (
    <img
      src="https://user-images.githubusercontent.com/45580434/226222743-7f5f3d54-4702-4e09-9a6f-df8031b477f7.jpg"
      className="ring-neck"
    />
  );
}
