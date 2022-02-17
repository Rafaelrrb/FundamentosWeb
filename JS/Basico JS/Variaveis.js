/* Variaveis
    Nomes simbolicos para recebr algum valor
    atalho de codigo
    identificadores
    3 palavras reservadas
      var
      let
      const
*/

/* Var 
    seu conteudo pode ser alterado 
*/
var clima = 'quente'
clima = 'frio'
console.log(clima)

/* Let 
    seu conteudo pode ser alterado 
*/
let clima2 = 'quente'
//clima2 = 'frio'
console.log(clima2)

/* Const 
    seu conteudo não pode ser alterado 
*/
const clima3 = 'quente'
//clima3 = 'frio'
console.log(clima3)

/* JS possui variaveis fracamente tipada e dinamica
    variaveis não precisam ter um tipo previamente definido
    podemos mudar o conteudo da variavel para tipos diferentes 
  
  Essas regras não se aplicam a const pois seu valor não pode ser mudado

    ex var numero = 1
           numero = "um"

    console.log(typeof numero) retorna o tipo da variavel
*/

/* Scope
    Escopo determina a visibilidade de alguma variavel no JS

  O Var e global e pode funcionar fora de um escopo de bloco
  hoisting

  O Let e Const são locais e só funcionam no escopo onde foi criada
*/

console.log('> existe x antes do bloco?', x)
{
  var x = 0
}
console.log('> existe x depois do bloco?', x)

//console.log('> existe y antes do bloco?', y)
{
  //console.log('> existe y antes?', y) ele sabe que tem mas não pode velo ainda
  let y = 1
  console.log('existe y dentro do bloco', y)
}
//console.log('> existe y depois do bloco?', y)

/* como let foi criado fora do bloco ela pode ser alterada dentro dele  */
let z = 1

{
  z = 0
  console.log('o z foi alterado', z)
}
console.log('vale fora do bloco a laterção ', z)

/* Nomeando Variaveis 
    JS é case-sensistive 
    JS aceita a cadeia de caracteres unicode

      posso 
        iniciar com carater especial
        com letras
        colocar acentos
        letra maiuscula e minuscula faz diferença
      
      não posso 
        iniciar com nuemro
        colocar espaçp vazios no nome

      Ideal
        Criar nomes que fazem sentido
        Que explica o que a variavel é ou faz
        camelCase // comesa com letra minucula e a cada nova palavra bota a 1 em letra maiuscula
        snake_case // entre cada palavra se bota um _ 
        Escrever em ingles
*/
