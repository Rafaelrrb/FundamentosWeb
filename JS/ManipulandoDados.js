// Prototype - prototipo basico da cadeia de objetos

// Type conversion (typecasting) vs Type coersion
// Alteração de um tipo de dado para outro tipo

//coersion - converte sozinho
console.log('9' + 5)
//conversion - define pra que tipo vc quer converter
console.log(Number('9') + 5)

// Manipulando Strings e Numeros

let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))

// Contando quantos caracteres tem uma palavra e quantos digitos tem um numero

let word = 'Rafael'
console.log(word.length)
let number1 = 321
console.log(String(number1).length) // converte o numero em string pra aproveitar a propriedade length

// Transformar um numero quebrado com 2 casas decimais(toFixed(2)) e trocar ponto por virgula(replace('.', ','))

let number2 = 375.75638256832
console.log(number2.toFixed(2).replace('.', ','))

// Transformar letra minuscyla em maiuscula e o contrario

let wordMai = 'Converter maiuscula'
console.log(wordMai.toUpperCase())

let wordMin = 'Converter minuscula'
console.log(wordMin.toLowerCase())

// Separar um texto que conte espaços em um novo array onde cada texto é uma posição do array(split(' ')). Depois disso transforme o array em um texto e onde eram espaços coloque _ (join("_"))

let phrase = 'Eu quero comer batata'
let myArray = phrase.split(' ')
console.log(myArray)
let phraseWithUnderscore = myArray.join('_')
console.log(phraseWithUnderscore)

// verificar se o texto contem uma palavra especifica faz diferença letra maiuscula e minuscula

console.log(phrase.includes('Eu'))

// criar array com construtor

let myArray1 = new Array('a', 'b', 'c')
console.log(myArray1)

// contar elementos de um array

console.log(myArray1.length)

// Transformar uma cadeia de caracteres em elementos de um array

let wordList = 'manupulação'
console.log(Array.from(wordList))

// Manipulando arrays

let techs = ['html', 'css', 'js']

// adicionar um elemento no fim
techs.push('nodejs')
// adiciona um elemento no começo
techs.unshift('sql')
// encontre a posição do elemento no array
let index = techs.indexOf('css')
console.log(index)
// remover do fim
techs.pop()
// remove do começo
techs.shift()

// remover 1 ou mais itens em qualquer posição(começa , quantidade de elementos a remover)
techs.splice(1, 1)

console.log(techs)

// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
