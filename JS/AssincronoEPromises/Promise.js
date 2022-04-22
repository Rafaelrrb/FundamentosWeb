let aceitar = false
console.log('Pedir Uber')
const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve('Carro chegou')
  }

  return reject('Pedido negado')
})

console.log('Aguardando')

promessa
  .then(result => console.log(result))
  .catch(reject => console.log(reject))
  .finally(() => console.log('finalizada'))
// .then retona caso de certo
// .catch retona caso de erro
// .finally conclui a operação
