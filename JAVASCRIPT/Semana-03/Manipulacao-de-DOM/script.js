// ====== Acessar elemento ======

const elementoPorId = document.getElementById('acessar-elemento-por-id');

const elementoPorClasse = document.getElementsByClassName('acessar-elemento-por-classe')[0]

const elementoPorTag = document.getElementsByTagName('h5')[0]

const elementoPorSeletorId = document.querySelector('#acessar-elemento-por-seletor-id');

const elementoPorSeletorClasse = document.querySelector('.acessar-elemento-por-seletor-classe');


const divCriarAdicionar = document.querySelector('#criar-adicionar');

// ====== Criar elemento ======

// Podemos criar, depois adicionar conteúdo e depois inserir na página
const paragrafoCriado = document.createElement('p');
paragrafoCriado.innerText = 'Esse elemento foi criado e depois adicionado';
divCriarAdicionar.appendChild(paragrafoCriado);

// Podemos criar o elemento já com o conteúdo e inserir na página
divCriarAdicionar.innerHTML += '<p>Esse elemento foi criado já com conteúdo</p>';


// ====== Remover elemento ======

// Podemos remover direto o elemento
const elementoRemover = document.querySelector('#remover-elemento');
// elementoRemover.remove();

// Ou podemos remover pelo elemento pai
const divRemover = document.querySelector('#remover');
// divRemover.removeChild(elementoRemover);


// ====== Alterar elemento ======
const elementoAlterar = document.querySelector('#alterar-elemento');

// Alterar o conteúdo
// elementoAlterar.innerText = 'Esse elemento foi alterado';

// Alterar o estilo
elementoAlterar.style.color = 'red';
elementoAlterar.style.fontSize = '20px';

// Podemos alterar o estilo de uma vez só
// elementoAlterar.style = 'color: blue; font-size: 50px;';

// Alterar ou adicionar atributo
elementoAlterar.setAttribute('class', 'alterado');
// ou
// elementoAlterar.className = 'alterado';


// ====== Eventos ======

// onclick

const inputImprimir = document.querySelector('#input-imprimir');
const botaoImprimir = document.querySelector('#imprimir');
function imprimir() {
  console.log(inputImprimir.value);
}


const divAdicionarRemoverElemento = document.querySelector('#adicionar-remover-elemento');

function adicionar() {
  const paragrafo = document.createElement('p');
  paragrafo.innerText = 'Esse elemento foi criado e depois adicionado';
  paragrafo.setAttribute('id', 'sou-paragrafo');
  divAdicionarRemoverElemento.appendChild(paragrafo);
  // ou
  // divAdicionarRemoverElemento.innerHTML += '<p id='sou-paragrafo'>Esse elemento foi criado já com conteúdo</p>';
}

function remover() {
  const paragrafo = document.getElementById('sou-paragrafo');
  divAdicionarRemoverElemento.removeChild(paragrafo);
}

// onmouseover e onmouseout

const divAlteraCor = document.querySelector('#altera-cor');
function alterarCor(cor) {
  divAlteraCor.style.backgroundColor = cor;
}

// addEventListener

const inputAdicionar = document.querySelector('#input-adicionar');
const botaoAdicionarItem = document.querySelector('#adicionar-item');
const lista = document.querySelector('#lista');

botaoAdicionarItem.addEventListener('click', () => {
  lista.innerHTML += `<li>${inputAdicionar.value}</li>`;
})
