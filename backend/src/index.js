// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config');

const app = express();
const port = 3000;

// Importar rotas
const userRoutes = require('./routes/userRouter');
const orderRoutes = require('./routes/orderRoutes');
const buyerRoutes = require('./routes/buyerRoutes');
const cnpjRoutes = require('./routes/cnpjRoutes');
const offerRoutes = require('./routes/offerRoutes');
const orderPortionRoutes = require('./routes/orderPortionRoutes');
const providerRoutes = require('./routes/providerRoutes');
const sponsorRoutes = require('./routes/sponsorRoutes');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Testar a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Sincronizar modelos com o banco de dados
    sequelize.sync({ alter: true })
      .then(() => console.log('Modelo sincronizado com o banco de dados.'))
      .catch(err => console.error('Erro ao sincronizar o modelo com o banco de dados:', err));
  })
  .catch(err => console.error('Não foi possível conectar ao banco de dados:', err));

// Usar rotas
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/buyers', buyerRoutes);
app.use('/api/cnpjs', cnpjRoutes);
app.use('/api/offers', offerRoutes);
app.use('/api/order-portions', orderPortionRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/sponsors', sponsorRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
