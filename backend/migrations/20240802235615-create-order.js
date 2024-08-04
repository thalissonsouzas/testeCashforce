'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      orderNfId: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      orderNumber: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      orderPath: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      orderFileName: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      orderOriginalName: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      emissionDate: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      pdfFile: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      emitedTo: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      nNf: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      CTE: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      value: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      buyerId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      providerId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      orderStatusBuyer: {
        type: Sequelize.STRING(255),
        defaultValue: '0'
      },
      orderStatusProvider: {
        type: Sequelize.STRING(255),
        defaultValue: '0'
      },
      deliveryReceipt: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      cargoPackingList: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      deliveryCtrc: {
        type: Sequelize.STRING(255),
        allowNull: true
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Orders');
  }
};
