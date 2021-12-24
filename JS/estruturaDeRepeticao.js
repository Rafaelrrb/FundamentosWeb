// Estrutura de repetição

// for
// break - para a execução do loop
// continue - pula a execução do momento

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue
  }
  console.log(i)
}

// While
let i = 0
while (i < 3) {
  console.log(i)
  i++
}

// For...of - faz um incremento atribundo o conteudo a uma variavel

let name = 'rafael'
let names = ['joao', 'paulo', 'pedro']

for (let char of name) {
  if (char === 'a') {
    continue
  }
  console.log(char)
}

for (let nome of names) {
  if (nome === 'paulo') {
    continue
  }
  console.log(nome)
}

//for ... in  pega as propriedades dentro de umobjeto

let person = {
  name: 'rafael',
  age: 29,
  weight: 79
}

for (let property in person) {
  console.log(person[property])
}
