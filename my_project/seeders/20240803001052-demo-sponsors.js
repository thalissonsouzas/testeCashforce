'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sponsors', [
      {
        name: 'João Santos',
        tradingName: 'João Santos Ltda',
        cashforceTax: '123456789',
        responsibleName: 'João Santos',
        responsibleEmail: 'joao.santos@joaosantos.com.br',
        responsiblePosition: 'Diretor',
        responsiblePhone: '11987654321',
        responsibleMobile: '11912345678',
        website: 'www.joaosantos.com.br',
        postalCode: '12345678',
        address: 'Rua dos Exemplos',
        number: '101',
        complement: 'Sala 1',
        neighborhood: 'Centro',
        city: 'São Paulo',
        state: 'SP',
        bank: 'Banco Exemplo',
        bankAgency: '0001',
        account: '123456',
        phoneNumber: '11987654321',
        situation: 'Ativo',
        situationDate: '2024-08-01',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 1,
        email: 'sponsor1@exemplo.com.br'
      },
      {
        name: 'Maria Oliveira',
        tradingName: 'Maria Oliveira e Associados',
        cashforceTax: '987654321',
        responsibleName: 'Maria Oliveira',
        responsibleEmail: 'maria.oliveira@mariaoliveira.com.br',
        responsiblePosition: 'Gerente Geral',
        responsiblePhone: '21987654321',
        responsibleMobile: '21912345678',
        website: 'www.mariaoliveira.com.br',
        postalCode: '87654321',
        address: 'Avenida das Américas',
        number: '202',
        complement: 'Apto 2',
        neighborhood: 'Barra',
        city: 'Rio de Janeiro',
        state: 'RJ',
        bank: 'Banco do Brasil',
        bankAgency: '1234',
        account: '654321',
        phoneNumber: '21987654321',
        situation: 'Inativo',
        situationDate: '2024-07-01',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 2,
        email: 'sponsor2@exemplo.com.br'
      },
      // Adicione mais registros conforme necessário
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sponsors', null, {});
  }
};
