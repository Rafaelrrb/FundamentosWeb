// lista de argumentos
console.log(process.argv)

// node process.js Rafael Borba (roda na terminal)
const firstName = process.argv[2]
const lastName = process.argv[3]

console.log('seu nome é ', firstName + ' ' + lastName)
