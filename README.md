# 🚀 ERP FAEX - NestJS + Prisma + MySQL

Este projeto é um ambiente de estudos e prática utilizando **NestJS**, **Prisma ORM** e **MySQL** com **Docker**. O objetivo é aplicar conceitos de **DDD**, **Clean Architecture** e **Microservices**.

---

## 📚 Objetivos

- Aplicar boas práticas de arquitetura.
- Separar domínios e responsabilidades com DDD.
- Utilizar Clean Architecture para desacoplamento.
- Facilitar testes e desenvolvimento com Docker.

---

## 🛠️ Tecnologias

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) & [Yarn](https://yarnpkg.com/) / [NPM](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Estrutura do Projeto

```
src/
  ├── app/
  │   ├── address/
  │   ├── product/
  │   └── user/
  ├── auth/
  └── ...
prisma/
  ├── schema.prisma
  └── migrations/
```

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/olegarioojv/erp-faexerp-faex.git
   cd seu-repo
   ```

2. Copie e configure o arquivo de variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
   Exemplo de configuração do arquivo `.env`:
   ```
   # ...env
   DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
   JWT_SECRET="sua_chave_secreta"
   PORT=3000
   ```

3. Suba os containers:
   ```bash
   docker-compose up -d
   ```

4. Instale as dependências:
   ```bash
   yarn install
   # ou
   npm install
   ```

5. Execute as migrations do Prisma:
   ```bash
   yarn prisma migrate dev
   # ou
   npx prisma migrate dev
   ```

6. Inicie a aplicação:
   ```bash
   yarn start:dev
   # ou
   npm run start:dev
   ```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testes

```bash
yarn test
# ou
npm test
```

