// src/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const { Order, Invoice, Buyer, Provider } = require('../../models'); // Ajuste conforme a estrutura do seu modelo

// Obter nota fical, data de emissão, valor e status de ordens. Obter nome do comprador da tabela Buyer e nome do fornecedor da tabela Provider

router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll({
      attributes: [
        'orderNfId',
        'emissionDate',
        'value',
        'orderStatusBuyer',
      ],
      include: [
        {
          model: Buyer,
          attributes: ['name'],
          as: 'buyer'
        },
        {
          model: Provider,
          attributes: ['name'],
          as: 'provider'
        }
      ],
      limit: 1000
    });

    const formatCurrency = (value) => {
      // Converte o valor para um número e formata como uma string no padrão de reais
      return 'R$ ' + parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.').replace('.', ',');
    };
    
    const statusDescriptions = [
      'Pendente de confirmação',
      'Pedido confirmado',
      'Não reconhece o pedido',
      'Mercadoria não recebida',
      'Recebida com avaria',
      'Devolvida',
      'Recebida com devolução parcial',
      'Recebida e confirmada',
      'Pagamento Autorizado'
    ];
    
    const formattedOrders = orders.map(order => {
      return {
        'NOTA FISCAL': order.orderNfId,
        'SACADO': order.buyer ? order.buyer.name : null,
        'CEDENTE': order.provider ? order.provider.name : null,
        'EMISSÃO': order.emissionDate,
        'VALOR': formatCurrency(order.value),
        'STATUS': order.orderStatusBuyer !== null ? statusDescriptions[order.orderStatusBuyer] : null,
      };
    });

    res.json(formattedOrders);
  }  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
