'use strict';

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Offers', [
      {
        tax: 'Imposto sobre Circulação de Mercadorias e Serviços',
        tariff: 'Tarifa Normal',
        adValorem: '5%',
        float: '0.5%',
        iof: '0.38%',
        expiresIn: new Date('2024-12-31'),
        paymentStatusSponsor: 1,
        paymentStatusProvider: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: 1,
        sponsorId: 1
      },
      {
        tax: 'Imposto sobre Produtos Industrializados',
        tariff: 'Tarifa Reduzida',
        adValorem: '3%',
        float: '0.3%',
        iof: '0.25%',
        expiresIn: new Date('2024-11-30'),
        paymentStatusSponsor: 0,
        paymentStatusProvider: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: 2,
        sponsorId: 2
      },
      {
        tax: 'Imposto sobre Operações Financeiras',
        tariff: 'Tarifa Alta',
        adValorem: '7%',
        float: '0.7%',
        iof: '0.50%',
        expiresIn: new Date('2024-10-31'),
        paymentStatusSponsor: 1,
        paymentStatusProvider: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: 3,
        sponsorId: 3
      },
      {
        tax: 'Imposto sobre a Renda',
        tariff: 'Tarifa Média',
        adValorem: '4%',
        float: '0.4%',
        iof: '0.30%',
        expiresIn: new Date('2024-09-30'),
        paymentStatusSponsor: 0,
        paymentStatusProvider: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: 4,
        sponsorId: 4
      },
      {
        tax: 'Imposto sobre Circulação de Mercadorias e Serviços',
        tariff: 'Tarifa Normal',
        adValorem: '5%',
        float: '0.5%',
        iof: '0.38%',
        expiresIn: new Date('2024-08-31'),
        paymentStatusSponsor: 1,
        paymentStatusProvider: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        orderId: 5,
        sponsorId: 5
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Offers', null, {});
  }
};
