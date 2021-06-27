## Importando arquivo CSV usando NodeJS e MongoDB

O app consiste em um sistema de importação e exportação de arquivos .csv. Utilizando nodejs como back-end e um banco(MongoDB Atlas) em nuvem. 

### Pré-requisitos

- Npm(gerenciador de pacotes Js)
- Node 8+
- Mongo Atlas(o que está sendo usado no app)
- Docker(opcional)

### Instalação do app

#### Para instalar as dependências do projeto:

> npm install

#### Caso desejar utilizar Docker:

> docker run --name nomedasuaimagem -p 27017:27017 -d -t mongo

Mais informações: https://hub.docker.com/_/mongo

#### Utilizando Mongo Atlas:

Acesse: https://www.mongodb.com/cloud/atlas

Busque por Start Free e configure um cluster em mongo para conectar seu banco(a própria plataforma já possui um passo a passo).

#### Com o banco configurado:

Busque por **.example-env** na raiz do projeto e complete suas variáveis de ambiente.

#### Rodar app:

> nodemon --exec npm start

### Features

- [x] Importação arquivos .ccv
- [x] Exportação arquivos .ccv
- [x] Operações de CRUD para tabela

### Tecnologias Utilizadas

- Nodejs
- PugJs
- Express
- Mongoose
- Nodemon
- Csv express
- Fast csv

