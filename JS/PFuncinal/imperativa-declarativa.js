// Função que eleve o numero ao quadrado

// Imperativo: Faça da seguinte forma passo a passo

let numero = 2

// stateful function
function square() {
  return numero + numero
}
numero = square()
/* Programação imperativa
    O codigo é pensado e gerado em sequencia
    O codigo é pensado como um passo a passo como uma receita de bolo
    Uma coisa depende da outra 
    O estado de um dado é alterado constantemente causando mutações nas variaveis
    Orientação a objetos é um tipo de paradigma imperativo
*/

// Declarativa: o que fazer e não como fazer
// satateless function
const square = n => n * n

/* Programação declarativa
    O codigo é gerado para fazer algo não importa como 
    O que fazer e não como fazer 
    Não há necessidade de um passo a passo no codigo 
    Programação funcinal é um tipo de paradigma declarativo

*/
