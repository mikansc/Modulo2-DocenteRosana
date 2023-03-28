const conteudoVanilla = document.getElementById('vanilla');

const minhaDiv = document.createElement('div')
minhaDiv.innerText = "JS Vanilla"
minhaDiv.setAttribute("id", "minha-div")
conteudoVanilla.appendChild(minhaDiv)


const meuParagrafo = document.createElement("p")
meuParagrafo.innerText = "Olá Turma, eu sou o Tutu!"
minhaDiv.appendChild(meuParagrafo)

const tutu = document.createElement("img")
tutu.setAttribute("src", "https://user-images.githubusercontent.com/45580434/226222743-7f5f3d54-4702-4e09-9a6f-df8031b477f7.jpg")
tutu.setAttribute("class", "ring-neck")
minhaDiv.appendChild(tutu)
