// src/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const { Order } = require('../../models'); // Ajuste conforme a estrutura do seu modelo

// Obter todas as ordens
router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar ordens' });
  }
});

module.exports = router;
