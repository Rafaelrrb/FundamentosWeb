/* NPM (Node package manager)

    __Glossary; Dependendcies, packeges, Modules__

  - Verificar se temos o npm instaldo 'npm -v'

  - Criar nosso proprio pacote
      primeira maneira de criar 'npm init'
      maneira de criar dando sim pra tudo 'npm init -y'

  - O que é o arquivo package.json

  - Utilizar modulos de terceiros
      Para instalar " npm install nome-do-modulo(ex: cfonts)" criour a pasta "node_modules " e arquivo "package-lock.json"

      outra forma "npm i(é o atalho pra install)"

      "npm i cfonts -D" o -D cria uma dependencia de desenvolvimento

      pode ser instalado muitos modulos aos mesmo tempo "npm i mode-1 mode-2"

      "npm update" caso efetuie mudanças no seu aquivo package.json

  - O que é o diretorio node_modules
        local onde ficam todos os modulos e suas dependencias 

        Deve se botar essa pasta dento do ".gitignore" pois ela não e mandada pro repositorio

        Quando for buscar do repositorio em uma nova maquina basta usar o "npm install" que ele baixa os modulos que precisar

  - O que é o aquivo package-lock.json
      faz o mapeamento de todas as dependencias do seu projeto não deve ser alterado a mão 

  - Criar scripts para rodar com o npm
      "npm run test" vem como exemplo

      add no package.json o "start" para poder ser rodado
      "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",

      "start": "node index.js"
      }

      "npm run start" rodando o recem criado start
  
  - Instalar pacote de maneira global
      "npm i opn -g" o -g faz a instalção global caso vc for usar em muitos projetos

      "npm root -g" para ver onde foi instalado essa pasta

  - Desinstalar pacotes
      "npm uninstall moment"
      
  - Mudar versão de pacotes
      "npm i moment@1.5.1" pos o @ escolhe a versão

      "npm outdated" ve que modules tem atualizaçoes

      "npm upgrade" atualiza as versões

      "npm i moment@latest" faz instalar a versão mais recente

*/
