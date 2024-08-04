// src/routes/sponsorRoutes.js
const express = require('express');
const router = express.Router();
const { Sponsor } = require('../../models'); // Ajuste conforme a estrutura do seu modelo

// Obter todos os patrocinadores
router.get('/', async (req, res) => {
  try {
    const sponsors = await Sponsor.findAll();
    res.json(sponsors);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar patrocinadores' });
  }
});

module.exports = router;
