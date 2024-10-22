# 🖥️ Backend

🔹 Instalar Dependências:

Navegue até o diretório frontend e instale as dependências:
    
    npm install


🔹 Criar o Banco de Dados:

Use o Docker para criar e iniciar um container MySQL:

```bash
docker-compose up -d mysql
```

E utilize o *script* `db:migrate` para criação das tabelas e população dos dados:

```bash
npm run db:migrate
```

🔹 Iniciar o Servidor de Desenvolvimento:

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```


## 🌟 Uso

Para fazer uso da API, basta utilizar o endpoint `http://localhost:3000`.

**Endpoints**:
- [/buyer](http://localhost:3000/api/buyers)
- [/orders](http://localhost:3000/api/orders)
- [/users](http://localhost:3000/api/users)
- [/cnpjs](http://localhost:3000/api/cnpjs)
- [/offers](http://localhost:3000/api/offers)
- [/order-portions](http://localhost:3000/api/order-portions)
- [/providers](http://localhost:3000/api/providers)
- [/sponsors](http://localhost:3000/api/sponsors)
  


