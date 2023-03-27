// As respostas dos exercícios são apenas exemplificativas. Há inúmeras outras formas de resolvê-los.


/* [M2S03] Ex 1 - Funções
Crie uma função nomeada que recebe um array de elementos, imprima cada um dos elementos e em seguida retorne a quantidade de elementos no array (seu tamanho).*/

function informaDadosDaLista(lista) {
  for (elemento of lista) {
    console.log(elemento);
  }
  // Podemos usar um console.log aqui só para testar se a função está funcionando. Batsa lembrar de apagar o console depois de usar
  return lista.length;
}

const lista = [1, 22, 31, 40, 3, 5];
// informaDadosDaLista(lista);

/// === Refatorando para que a função tenha apenas uma responsabilidade === ///
function imprimeElementosDaLista(lista) {
  for (elemento of lista) {
    console.log(elemento);
  }
}
function retornaQuantidadeDeElementosDaLista(lista) {
  return lista.length;
}
function resposta(lista) {
  imprimeElementosDaLista(lista);
  retornaQuantidadeDeElementosDaLista(lista);
}
// resposta(["a", "b", "c", "d"]) //


/* [M2S03] Ex 2 - Funções
Crie uma função não nomeada que recebe um array de números e retorna a quantidade de números pares e a quantidade de números ímpares. 
Em seguida imprima na tela uma string informando a quantidade de valores informados, a quantidade de ímpares e de pares: 
“A quantidade informada foi _____. A quantidade de valores pares foi ___ e a de valores ímpares foi __.”*/

function calculaEImprimeQuantidadeDeItensParesEImpares(lista) {
  let quantidadeDePares = 0;
  let quantidadeDeImpares = 0;

  for (elemento of lista) {
    if (elemento % 2 === 0) {
      quantidadeDePares++;
    } else {
      quantidadeDeImpares++;
    }
  }
  console.log(
    `A quantidade informada foi ${lista.length}. A quantidade de valores pares foi ${quantidadeDePares} e a de valores ímpares foi ${quantidadeDeImpares}.`
  );
}

/// === Refatorando para que a função tenha apenas uma responsabilidade === ///

function calculaQuantidadeDeItensParesEImpares(lista) {
  let quantidadeDePares = 0;
  let quantidadeDeImpares = 0;

  for (elemento of lista) {
    if (elemento % 2 === 0) {
      quantidadeDePares++;
    } else {
      quantidadeDeImpares++;
    }
  }

  return { quantidadeDePares, quantidadeDeImpares };
}

function imprimeQuantidadeDeItensEParesEImpares(lista) {
  const resultado = calculaQuantidadeDeItensParesEImpares(lista);

  console.log(
    `A quantidade informada foi ${lista.length}. A quantidade de valores pares foi ${resultado.quantidadeDePares} e a de valores ímpares foi ${resultado.quantidadeDeImpares}.`
  );
}


/* [M2S03] Ex 3 - Arrow Functions + forEach
Construa uma arrow function que recebe uma lista de frutas (exemplo: [‘maçã’, ‘laranja’])
e retorna uma string com a lista de frutas separadas por vírgulas (exemplo: “Frutas: maçã, laranja”). Utilize o método .forEach() */

// Função mais simples
function listaFrutas(lista) {
  let resposta = "Frutas: ";
  lista.forEach((fruta) => (resposta += `${fruta}, `));
  return resposta;
}

// Função mais completa, removendo a última vírgula
function listaFrutasB(lista) {
  let resposta = "Frutas: ";
  const ultimaPosicao = lista.length - 1;
  lista.forEach((fruta, posicao) => {
    if (posicao === ultimaPosicao) {
      resposta += `${fruta}.`;
    } else {
      resposta += `${fruta}, `;
    }
  });
  return resposta;
}

// console.log(listaFrutas(["maçã", "laranja", "banana", "uva"]));


/* [M2S03] Ex 4 - Filter
Observe o array abaixo:
Retorne os objetos que possuem a idade maior ou igual a 18 anos usando o .filter() */

const listaDePessoas = [
  { nome: "Rayane", sobrenome: "Cristina", idade: 21 },
  { nome: "Carlos", sobrenome: "Henrique", idade: 17 },
  { nome: "Julio", sobrenome: "Cesar", idade: 19 },
  { nome: "Camila", sobrenome: "Fernandes", idade: 18 },
  { nome: "Julia", sobrenome: "Fernandes", idade: 10 },
  { nome: "Bruno", sobrenome: "Albuquerque", idade: 31 },
  { nome: "Túlio", sobrenome: "Bastos", idade: 22 },
  { nome: "Cristiane", sobrenome: "Maria", idade: 41 },
];

const pessoasComMaisDe18Anos = listaDePessoas.filter(
  (pessoa) => pessoa.idade >= 18
);

const palavras = ["bola", "Carro"];
const palavrasComLetrasMaiusculas = palavras.map((palavra) =>
  palavra.toUpperCase()
);


/* [M2S03] Ex 5 - Find
Usando o array retornado após o filtro no exercício anterior imprima o nome e sobrenome da primeira pessoa que possua idade maior que 30 anos. */

const pessoaComMaisDe30Anos = pessoasComMaisDe18Anos.find(
  (pessoa) => pessoa.idade > 30
);
// console.log(`${pessoaComMaisDe30Anos.nome} ${pessoaComMaisDe30Anos.sobrenome}`);


/* [M2S03] Ex 6 - Filter + map
Usando o array original “listaDePessoas” faça um filtro, mas dessa vez retornando os objetos que possuam idade menor que 18 anos. 
Com esse array de objetos filtrado, agora use o .map para criar uma nova chave chamada anosParaMaioridade sendo seu valor a quantidade de anos que falta para o usuário completar 18 anos. */

const pessoasComMenosDe18Anos = listaDePessoas.filter(
  (pessoa) => pessoa.idade < 18
);
const pessoasComMenosDe18AnosComAnosParaMaioridade =
  pessoasComMenosDe18Anos.map((pessoa) => {
    const anosParaMaioridade = 18 - pessoa.idade;
    return {
      ...pessoa,
      anosParaMaioridade: anosParaMaioridade,
    };
  });

console.log(pessoasComMenosDe18AnosComAnosParaMaioridade);


/* [M2S03] Ex 7 - DOM
Crie um site (arquivo HTML) que, ao ser renderizado, adicione (arquivo JS) 5 textos quaisquer, um ao lado outro, com a cor azul (arquivo css).*/

/* [M2S03] Ex 8 - DOM + funções
Substitua as repetições do exercício anterior por uma função. */
