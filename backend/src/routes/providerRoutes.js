// src/routes/providerRoutes.js
const express = require('express');
const router = express.Router();
const { Provider } = require('../../models'); // Ajuste conforme a estrutura do seu modelo

// Obter todos os provedores
router.get('/', async (req, res) => {
  try {
    const providers = await Provider.findAll({
      attributes: [
        ['name', 'NOME'],
        ['tradingName', 'EMPRESA'],
        ['responsiblePosition', 'CARGO'],
        ['phoneNumber', 'TELEFONE'],
        ['email', 'E-MAIL'],
        ['city', 'CIDADE']

      ]
    });
    res.json(providers);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar provedores' });
  }
});

module.exports = router;
