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
        ['phoneNumber', 'TELEFONE']
      ]
    });
    res.json(buyers);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar compradores' });
  }
});

module.exports = router;
