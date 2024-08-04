'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      mobile: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      departament: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      verificationCode: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      emailChecked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cashforceAdm: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  }
};
