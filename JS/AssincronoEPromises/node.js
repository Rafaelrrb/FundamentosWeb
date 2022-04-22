const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

// acontece uma callback
https.get(API, res => {
  console.log(res.statusCode)
})

console.log('conctando API')
