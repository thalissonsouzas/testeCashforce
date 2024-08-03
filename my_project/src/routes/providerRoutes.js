// src/routes/providerRoutes.js
const express = require('express');
const router = express.Router();
const { Provider } = require('../../models'); // Ajuste conforme a estrutura do seu modelo

// Obter todos os provedores
router.get('/', async (req, res) => {
  try {
    const providers = await Provider.findAll();
    res.json(providers);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar provedores' });
  }
});

module.exports = router;
