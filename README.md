![Sequelize](https://img.shields.io/badge/Sequelize-v6.37.3-52B0E7)
![Express](https://img.shields.io/badge/Express-v4.19.2-gray)
![MySQL](https://img.shields.io/badge/MySQL-v8.0.31-F68C2E)
![API](https://img.shields.io/badge/API-REST-yellow)
![React](https://img.shields.io/badge/React-v17.0.2-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v2.2.19-06B6D4)
# testeCashforce

teste Cashforce é um projeto fullstack desenvolvido como teste para uma vaga de desenvolvedor. O projeto inclui uma API backend construída com Node.js e Sequelize, e um frontend em React.<br>
A aplicação permite gerenciar e visualizar informações relacionadas a notas fiscais, fornecedores e compradores.

## 🧩 Tecnologias Usadas
**Backend:** Node.js, Express, Sequelize, MySQL<br>
**Frontend:** React, Vite, Tailwind CSS, React Router
<br>

![teste_cashforce (Original)](https://github.com/user-attachments/assets/fa2504ea-bfba-4b41-9e6c-1f14e331f7db)





## 🚀 Funcionalidades
💻 **Backend:** API desenvolvida com Node.js, Express e Sequelize, conectada a um banco de dados MySQL.<br>
🌐 **Frontend:** Interface de usuário desenvolvida com React, estilizada com Tailwind CSS, e gerenciada com React Router.<br>
🔗 **Integração:** Comunicação entre o frontend e o backend para exibir dados dinâmicos.<br>
📊 **Dashboard:** Visualização de Notas Fiscais, Fornecedores e Compradores.


## 🛠️ Instalação e Configuração

### 🏠 Clonando o Repositório
Clone o repositório para sua máquina local:

    git clone git@github.com:thalissonsouzas/testeCashforce.git
    cd testeCashforce
    

### 🔧 Configuração do Banco de Dados
🔹 Criar o Banco de Dados:

Use o Docker para criar e iniciar um container MySQL:

    
    docker run --name mysql_container -e MYSQL_ROOT_PASSWORD=senha -p 3306:3306 -d mysql:latest
    

🔹 Executar Migrações e Seeds:

Navegue até o diretório backend e instale as dependências:
   
    cd backend
    npm install

Crie o banco de dados e as tabelas, e insira dados iniciais com os seguintes comandos:


    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all

🔹 Iniciar o Servidor:

Inicie o servidor de desenvolvimento:

    npm run dev

### 🖥️ Frontend
🔹 Instalar Dependências:

Navegue até o diretório frontend e instale as dependências:


    
    npm install


🔹 Iniciar o Servidor de Desenvolvimento:

Inicie o servidor de desenvolvimento:

    npm run dev


## 🌟 Uso

### 🔗 Acessar a Aplicação:

Abra seu navegador e acesse http://localhost:5173 ou em outra porta indicada em seu terminal. Faça o login para ser direcionado ao dashboard da Cashforce.

### 📋 Navegar pelos Menus:

O dashboard fornecerá acesso aos seguintes menus:

Notas Fiscais
Fornecedores
Compradores

Cada menu utiliza o componente < Table >, que interage com a API backend para trazer informações das tabelas e renderizar os dados na interface.

O roteamento do frontend é gerenciado pelo React Router, facilitando a navegação entre as páginas da aplicação.


💡 Contribuição
Sinta-se à vontade para contribuir para o projeto! Para isso, faça um fork do repositório e envie um pull request com suas alterações.

