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

// src/routes/orderRoutes.js
const { Order, Invoice, Buyer, Provider } = require('../../models'); // Ajuste conforme a estrutura do seu modelo

// Obter todas as ordens
router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar ordens' });
  }
});

// Obter informações detalhadas de ordens
router.get('/details', async (req, res) => {
  try {
    const orderDetails = await Order.findAll({
      attributes: ['nota_fiscal', 'emissao', 'valor', 'status'],
      include: [
        {
          model: Buyer,
          attributes: ['nome'], // Ajuste conforme a estrutura do seu modelo
          as: 'sacado'
        },
        {
          model: Provider,
          attributes: ['nome'], // Ajuste conforme a estrutura do seu modelo
          as: 'cedente'
        }
      ]
    });
    res.json(orderDetails);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar detalhes das ordens' });
  }
});

module.exports = router;
