// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { User } = require('../../models'); // Ajuste conforme a estrutura do seu modelo

// Obter todos os usuários
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

module.exports = router;
