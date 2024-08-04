// src/routes/orderPortionRoutes.js
const express = require('express');
const router = express.Router();
const { OrderPortion } = require('../../models'); // Ajuste conforme a estrutura do seu modelo

// Obter todas as partes de ordens
router.get('/', async (req, res) => {
  try {
    const orderPortions = await OrderPortion.findAll();
    res.json(orderPortions);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar partes de ordens' });
  }
});

module.exports = router;
