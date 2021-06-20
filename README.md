<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [Jest](https://jestjs.io/)
- [SQL Editor Beekeeper Studio](https://www.beekeeperstudio.io/)
- [Insomnia (Documentação)](https://insomnia.rest/)
- [Axios](https://github.com/axios/axios)



## 💻 Projeto

O Doctors API é uma aplicação que consiste em fazer todas operações (Insert, Update, Select, Delete) de Doutores. Nele realizamos o cadastro de Doutores e suas especialidades, podendo também gerenciar suas informações, como editar ou excluí-las.

Esse projeto foi desenvolvido para um teste da empresa GCB Investimentos. Onde foi utilizado o framework NestJS para desenvolver a aplicação, junto ao TypeORM.


## Clonar e Instalar
Para rodar este projeto você precisa ter instalado o [NodeJS](https://github.com/jaovito/doctors)

```bash
$ git clone https://github.com/jaovito/doctors.git doctors
```

```bash
$ cd doctors
```

```bash
$ npm install # ou yarn install
```

## Documentação
A documentação foi feita com o Insomnia e todos os dados estão nas pastas [.insomnia](/.insomnia) e [public](/public).

## Rodando a aplicação
Primeiro passo você deve colar os dados do arquivo **ormconfig.example.json** para um arquivo **ormconfig.json** e substituí-los pelos dados que utiliza no seu banco de dados, o meu ficou assim:
```json
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "docker",
  "database": "doctors",
  "entities": ["dist/**/*.entity.js"],
  "migrations": ["./dist/database/migrations/*.js"],
  "cli": {
    "migrationsDir": "./dist/database/migrations"
  }
}
```
OBS: LEMBRE DE ALTERAR OS DADOS DO **ormconfig.json** PARA OS DADOS DO SEU BANCO DE DADOS.


Após o ormconfig.json estar configurado, você deve rodas as migrations com o comando:
```bash
$ npm run typeorm migration:run # ou yarn typeorm migration:run
```

Após ter executado todas as migrations deve executar algum dos comandos abaixo:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
OBS: A APLICAÇÃO DEVERÁ RODAR NA PORTA 3333 (http://localhost:3333).


## Testes
Antes de rodar os testes e2e deve alterar o banco de dados teste, para isso deve abrir o arquivo databaseTest.ts na pasta **test** e alterar as variáveis para os dados correspondentes do seu banco de dados de teste, no meu caso subi esse arquivo normalmente para você conseguir testar sem problemas, mas o ideal seria coloca-lo em seu .gitignore para não comprometer seus dados, mas fique tranquilo que no meu caso não influencia em nada.

O meu ficou assim:
```ts
export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'docker',
  database: 'doctors_test',
};

```

Com isso você pode rodar os testes tranquilamentes

```bash
# unit tests
$ npm run test # ou yarn test

# e2e tests
$ npm run test:e2e # ou yarn test:e2e

# test coverage
$ npm run test:cov # ou yarn test:cov
```

## Buildar a aplicação
Para executar o Build é bem simples


## Mantenha contato

- Author - [João Vitório](https://github.com/jaovito)
- Linkedin - [João Vitório](https://www.linkedin.com/in/jo%C3%A3o-vit%C3%B3rio-1420a117b/)

## License

Nest is [MIT licensed](LICENSE).
