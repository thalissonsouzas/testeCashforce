'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Offers', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      tax: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      tariff: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      adValorem: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      float: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      iof: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false
      },
      paymentStatusSponsor: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      paymentStatusProvider: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Offers');
  }
};
