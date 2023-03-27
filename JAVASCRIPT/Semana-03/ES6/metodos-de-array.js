//////////////////////////////////////
// FOREACH
//////////////////////////////////////

// O ES6 introduziu o for of e o método forEach, que são formas mais simples de iterar sobre um array.

// Exemplo de função que imprime cada elemento de uma lista, com sua posição:
function imprimeCadaElementoDaLista(listaDeElementos){

  // for (i = 0; i < listaDeElementos.length; i++) {
  //   console.log(i + ": " + listaDeElementos[i])
  // }

  // for of é mais utilizado sem a necessidade de acessar a posição do elemento, mas também é possível
  // for (let [posicao, elemento] of listaDeElementos.entries()) {
  //   console.log(posicao + ": " + elemento)
  // }

  // listaDeElementos.forEach(function(elemento, posicao) {
  //   console.log(posicao + ": " + elemento)
  // })
}

const lista = ["a", "b", "c"]
imprimeCadaElementoDaLista(lista)

// 0: a
// 1: b
// 2: c


//////////////////////////////////////
// FILTER
//////////////////////////////////////

const listaDeNumeros = [7,5,3,4,2,1,10]
const listaFiltrada = listaDeNumeros.filter((numero) => numero % 2 === 0)
// console.log(listaFiltrada)


//////////////////////////////////////
// FIND
//////////////////////////////////////

const primeiroNumeroPar = listaDeNumeros.find((numero) => numero % 2 === 0)
// console.log(primeiroNumeroPar)


//////////////////////////////////////
// MAP
//////////////////////////////////////

const meusNumeros = [1,2,3,4]
const numerosMultiplicadosPor5 = meusNumeros.map((numero) => numero * 5)
// console.log(numerosMultiplicadosPor5)

const palavras = ["bola", "Carro"]
const palavrasComLetrasMaiusculas = palavras.map((palavra) => palavra.toUpperCase())
// console.log(palavrasComLetrasMaiusculas)


//////////////////////////////////////
// REDUCE
//////////////////////////////////////

const listaDeNumerosB = [10,-20,30]
const somaDosNumeros = listaDeNumerosB.reduce((anterior, atual) => {
  return anterior + atual
}, -100)
// console.log(somaDosNumeros)
