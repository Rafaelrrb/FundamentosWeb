// ira cancalera um setInterval
const timeOut = 1000
const checking = () => console.log('setInterval')

let interval = setInterval(checking, timeOut)

// usando timer e cancelar um intervalo
setTimeout(() => clearInterval(interval), 3000)
