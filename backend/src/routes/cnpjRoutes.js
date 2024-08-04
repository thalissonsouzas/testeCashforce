// src/routes/cnpjRoutes.js
const express = require('express');
const router = express.Router();
const { Cnpj } = require('../../models'); // Ajuste conforme a estrutura do seu modelo

// Obter todos os CNPJs
router.get('/', async (req, res) => {
  try {
    const cnpjs = await Cnpj.findAll();
    res.json(cnpjs);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar CNPJs' });
  }
});

module.exports = router;
