'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderPortions', [
      {
        portionValue: '1000.00',
        portionNumber: 1,
        portionDate: new Date(),
        orderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        portionValue: '1500.00',
        portionNumber: 2,
        portionDate: new Date(),
        orderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        portionValue: '2000.00',
        portionNumber: 3,
        portionDate: new Date(),
        orderId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        portionValue: '2500.00',
        portionNumber: 4,
        portionDate: new Date(),
        orderId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        portionValue: '3000.00',
        portionNumber: 5,
        portionDate: new Date(),
        orderId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderPortions', null, {});
  }
};
