/////////////// Acessar "resto"


// =====> OBJETO
// Exemplo: Quero acessar o nome do cliente, mas também o resto das suas informações
const livro = { nome: "livro 1", preco: 10, ano: 2023 };

const { nome, ...restanteDoLivro } = livro;
// console.log(nome) // livro 1
// console.log(restanteDoLivro) // { preco: 10, ano: 2023 }


// =====> ARRAY
// Exemplo: Quero acessar o primeiro elemento da lista, mas também o resto dos elementos
const lista = ["a", "b", "c"];
const [primeiroElemento, ...restoDaLista] = lista;
// console.log(primeiroElemento) // a
// console.log(restoDaLista) // ["b", "c"]


/////////////////// Parâmetro de função
// Exemplo: somar valores (independente da quantidade deles)

// ======== Maneira tradicional: receber cada valor como parâmetro
function somarDoisNumeros(valor1, valor2) {
  console.log(valor1 + valor2);
}
// somarDoisNumeros(1,2)
function somar3Numeros(valor1, valor2, valor3) {
  console.log(valor1 + valor2 + valor3);
}
// somar3Numeros(1,2,3)


// ======== Com rest
function somar(...valores) {
  return valores.reduce((acumulador, valorAtual) => acumulador + valorAtual);
}
// console.log(somar(1,2,3)) // ele agrupa os valores como se fosse uma lista [1, 2, 3]
