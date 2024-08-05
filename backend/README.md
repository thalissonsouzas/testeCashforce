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
- [/buyer](https://localhost:3000/api/buyers)
- [/orders](https://localhost:3000/api/orders)
- [/users](https://localhost:3000/api/users)
- [/cnpjs](https://localhost:3000/api/cnpjs)
- [/offers](https://localhost:3000/api/offers)
- [/order-portions](https://localhost:3000/api/order-portion)
- [/providers](https://localhost:3000/api/providers)
- [/sponsors](https://localhost:3000/api/sponsors)
  


