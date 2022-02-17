/* FUNÇÔES
    Pequenas tarefas dentro de uma função
    Abstrair um problema e isolar ele dentro da função 
    Não modificar dados fora dela 
    Pequenas e bem especificas no que fazem 

  Caracteristicas principaos da função
    Umdado entra em uma função e um novo dado sai dessa função
    Não altera dados 
    Não guarda estado STATELESS 

  Programação Imperativa e Declarativa
    (imperativa-declarativa.js)

  IMUTABILIDADE
    uma variavel não vai variar
    Se vc precisar mudar uma variavel vc não muda vc cria uma nova

    Exemplo JS

      const cart = {
        quantity:2,
        total: 200
      }

      Não pode fazer
        cart.quantity = 3

      Pode fazer 
        const NewCart = {...cart, quantity:3}

    Exemplo em ReactJS
      
      const [amount, serAmount] = useState(0)

      Não pode fazer
        amount=2

      Pode fazer 
        setAmount(2)

  STATELESS
    Não guarda estado 
    A função só conhece dados entregues a ela 
    A resposta não podera variar 
    (imperativa-declarativa.js)

  FUNÇÕES INDEPENDENTES 
    Devera ter ao menos 1 argumento 
    Devera retonrar algo 
    Nada que acontecer lá dentro afeta o mundo externo 
      dados imutaveis
      não guardar estado
    Não faremos uso de loops (for, while) mas e ouver necessidade de tal usarmos recursão (a função chama ela mesma)

    Exemplo 

      const random = (number, Math) => Math.floor(Math.random()*number);

      recursão

      const factorial = x => {
        if(x===0){
          return 1;
        }
        return x * factorial(x-1);
      }

  FUNÇÕES PURAS
    Não devera depender de nenhum dado externo a não ser o que foi passado como argumento 
    Não devera sofrer nenhuma interferencia do munod externo a ela 
    Se o argumento é o mesmo o retorno não podera ser diferente quando a função for chamada novamente 
    Não tera nenhum efeito colateral no seu codigo
      não ira modificar nenhum dado 
      não ira guardar nenhum estado 

    Função impura 

      EXP1: 
        Está depende de dado externo que não foi passado como parametro 
          function calculateCircumference(radius){
            return Math.PI * (radius + radius)
          }
      
      EXP2
        Esta alternado um dado externo
          let person = {
            name: 'Rafael',
            age: 'jovem'
          }
          function changeName(name){
            persona,name = name
          }
    
    Função pura
    
      EXP 1

        function calculateCircumference(pi,radius){
            return pi * (radius + radius)
          }
        
        com arrow function

        function calculateCircumference(pi,radius) => pi * (radius + radius)

      EXP2
          const changePersonName = (person,name)=> ({...person,name})
          
  FIRST-CLASS FUNCTION
    Podem estar em qualquer lugar, inclusive , como parameto de outra função 
    A função podera ser entendida como uma variavel 

      const sayMyName = () => console.log('Rafael)
      const runFunction = fn => fn()

      runFunction(sayMyName)
      runFunction(()=> console.log('discover))

      console.log(runFunction(Math.random))

  HIGHER_ORDER FUNCTION
    Função que receberm funções como argumento
    Funções que poderão retornar outras funções

    EXP com .map() JS
      const numbers = [2,4,8,16]
      const square = n => n*n
      const squaredNumber numbers.map(square)

    EXP de um retono de função (currying ou aplicação parcial de função)
      const pause = wait = >fn => setTimeout(fn,wait)

      pause(600)(()=>console.log('waiting 600ms))

      const wait200 = pause(200)
      const wait1000 = pause(1000)

      wait200(()=>console.log('waiting 200ms))
      wait1000(()=>console.log('waiting 1s))

  COMPOSIÇÕES DE FUNÇÕES
    Um encadeamento de funções
    Uma função que retorna um dado e vai para outra função que retona um dado e vai pra outra função que retonrna

      const people = ['Rafa','Diego', 'Dani' , 'Rod']
      const upperCasePeopleThatStartsWithD = people.filter(person => person.startsWith('D')).map(dperson=>dperson.toUpperCase())
        pega todas as palavras que começam com D depois cria um novo array botando as plavaras em letra maiuscula

*/
