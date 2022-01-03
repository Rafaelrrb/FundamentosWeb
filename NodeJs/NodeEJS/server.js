const express = require('express')

// criando a instancia do express e quardando
const app = express()

// ferramenta usada pra renderizar o html vai ser o ejs
app.set('view engine', 'ejs')

// criando rota inicial
app.get('/', function (req, res) {
  const items = [
    {
      title: 'R',
      message: 'Rei'
    },
    {
      title: 'A',
      message: 'Atento'
    },
    {
      title: 'F',
      message: 'Fala'
    }
  ]
  res.render('pages/index', {
    qualitys: items
  })
})

// outra rota
app.get('/sobre', function (req, res) {
  res.render('pages/about')
})

// faz o servidor rodar em uma porta a sua escolha
app.listen(8080)
console.log('Rodando')
