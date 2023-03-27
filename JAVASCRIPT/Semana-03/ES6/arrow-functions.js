/////////////////////////////////////
// ARROW FUNCTIONS
//////////////////////////////////////

// função anônima comum
const subtrair = function (numero1, numero2) {
  return numero1 - numero2
}

// função arrow
const subtrair2 = (numero1, numero2) => {
  return numero1 - numero2
}

// Retorno em uma linha só: sem chaves e sem return
const subtrair3 = (numero1, numero2) => numero1 - numero2

// Um só parâmetro: sem parênteses
const tornarQuadrado = numero => numero * 2


const imprimeElementosDaLista = lista => lista.forEach(item => console.log(item))

const verificaParOuImpar = numero => numero % 2 === 0 ? "par" : "ímpar"
