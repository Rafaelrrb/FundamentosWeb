// Notas
function notas(nota) {
  if (nota >= 90) {
    console.log('A')
  } else if (nota >= 80) {
    console.log('B')
  } else if (nota >= 70) {
    console.log('C')
  } else if (nota >= 60) {
    console.log('D')
  } else {
    console.log('F')
  }
}

notas(50)

// Sitema de gastos familiar

let custos = {
  receitas: [10, 5],
  despesas: [20, 3]
}

function soma(custos) {
  let total = 0
  for (let valor of custos) {
    total = total + valor
  }
  return total
}

function gastos(custos) {
  let total = soma(custos.receitas) - soma(custos.despesas)
  if (total > 0) {
    return console.log('Saldo positivo ' + total)
  }
  return console.log('Saldo negativo ' + total)
}

gastos(custos)

// Celsius em fahrenheit

function convert(valor, tipo) {
  let conv = 0
  switch (tipo) {
    case 'F':
      conv = (valor - 32) * (5 / 9)
      console.log(conv + ' C')
      break
    case 'C':
      conv = (valor * 9) / 5 + 32
      console.log(conv + ' F')
      break
    default:
      console.log('unidade invalida')
      break
  }
}

convert(50, 'F')
convert(10, 'C')
convert(10, 'z')

// buscandoe  contando dados de um Array

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'livro A',
        author: 'Altor A'
      },
      {
        title: 'livro B',
        author: 'Altor B'
      },
      {
        title: 'livro C',
        author: 'Altor C'
      }
    ]
  },
  {
    category: 'Inteligencia Emocional',
    books: [
      {
        title: 'livro D',
        author: 'Altor D'
      },
      {
        title: 'livro E',
        author: 'Altor D'
      },
      {
        title: 'livro F',
        author: 'Altor F'
      }
    ]
  }
]

console.log('Total de categorias', booksByCategory.length)

for (let category of booksByCategory) {
  console.log('total de livros da categoria: ', category.category)
  console.log(category.books.length)
}

function TotalDeAltores() {
  let autor = []
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (autor.lastIndexOf(book.author) == -1) {
        autor.push(book.author)
      }
    }
  }
  console.log('Total de autores', autor.length)
}

TotalDeAltores()

function LivrosAltorD() {
  let livros = []
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === 'Altor D') {
        livros.push(book.title)
      }
    }
  }
  console.log('Total de livros do altor D', livros.length)
}

LivrosAltorD()

function LivrosDoAltor(autor) {
  let livros = []
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === autor) {
        livros.push(book.title)
      }
    }
  }
  console.log('Total de livros do ' + autor, livros.length)
}

LivrosDoAltor('Altor D')
