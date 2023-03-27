// ===== SPREAD =====
// Ideia de propagação


// =====> LISTAS
const listaDeNumeros1 = [2,3,4]
const listaDeNumeros2 = [5,6,7]

////////////// Concatenar
// Podemos usar o método concat, como já estudamos
const listaDeNumeros3 = listaDeNumeros1.concat(listaDeNumeros2)
// console.log(listaDeNumeros3) // [2,3,4,5,6,7]

// Mas o spread é mais simples
const listaDeNumeros4 = [...listaDeNumeros1, ...listaDeNumeros2]
// console.log(listaDeNumeros4) // [2,3,4,5,6,7]


/////////////// Adicionar elemento no início do array
const listaDeNumeros5 = [1, ...listaDeNumeros1]
// console.log(listaDeNumeros5) // [1,2,3,4]


/////////////// Adicionar elemento no final do array
const listaDeNumeros6 = [...listaDeNumeros1, 1]
// console.log(listaDeNumeros6) // [2,3,4,1]


/////////////// Adicionar elemento no meio do array
const listaDeNumeros7 = [...listaDeNumeros1.slice(0, 2), 1, ...listaDeNumeros1.slice(2)]
// console.log(listaDeNumeros7) // [2,3,1,4]


/////////////////// Parâmetro de função
// Uma função que recebe uma lista de números e multiplica cada um deles (exceto o primeiro) pelo primeiro número da lista, e em seguida soma esses números
function multiplicaESomaNumeros( [primeiro, ...outrosNumeros] ){
  const novaListaMuntiplicada = outrosNumeros.map((numero) => numero * primeiro)
  const resultado = novaListaMuntiplicada.reduce((acumulador, valorAtual) => acumulador + valorAtual)
  console.log(resultado)
}

// multiplicaESomaNumeros(listaDeNumeros1) // 14


// =====> OBJETOS
const objeto1 = { nome: "João", idade: 20 }
const objeto2 = { sobrenome: "Silvia", altura: 1.8 }

//////////// Concatenar
const objeto3 = {
  ...objeto1,
  ...objeto2
}
// console.log(objeto3)

/////////////// Adicionar propriedade no objeto
const objeto4 = {
  ...objeto1,
  peso: 90
}
// console.log(objeto4)

/////////////// Alterar propriedade do objeto
const objeto5 = {
  ...objeto2,
  sobrenome: "Silva"
}
// console.log(objeto5)
