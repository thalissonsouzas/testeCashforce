// src/config.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cashforce_v3', 'root', 'senha', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
