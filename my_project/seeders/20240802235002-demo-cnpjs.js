'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Add seed commands here.
    await queryInterface.bulkInsert('Cnpjs', [
      {
        cnpj: '12.345.678/0001-95',
        companyType: 'Empresa de Tecnologia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cnpj: '98.765.432/0001-10',
        companyType: 'Consultoria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cnpj: '11.222.333/0001-44',
        companyType: 'Comércio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cnpj: '55.444.333/0001-22',
        companyType: 'Serviços',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cnpj: '77.888.999/0001-33',
        companyType: 'Indústria',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Add commands to revert seed here.
    await queryInterface.bulkDelete('Cnpjs', null, {});
  }
};
