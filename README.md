![Sequelize](https://img.shields.io/badge/Sequelize-v6.37.3-52B0E7)
![Express](https://img.shields.io/badge/Express-v4.19.2-gray)
![MySQL](https://img.shields.io/badge/MySQL-v8.0.31-F68C2E)
![API](https://img.shields.io/badge/API-REST-yellow)
![React](https://img.shields.io/badge/React-v17.0.2-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v2.2.19-06B6D4)

# Cash Force

Teste Cashforce é um projeto fullstack desenvolvido como teste para uma vaga de desenvolvedor. O projeto inclui uma API backend construída com Node.js e Sequelize, e um frontend em React.<br>
A aplicação permite gerenciar e visualizar informações relacionadas a notas fiscais, fornecedores e compradores.

### 🚀 Funcionalidades
💻 **Backend:** API desenvolvida com Node.js, Express e Sequelize, conectada a um banco de dados MySQL.<br>
🌐 **Frontend:** Interface de usuário desenvolvida com React, estilizada com Tailwind CSS, e gerenciada com React Router.<br>
🔗 **Integração:** Comunicação entre o frontend e o backend para exibir dados dinâmicos.<br>
📊 **Dashboard:** Visualização de Notas Fiscais, Fornecedores e Compradores.

### 🧩 Tecnologias Usadas

**Backend:** Node.js, Express, Sequelize, MySQL<br />
**Frontend:** React, Vite, Tailwind CSS, React Router<br />

![teste_cashforce (Original)](https://github.com/user-attachments/assets/fa2504ea-bfba-4b41-9e6c-1f14e331f7db)

## Guia de Contribuição

Para rodar o projeto em sua maquina, utilize o nosso guia [Rodando a Aplicação]. 

Documentações de frontend e backend separadas nos direórios:
- [Documentação Frontend](frontend/README.md)
- [Documentação Backend](backend/README.md)


## Iniciando

Para rodar o projeto, vamos utilizar o **Docker Compose** disponível na raiz desse repositório.

### 🏠 Clonando o Repositório

Clone o repositório para sua máquina local:

    git clone git@github.com:thalissonsouzas/testeCashforce.git
    cd testeCashforce

### 🚀 Executando com Docker

1. Rodar os containers

```bash
docker-compose up -d
```

2. Configurar o Banco de Dados

Agora vamos fazer a migração do banco de dados e popular as tabelas utilizando o **Sequelize**:

```bash
cd backend/
npm install
npm run db:migrate
```

3. Acesse a plataforma: https://localhost:4000

