# Testes com NodeJS, Mocha e Chai

## Bibliotecas utilizadas

- [Awilix](https://www.npmjs.com/package/awilix) -> (Container gerenciador de Injeção de Dependência)

- [Express](https://expressjs.com/) -> (Framework que possui métodos utilitários HTTP)

- [dotenv](https://www.npmjs.com/package/dotenv) -> (Modulo que carrega as variáveis de ambiente do arquivo _.env_ )

- [Mongoose](https://mongoosejs.com/) -> (Modelagem de objeto mongodb para node.js)

- [Eslint](https://www.npmjs.com/package/eslint) -> (Ferramenta para identificar e reportar padrões encontrados no código javascript)

- [Nodemon](https://www.npmjs.com/package/nodemon) -> (Ferramenta que reinicia automaticamente a aplicação node quando é detectada alteração nos arquivos)

- [Mocha](https://www.npmjs.com/package/mocha) -> (Framework para testes em Javascript para aplicações Node.js)

- [Chai](https://www.npmjs.com/package/chai) -> (Biblioteca de asserções BDD / TDD para _node_ e _browser_)

## Recursos utilizados

- Debug -> (Configuração para debugar a aplicação)

## Estrutura do projeto


- src/ -> (Pasta _source_ que armazena os arquivos com os códigos implementados para o projeto)
    - app/ -> (Pasta para centralizar os arquivos da aplicação)
        - config/ -> (Pasta para armazenar o arquivo com as configurações de ambiente)
            - index.js -> (Contém um objeto com as configurações de ambiente da aplicação)
        - database/
            - mongodb.js -> (Arquivo de inicialização e configuração do banco de dados MongoDB)
        - routes/ -> (Pasta para armazenar as rotas dos módulos da aplicação)
            - user.js -> (Arquivos para armazenar todas as rotas do módulo usuários)
        - controllers/ -> (Pasta para armazenar os controladores dos módulos)
            - User/ -> (Armazena os controladores do Usuário)
                - CreateUserController.js -> (Controlador com responsabilidade única de criar um usuário, seguindo o conceito [Single-Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)  )
        - services/ -> (Armazena as classes responsáveis pela implementação das regras de negócio de cada módulo)
            - User/ -> (Armazena as classes com as regras de negócio do módulo User)
                - CreateUserService.js -> (Classe com a responsabilidade única de implementar a regra de negócio para criar usuário, seguindo o conceito [Single-Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) )
        - repositories/ -> (Armazena as classes responsáveis pela comunicação com o _model_ e pela execução das ações no banco de dados )
            - UserRepository.js -> (Classe responsável por implementar as ações no banco de dados referente ao _model_ de Usuário)
        - models/ -> (Armazena as definições dos _model_ disponíveis na aplicação)
            - UserModel.js -> (Estrutura do _model_ do Usuário para o banco de dados)
    - app.js -> (Possui a classe que implementa as configurações iniciais da aplicação)
    - routes.js -> (Inicializa todas as rotas utilizadas na aplicação)
    - server.js -> (Inicializa o servidor da a aplicação)
- test/ -> (Armazena os testes automatizados da aplicação)
- .env -> (Armazena de forma segura as variáveis de ambiente do projeto)
- .env-example -> (Possui a estrutura necessária com as variáveis de ambiente, sem os valores, que deverão ser informadas com os valores corretos no arquivo _.env_  para que o projeto utilize-os quando necessário)
- .eslint.js -> (Arquivo de configuração da biblioteca _eslint_)
- .gitignore -> (Arquivo com as instruções de quais arquivos e pastas o _git_ deve ignorar nos _commits_ )
- package.json -> (Arquivo que contém configurações, instruções, comandos e bibliotecas utilizadas no projeto)


### Rodando no Docker

```
Ainda não configurado
```

### Rodando o projeto em ambiente de desenvolvimento

```
npm run dev
````

### Rodando o projeto em ambiente de produção

```
npm start
````

### Para rodar o eslint

```
npm run eslint
````
