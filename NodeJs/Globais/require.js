// uso de modulos nativos
const path = require('path')

console.log(path.basename(__filename))

// uso de modulo criado ( exports,js)

const meuModulo = require('./exports')

console.log(meuModulo)
