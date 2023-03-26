//////////////////////////////////////
// BANCO => CONVERTER DOLAR EM REAL
//////////////////////////////////////
// Um banco quer contratá-lo para criar um programa que converter o valor recebido em dólar para real


// ======= SEM FUNÇÃO =======

// DIA 01
const cotacaoDolarDia1 = 5.50;

const dolaresDoCliente1 = 100;
const valorEmReais1 = dolaresDoCliente1 * cotacaoDolarDia1;
// console.log(valorEmReais1); // 550

const dolaresDoCliente2 = 200;
const valorEmReais2 = dolaresDoCliente2 * cotacaoDolarDia1;
// console.log(valorEmReais2); // 1100

// DIA 02
const cotacaoDolarDia2 = 5.30;

const dolaresDoCliente3 = 150;
const valorEmReais3 = dolaresDoCliente3 * cotacaoDolarDia2;
// console.log(valorEmReais3); // 795

const dolaresDoCliente4 = 100;
const valorEmReais4 = dolaresDoCliente4 * cotacaoDolarDia2;
// console.log(valorEmReais4); // 530



// ======= COM FUNÇÃO =======

function converterDolarEmReal(dolares, cotacaoDolar) {
  return dolares * cotacaoDolar;
}

// DIA 01
const cotacaoDolarDia3 = 5.50;
// converterDolarEmReal(100, cotacaoDolarDia3); // 550
// converterDolarEmReal(200, cotacaoDolarDia3); // 1100

// DIA 02
const cotacaoDolarDia4 = 5.30;
// converterDolarEmReal(150, cotacaoDolarDia4); // 795
// converterDolarEmReal(100, cotacaoDolarDia4); // 530


///////////////////
// O mesmo banco quer que você crie um programa que converta o valor recebido em dólar para real, mas dessa vez
// o valor do dólar irá mudar a depender do "tipo de cliente" que está realizando a compra

// Cada função deve ter uma só responsabilidade
function calcularValorDoDolarPorTipoDeCliente(cotacaoDoDolar, tipoDeCliente) {
  if (tipoDeCliente === 'premium') {
    return cotacaoDoDolar - 0.1
  } else if (tipoDeCliente === 'antigo') {
     return cotacaoDoDolar - 0.3
  } else {
    return cotacaoDoDolar
  }
}

function converterDolarEmReal2(dolares, cotacaoDoDolar, tipoDeCliente) {
  const valorDoDolarParaEsteCliente = calcularValorDoDolarPorTipoDeCliente(cotacaoDoDolar, tipoDeCliente)
  console.log(valorDoDolarParaEsteCliente * dolares)
}

converterDolarEmReal2(100, 5.50, 'premium'); // 540
converterDolarEmReal2(100, 5.50, 'antigo'); // 520
converterDolarEmReal2(100, 5.50); // 550


//////////////////////////////////////
// FUNÇÃO NOMEADA
//////////////////////////////////////

function nomeDaFuncao() {
  // código
}

// Exemplo
function cumprimentar() {
  console.log("Olá, tudo bem?");
}

// cumprimentar(); // Olá, tudo bem?


//////////////////////////////////////
// FUNÇÃO ANÔNIMA
//////////////////////////////////////

const nomeDaFuncao = function () {
  // código
};

// Exemplo
const cumprimentar2 = function () {
  console.log("Olá, tudo bem?");
};
// cumprimentar2(); // Olá, tudo bem?


//////////////////////////////////////
// PARÂMETROS
//////////////////////////////////////

function nomeDaFuncaoComParametros(parametro1, parametro2) {
  // código
  console.log(parametro1, parametro2);
}

// Exemplo
function somarDoisNumerosA(numero1, numero2) {
  console.log(numero1 + numero2);
}
// somarDoisNumerosA(20, 10); // 30


// ==== Parâmetro default ====

// Se não passar o parâmetro, ele usa o valor default = undefined
// somarDoisNumerosA(1); // NaN


// === Parâmetro opicional ===

// Se não passar o parâmetro, ele usa o valor default = 0
function somarDoisNumerosB(numero1, numero2 = 0) {
  console.log(numero1 + numero2);
}
// somarDoisNumerosB(1); // 1

function somarDoisNumerosC(numero1 = 0, numero2) {
  console.log(numero1 + numero2);
}
// somarDoisNumerosC(undefined, 2); // 2

function somarDoisNumerosD(numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2);
}
// somarDoisNumerosD(); // 0


//////////////////////////////////////
// DESAFIO
//////////////////////////////////////

// Tranforme o código abaixo em uma função

const somaDeDoisNumerosA = 1 + 2;
// console.log(somaDeDoisNumerosA);

const somaDeDoisNumeroB = 3 + 4;
// console.log(somaDeDoisNumeroB);

// Resposta
function somarDoisNumerosE(numero1, numero2) {
  console.log(numero1 + numero2);
}
// somarDoisNumerosE(1, 2);
// somarDoisNumerosE(3, 4);


//////////////////////////////////////
// RETORNO DE FUNÇÃO
//////////////////////////////////////

// SEM RETORNO
function somarDoisNumerosF(numero1, numero2) {
  console.log(numero1 + numero2);
}

// não é possível atribuir o resultado de uma função sem retorno a uma variável
const resultadoA = somarDoisNumerosF(10, 20);
// console.log(resultadoA); // undefined


// COM RETORNO
function somarDoisNumerosG(numero1, numero2) {
  return numero1 + numero2;
  console.log("Isso não vai ser executado");
}

// Permite guardar o retorno em uma varíável
const resultadoB = somarDoisNumerosG(10, 20);
// console.log(resultadoB); // 30

// E reutilizar esse retorno
const resultadoC = resultadoB + 10; // 40
// console.log(resultadoC); // 40
