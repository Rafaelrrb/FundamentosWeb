// CRIANDO EVENTOS
const { EventEmitter } = require('events')

// cria um obj da classe EventEmitter
const ev = new EventEmitter()

//console.log(ev)

// OUVIR EVENTO

// fica aguardando o evento de disparada
// podem receber ações do disparador de eventos ataraves de argumentos (message)
ev.on('saySomething', message => {
  console.log('Eu ouvi voce', message)
})

// OUVE apenas uma unica vez no caso vai ser executado apenas o campo com rafael o bruno não
ev.once('saySomething', message => {
  console.log('Eu ouvi voce', message)
})

// DIASPARANDO EVENTO

// apenas vai disparar o vento precisa ser ouvido 1 campo nome do evento 2 conteudo do argumento que foi enviado
ev.emit('saySomething', 'Rafael')
ev.emit('saySomething', 'Bruno')

// ERDANDO
const { inherits } = require('util')
//const { EventEmitter } = require('events')

function Character(name) {
  this.name = name
}

// faz a função Character erdar a classe EventEmitter
inherits(Character, EventEmitter)

// cria o objeto que já erdou a classe EventEmitter
const chapolin = new Character('Chapolin')

// usando funçoes da a classe EventEmitter no obj criado
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh E agroa quem podera me defender?')
chapolin.emit('help')
