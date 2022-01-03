// vai rodar uma função deposi de x milissegundos

const timeOut = 3000
const finished = () => console.log('setTimeout')

// passa a função como referencia sem os () no caso, pois senão ela vai ser rodada na hora
setTimeout(finished, timeOut)
console.log('mostra antes')
