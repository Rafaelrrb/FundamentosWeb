/* 
    getElementById() = (element)

const element = document.getElementById('blog-title')
console.log(element)



    getElementsByClassName() = (HTMLCollection)

const element = document.getElementsByClassName('one')
console.log(element)



    getElementsByTagName = (HTMLCollection)
      busca uma tag no HTML (head,body...)

const element = document.getElementsByTagName('meta')
console.log(element)



    querySelector() = (element)
      busca class como no css ou tags pega sempre o 1 que encontrar

const element = document.querySelector('.one')
console.log(element)



    querySelectorAll() = (Nodelist)
      nesse caso ele busca por todos os seletores

const element = document.querySelectorAll('meta')
console.log(element)
*/

/* MANIPULAR CONTEUDO

    textContent 
      Altera o conteudo do texto dentro da tag selecionada

const element = document.querySelector('h1')
element.textContent = 'Ola Devs'
element.textContent += 'Ola Devs' caso queira concatenar os conteudos
console.log(element.textContent)

    innerText
      troca o texto interno 

const element = document.querySelector('h1')
element.innerText = 'Ola Devs'
console.log(element.textContent)

    innerHTML
      troca o texto interno e pode se usar html dentro da troca

const element = document.querySelector('h1')
element.innerHTML = 'Ola Devs <small>!!</small>'
console.log(element.textContent)

    value
      pode tanto pegar um value já existente quanto atribuir um valor a ele

const element = document.querySelector('input')
element.value = 'valor que eu quiser'

    Atributos
      pode cirar um ID ou pegar atributos dentro do elemento

const element = document.querySelector('header')
element.setAttribute('id', 'header') add o atributo

const headerID = document.querySelector('#header') pega o atributo

console.log(headerID.getAttribute("id"))

element.removeAttibute("id") remove o atibuto
*/

/* ALTERANDO ESTILO

const elemnto = document.querySelector('body')

elemnto.style.backgroundColor = '#f9f3D2'

    classList

const elemnto = document.querySelector('body')

adiciona
elemnto.classList.add('active',"green")

console.log(elemnto.classList)

remove
elemnto.classList.remove("active")

caso exista removo caso não exista cria
elemnto.classList.toggle("active")    

*/

/* NAVEGANDO PELOS ELEMENTOS

    parentNode parentElement 
      pega o elemento pai

const body = document.querySelector('body')

console.log(body.parentNode)

    childNodes children
      pega os elementos filhos
      
const el = document.querySelector('body')

console.log(el.childNodes)

    nextSibling nextElementSinbling
      navegar pelos elementos irmãos

const el = document.querySelector('header')

console.log(el.nextElementSibling)
*/

/* CRIANDO E ADICIONANDO ELEMENTOS NA PAGINA

    creatElemento
      cria o elemnto que vai ser add
const div = document.createElement('div')
div.innerText = 'ola devs'

    append prepend
      add o elemento na posição 

const body = document.querySelector('body')
  add no fim 
body.append(div)
  add no começo
body.prepend(div)

    insertBefore
      determia a posição entre elementos

const div = document.createElement('div')
div.innerText = 'ola devs'

const body = document.querySelector('body')
const h = body.querySelector('h2')

body.insertBefore(div, h)
*/

/* ELEMENTOS 

    mouse
      onclick
    
function print() {
  console.log('print')
}

    Teclado

const input = document.querySelector('input')

input.onkeydown = function () {
  console.log('rodei')
}

    Add o evento
    
const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print() {
  console.log('print')
}
    mesmo efeito do evento anterior mas considera a ultima ação logo se tiber mais de um evento com o h1 vai contar so o ultimo

const h1 = document.querySelector('h1')

h1.onclick = print

function print() {
  console.log('print')
}

    argumento event

const input = document.querySelector('input')

input.onkeydown = function (event) {
  console.log(event.key)
}

*/
