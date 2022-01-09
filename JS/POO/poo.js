/*  
  OBJETOS
    Todo objeto possui
      Propriedades e Funcionalidades
      Estado e Comportamentos 
      Atributos e Metodos

  CLASSES
    As classes na orientação a objetos funcionam como um molde para os objetos. Os objestos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe

  CLASSES NO JS
    Syntactical sugar
    Prototype

    Define classe
      class Pessoa{
        constructor(nome){
          this.id = ~~(Math.random()*100)
          this.name = name
        }

        dizerNome(){
          console.log(this.name)
        }
      }

    Criar objeto
    const pessoa = new Pessoa('rafael')

  ENCAPSULAMENTO
      Agrupamento de funçães e variaveis
      Esconder detalhes de implementação
      Camada de segurança para os atributos e metodos

  ENCAPSULAMENTO NO CODIGO JS
      
      Estrutural
        let altura = 50
        let largura = 60
        function calcularArea(){
          return altura * largura
        }
        let area = calcularArea

      Orientado a Obejto
      class Poligono{
        constructor(altura,largura){
          this.largura = largura
          this.altura =altura
        }
        get area(){
          return this.#calcularArea()
        }

        esse metodo não vai ser visivel fora da class
        #calcularArea(){
          retunr this.altura * this.largura
        }
      }
      
      cria o objeto
      let poligono = new Poligono(50,60)
      console.log(poligono.area)

      Não ira funcionar já que o metodo esta sendo usado fora da class
      consoel.log(poligono.#calculaArea())

  PROGRAMAÇÃO ESTRUTURADA X ORIENTAÇÃO A OBJETOS
      PROGRAMAÇÃO ESTRUTURADA
        Peocessa a entrada e manipulação dos dados ate a saida
        Uso de sequencias estruturas de repetição e condiçoes
        Uso de uma rotina maior ou sub-rotinas
        Não restrição as variaveis

      ORIENTAÇÃO A OBJETOS
        Suerge para trazer um cuidado ao uso estruturado
          Não elimina por completo o uso estruturado
        Conceito como objetos e classes
        Cuidados com variaveis e rotinas(Encapsulamento)
        Melhor reuso de codigo(Herança)
  
  HERNAÇA
    Pai e filhos
    Objetos podem herdar ou estender caracteristicas bases
    Uma copia de atributos e metodos de outra classe
      class Veiculo{
        rodas = 4

        mover(direcao){}
        virar(direcao){}
      }
      class Moto extends Veiuculo{
        contructor(){
          super() puxar atributos e metodos do pai
          this.rodas = 2
        }
      }
    Um objeto pode estender de outro objeto que pode estender de outro objeto

  POLIMORFISMO
      Quando um obejto estender de outro(herança) talvez haja a necessidade de reescrever uma ou mais caracterusticas(atributos e metodos) nesse novo objeto
      Recriaremos então um metodo(ou mais) da classe herdade
      Polimorfimsmo significa muitas fromas

  POLIMORFISMO COM JS
    class Atleta{
      peso;
      categoria;

      constructor(peso){
        this.peso=peso
      }

      definirCategoria(){
        if(this.peso<=50){
          this.categoria = 'infantil'
        }
        else if (this.peso <=65){
          this.categoria = 'juvenil'
        } 
        else{
          this.categoria = 'adulto'
        }
      }
    }

    class Lutador extends Atleta{
      contructor(peso){
        super(peso)
      }

      definirCategoria(){
        if(this.peso<=54){
          this.categoria = 'pluma'
        }
        else if (this.peso <=60){
          this.categoria = 'leve'
        } 
        else if(this.peso<=75){
          this.categoria = 'meio-leve'
        }
        else{
          this.categoria = 'pesado'
        }
      }
    }
  
  ABESTRAÇÃO
    Template ou identidade de uma classe que sera contruida no futuro
    Atributos e metodos podem ser criados na classe de Abestração(Superclasse)
    A implementação dos metodos e atributos so podera ser feito na classe que ira herdar essa abstração

  ABESTRAÇÃO COM CODIGO JS

    class Parafuso {  Superclasse - Abstrta
      constructor(){
        if(this.constructor === Parafuso){
          throw new Error('Classe abstrta não pode ser instanciada')
        }
      }
      get tipo(){
        throw new Error('Metodo "get tipo()" precisa ser implementado')
      }
    }

    class Fenda extends Parafuso{
      constructor(){super()}
      get tipo(){
        return 'fenda'
      }
    }

    class Philips extends Parafuso{
      constructor(){super()}
      get tipo(){
        return 'philips'
      }
    }

    class Allen extends Parafuso {}

    new Parafuso() 'Classe abstrta não pode ser instanciada'
    let fenda = new Fenda()
    let philips = new Philips()
    let allen = new Allen()

    console,log(fenda.tipo, philips.tipo)
    console.log(allen.tipo) 'Metodo "get tipo()" precisa ser implementado'
*/
