// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
/* String

  "" , '' , `` aspas duplas , simples e template strings

*/

console.log('"Rafael"')
console.log('Rafael')
// permite botar expressoes e linhas em branco
console.log(`
Rafael ${1 + 1} 
`)

/* Number

  33 inteiro
  12.5 reais-float
  NaN Not a Number
  Infinity infinito
*/

/* Boolean

  true verdadeiro
  false falso
*/

/* undefined indefinido
   null = nulo , objeto que não possui nada dentro
*/

/* Objeto
    propriedade/atibutos
    funcionalidades/metodos

    {propriedade: "valor"}
*/

console.log({
  name: 'Rafael',
  idade: 29,
  andar: function () {
    console.log('andar')
  }
})

/* Array/vetores
    lista , agrupamento de dado
  
    ["rafael",29]
*/

console.log(['rafael', 29])
