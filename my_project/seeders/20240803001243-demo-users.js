'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Carlos Silva',
        email: 'carlos.silva@example.com',
        phoneNumber: '11987654321',
        mobile: '11912345678',
        departament: 'Financeiro',
        verificationCode: 'abcd1234',
        emailChecked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        cashforceAdm: true
      },
      {
        name: 'Ana Pereira',
        email: 'ana.pereira@example.com',
        phoneNumber: '21987654321',
        mobile: '21912345678',
        departament: 'Recursos Humanos',
        verificationCode: 'efgh5678',
        emailChecked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        cashforceAdm: false
      },
      {
        name: 'João Oliveira',
        email: 'joao.oliveira@example.com',
        phoneNumber: '31987654321',
        mobile: '31912345678',
        departament: 'Marketing',
        verificationCode: 'ijkl9012',
        emailChecked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        cashforceAdm: false
      },
      {
        name: 'Mariana Souza',
        email: 'mariana.souza@example.com',
        phoneNumber: '41987654321',
        mobile: '41912345678',
        departament: 'TI',
        verificationCode: 'mnop3456',
        emailChecked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        cashforceAdm: false
      },
      {
        name: 'Pedro Costa',
        email: 'pedro.costa@example.com',
        phoneNumber: '51987654321',
        mobile: '51912345678',
        departament: 'Vendas',
        verificationCode: 'qrst7890',
        emailChecked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        cashforceAdm: false
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
