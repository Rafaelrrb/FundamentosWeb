// funções aceitam qualquer tipo de dado como argumento

function imprimirDado(dado) {
  console.log(dado)
}

imprimirDado(1)
imprimirDado('texto')
imprimirDado(true)
imprimirDado({ nome: 'Rafael' })
imprimirDado([1, 2, 3])

function imprimirDadoExec(dado) {
  console.log('outras tarefas')
  console.log(dado()) // sendo executada
}

imprimirDadoExec(function () {
  return 'ola mundo'
})
