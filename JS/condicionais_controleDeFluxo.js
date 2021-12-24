// Controle de Fluxo

// if ... else
// o else é opicional

let tempertature = 37
if (tempertature >= 37.5) {
  console.log('Febre alta')
} else if (tempertature >= 37) {
  console.log('Febre moderada')
} else {
  console.log('sem febre')
}

// switch
let expr = 'c'
switch (expr) {
  case 'a':
    console.log('A')
    break
  case 'b':
    console.log('B')
    break
  default:
    console.log('default')
    break
}

// Calculadora

function calcula(num1, operador, num2) {
  let result = 0

  switch (operador) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      result = num1 / num2
      break
    default:
      console.log('não implementado ')
      break
  }
  return console.log(result)
}

calcula(3, '.', 2)

// throw - funcinoa sem usar o try catch mas quando incontra o erro a aplicação para
function sayMyname(name = '') {
  if (name === '') {
    throw new Error('Nome é necessario')
  }

  console.log(name)
}
// try ... catch - depende do throw
try {
  sayMyname('rafael')
} catch (e) {
  console.log(e)
}

console.log('após o try catch')
