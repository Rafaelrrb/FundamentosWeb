/* 
  ARRAYS

    Acesso pelo index
    Respeita a ordem de inserção dos elementos
    Depende do tamnaho do Array para encontrar e/ou deletar um elemento será necessario um uso maior de performance

      ['a',10,'d',true] 4 elementos
        0  1   2   3

  Arrays no JavaScript
    São dinamicos
    Voce podera ter dados de diferentes tipos misturados dentro de um Array 
    Existem muitos metodos já implementados 
      push(), pop(), find(), filter() entre outros



    const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

    // a indexação (index) começa pelo numero 0
    console.log(pilotos[0]) // Senna
    console.log(pilotos[3]) // Hamilton

    // acessar o tamanho do array
    console.log(pilotos.length)

    // interavel
    for (let piloto of pilotos) {
      console.log(piloto)
    }

    // add elementos
    pilotos.push('Alonso')
    console.log(pilotos)

    // encontrar elemento
    const senna = pilotos.find(piloto => piloto === 'Senna')
    console.log(senna)

    // deletar um elemento
    pilotos.splice(1, 1)
    console.log(pilotos)

  MATRIZ

    const students = [
      ['Joseph', 23, 'MG'],
      ['Briana', 22, 'SP'],
      ['Priscila', 23, 'PR']
    ]
    console.log(students[0][1])

  STACK
    Pilha como uma pilha de livros
      linear um apos o outro
    LIFO: last In First Out
      o ultimo a entrar na pilha é o 1° a sair

    Metodos fundamentasi
      push() adicionar um elemento a pilha
      pop() remover o elemento do topo da pilha
      peek() obter o elemento do topo da pilha
      
      Outros metodos poderão ser implementados como size() para mostrar o tamanho da pilha

    // modelando
    class Stack {
      constructor() {
        this.data = []
        this.top = -1
      }

      push(value) {
        this.top++
        this.data[this.data] = value
        return this.data
      }
      pop() {
        if (this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
      }
      peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
      }
    }

    // utilizando
    const stack = new Stack()

    // add dados
    stack.push('learning')
    console.log(stack)
    stack.push('data')
    console.log(stack)
    console.log(stack.push('structures'))

    console.log(stack)

    console.log(stack.peek())

    // Remover
    stack.pop()
    console.log(stack.pop())
    console.log(stack)
  
  QUEUE
    Fila 
      Linear
      1° a entrar na fila é o 1° a sair
    FIFO First In First Out
      Front
        é a referencia do primeiro elemento a entrar na fila
      Back
        é a referencia do ultimo elemento a entrar na fila
    
    Metodos fundamentais
      enqueue() adiciona um elemento ao final da fila
      dequeue() remove o primeiro elemento a entrar na fila 

      Outros metodos poderão ser implementados como size() para mostrar o tamanho da fila ou front() para pegar o primeiro elemento da fila dentre tantos outros

    // Modelagem
    class Queue {
      constructor() {
        this.data = []
      }
      enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
      }
      dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila!`)
      }
    }

    // utilizando
    const fila = new Queue()

    fila.enqueue('Mariana')
    fila.enqueue('João')
    fila.enqueue('Ariel')
    fila.dequeue()
    fila.dequeue()
    fila.dequeue()
*/
