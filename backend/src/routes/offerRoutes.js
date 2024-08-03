// src/routes/offerRoutes.js
const express = require('express');
const router = express.Router();
const { Offer } = require('../../models'); // Ajuste conforme a estrutura do seu modelo

// Obter todas as ofertas
router.get('/', async (req, res) => {
  try {
    const offers = await Offer.findAll();
    res.json(offers);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar ofertas' });
  }
});

module.exports = router;
