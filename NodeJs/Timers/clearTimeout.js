// cancela o um timeout

const timeOut = 3000
const finished = () => console.log('setTimeout')

// guarda o setTimeout pra depois passar ele no clearTimeout
let timer = setTimeout(finished, timeOut)

clearTimeout(timer)
