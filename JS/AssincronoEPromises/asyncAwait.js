const promessa = new Promise((resolve, reject) => {
  return resolve('OK')
})

async function start() {
  try {
    const result = await promessa
    console.log(result)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('sempre irei executar')
  }
}

start()

// pode ser subestituido por uma function async
/*
process
  .then(response => console.log(response))
  .catch(err => console.log(err))
  .finally(console.log('sempre irei executar'))

*/
