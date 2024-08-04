// src/routes/buyerRoutes.js
const express = require('express');
const router = express.Router();
const { Buyer } = require('../../models'); // Ajuste conforme a estrutura do seu modelo

// Obter todos os compradores
router.get('/', async (req, res) => {
  try {
    const buyers = await Buyer.findAll({
      attributes: [
        ['name', 'NOME'],
        ['tradingName', 'EMPRESA'],
        ['responsiblePosition', 'CARGO'],
        ['phoneNumber', 'TELEFONE'],
        // ['email', 'E-MAIL'],
        ['city', 'CIDADE']
      ]
    });
    res.json(buyers);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar compradores' });
  }
});

module.exports = router;
