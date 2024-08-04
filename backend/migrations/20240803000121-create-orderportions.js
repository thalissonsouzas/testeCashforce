'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('OrderPortions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      portionNumber: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      portionValue: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      portionDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders', // Nome da tabela referenciada
          key: 'id'
        },
        onDelete: 'CASCADE' // O que acontece com os registros quando um pedido é excluído
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('OrderPortions');
  }
};
