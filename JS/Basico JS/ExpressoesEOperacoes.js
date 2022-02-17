/* Expressões e operações */

let number = 1

// operdor unario
console.log(++number)
// operador binario
console.log(number + 1)
//ternario
console.log(true ? 'ola' : 'nada')

// New Criar um novo objeto

let name = new String('rafael')
name.surName = 'Borba'
let age = new Number(19)
let date = new Date('2021-11-27')
console.log(name, age, date)

// Operadores unarios : typeof e delete

const person = {
  name: 'rafael',
  age: 19
}

delete person.age

console.log(person)

// Operdores aritimeticos

//multiplicação *
console.log(2 * 3)
//divisão
console.log(6 / 2)
//soma
console.log(12 + 3)
//subtração
console.log(10 - 5)
//resto da divisão
let remainder = 11 % 3
console.log(remainder)
//incremento
let increment = 0
increment++
console.log(increment) // caso queira usar dentro do console o ++ deve ser feito ++increment
//decremento
//increment--
console.log(--increment)
//exponecial
console.log(3 ** 3)

// Operdor de agrupamentos

let total = (2 + 3) * 5
console.log(total)

//Operadores de comparação

let one = 1
let two = 2

// == igual a
console.log(two == 1)
console.log(one == '1')

// =! diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != '1')

// comandos que comparam tanto valores quanto os tipos dos elementos

// === estritamente igual a
console.log(one === 1)
console.log(one === '1')

// === estritamente diferente de
console.log(two !== 2)
console.log(two !== '2')

// > maior que
console.log(one > two)

// >= maior igual a
console.log(one >= 1)
console.log(two >= 1)
// < menor que
console.log(one < two)
// <= menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

// Operadores de atribuição
let x

//assignment
x = 1
//soma assignment
x += 2
//subitração assignment
x -= 1
//multiplicação assignment
x *= 2
//divisão assignment
x /= 2

// resto e exponencial
x %= 2
x **= 2
console.log(x)

// Operadores logicos

let pao = true
let queijo = true

// AND && se ambos forem true retorna true
console.log(pao && queijo)
// OR || se 1 for treu retorna true so vai retrona false se os 2 forem false
console.log(pao || queijo)
// NOT ! inverte de false pra true e de true pra false
console.log(!pao)

// Operador Condicional(ternario) -- dependendo da condição recebemos valores diferentes

//condição entre valor 1 se não valor 2
// condição ? valor1 : valor2

const niceBreakfast = pao && queijo ? 'cafe top' : 'cafe ruim'

console.log(niceBreakfast)

age = 16
const canDrive = age >= 18 ? ' pode dirigir' : 'não pode dirigir'

console.log(canDrive)

// Operador de String

// comparação
console.log('a' == 'b')
//concatenação - retrona a união de strings
console.log('a' + 'a')

/* FALSY
      Quando um valor e considerado false em contextos onde um booleano e obrigatorio (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log(0 ? 'verdadeiro' : 'falso')

/*TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatorio (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log('false' ? 'verdadeiro' : 'falso')

/*precedencia de operadores

      ()
      ! ++ --
      + /
      + -
      < <= > >=
      == != === !===
      &&
      ||
      ?:
      = += -= *=

*/
