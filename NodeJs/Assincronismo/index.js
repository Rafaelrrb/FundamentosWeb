/* Best me app
    Encontrar sua melhor versão

    O que vamos aprender?
      A se comunicar com o processo enquanto ele estiver rodando

        process.stdout
        process.stdin
      
      Assincronismo
*/

const questions = [
  'O que aprendi hj?',
  'O que me deixou aborrecido?',
  'O que eu poderia fazer para melhorar?',
  'O que me deixou feliz hj?',
  'Quantas pessoas ajudei hj?'
]

const ask = (index = 0) => {
  // escreve na saida do processo
  process.stdout.write('\n' + questions[index] + ' >> ')
}

ask()

const answers = []

// fica ouvindo os eventos (Assincronismo)
process.stdin.on('data', data => {
  //process.stdout.write(data.toString().trim() + '\n')
  answers.push(data.toString().trim())
  // compara o numero de respostas e de perguntas e chama uma nova pergunta caso ainda tenha
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    //console.log(answers)
    // finaliza o processo
    process.exit()
  }
})

// espera finalizar o processo (exit) então retorna uma menssagem do conteudo

process.on('exit', () => {
  console.log(`
    Bacana Rafael!

    O que aprendi hj foi:
    ${answers[0]}

    O que me deixou aborrecido:
    ${answers[1]}

    O que vc fez para melhorar:
    ${answers[2]}

    O que me deixou feliz hj:
    ${answers[3]}

    hj eu ajudei ${answers[4]} pessoas!!

    Volte amanha
    
  `)
})
