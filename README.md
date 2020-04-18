# Tarefas em segundo plano com NodeJS e Redis
Criação de uma aplicação básica de cadastro de usuário e envio de e-mails em segundo plano utilizando filas de tarefas com NodeJS e Redis.

![](https://github.com/pcosta21/Background-tasks-with-NodeJS-and-Redis/blob/master/painel.png?raw=true)

# Getting started
Para executar esta aplicação, será necessário:

### • [Node.JS](https://nodejs.org/en/)

### • [Redis](https://redis.io/download)
Para instalar o Redis utilizando o docker, no prompt de comando execute:
> docker pull redis

# Recursos e Bibliotecas
#### • node.js
Para a criação do servidor
#### • redis
Banco de dados não relacional para persistência dos dados
#### • [nodemailer](https://github.com/nodemailer/nodemailer)
Para envio dos e-mails
#### • [password-generator](https://github.com/bermi/password-generator)
Para a geração de senhas aleatórias apenas para teste da aplicação
#### • [bull](https://github.com/OptimalBits/bull)
Para o processamento das filas de tarefas
#### • [bull-board](https://github.com/vcapretz/bull-board)
Painel para visualização das filas de tarefas
#### • Sentry
Monitoramento de erros 

# Comandos
* npm init
* npm install express nodemailer dotenv
* npm install nodemon sucrase -D
* npm install password-generator
* npm install bull
* npm install bull-board
* npm install @sentry/node

# Routes
• {baseUrl}/Users

• {baseUrl}/admin/queues

# License
Completamenta gratuito para uso e cópia, desde que com os devidos créditos (fork please!).

### tags
nodejs, redis, nodemailer, bull, queue, background tasks, task, sentry
