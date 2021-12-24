// declaração

var name

//atribuiçao de valor

name = 'rafael'

//que tipo de dado foi colocado na variavel
console.log(typeof name)

// agrupamento de declaração
//let age, isHuman

age = 18
isHuman = true

// multiplos argumentos na função
console.log(name, age, isHuman)

// escrta do texto mais variaveis
console.log('O ' + name + ' tem ' + age + ' anos')

// interpolando valores com template literals or template strings

console.log(`O ${name} tem ${age} anos!!`)

// OBJETOS

const person = {
  name: 'joão',
  age: 30,
  weight: 88.6,
  isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos`)

// ARRAY
// não misturar tipos e objetos dentro de um array
const animals = [
  'leão',
  'macaco',
  'boto',
  {
    name: 'cat',
    age: 3
  }
]

console.log(animals[3].name)

// EXERCICIOS
console.log('Exercicos ')
//1
var weight
//2
console.log(typeof weight)
//3

var name = 'nome'
var age = 10
var starts = 12.4
var isSubscribed = false
//4

let student = {
  name: 'Bruno',
  age: 10,
  starts: 12.4,
  isSubscribed: false
}

console.log(student)
//4.1
console.log(`${student.name} de idade ${student.age} pesa ${student.starts} kg`)

//5
var students = []

//6
students = [student]
//7
console.log(students[0])
//8
let rafa = {
  name: 'rafa',
  age: 10,
  starts: 12.4,
  isSubscribed: false
}

students[1] = rafa
console.log(students[1])
