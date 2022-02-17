// declaração da função
function createPhrases() {
  console.log('ola')
}

// Chamar a função
createPhrases()

// função anonima
// Parametros de entrada
const sum = function (number1, number2) {
  console.log(number1 + number2)
}
// Argumentos
sum(2, 3)

//função usando retorno
const sum2 = function (number1, number2) {
  return number1 + number2
}
let number11 = 34
let number22 = 25

console.log(`o numero 1 é ${number11}`)
console.log(`o numero 2 é ${number22}`)
console.log(`a soma é ${sum2(number11, number22)}`)

// função scope

let subject = 'create video'

function createThink(subject) {
  subject = 'estude'
  return subject
}

console.log(subject) // variavel let criada
console.log(createThink(subject)) // subject de dentro da função

// função hoisting

sayMyName()

function sayMyName() {
  console.log('Rafael')
}
// exemplo onde não acontesse o hoisting

/*sayMyName2()

const sayMyName2 = function () {
  console.log('Rafael')
}
*/

// Arrow function

const sayMyName3 = name => {
  console.log(`${name} 3`)
}

sayMyName3('rafael')

// callback function - uma função que esta sendo passada como parametro pra outra função

function sayMyName4(name) {
  console.log('antes da função callback')
  name()
  console.log('depois da função callback')
}

sayMyName4(() => {
  console.log('estou em uma callback')
})

/* Função construtora 
    expressão new
    cria um novo objeto
    this referencia ao que esta fora
*/

function Person(name) {
  this.name = name
  this.walk = () => {
    return this.name + ' andando'
  }
}

const rafael = new Person('rafael')
const joao = new Person('joão')

console.log(rafael, rafael.walk(), joao, joao.walk())

// exemplo de funçoes prontas
let data = new Date('2021-11-26')
console.log(data)
