'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Providers', [
      {
        name: 'Fornecedor A',
        tradingName: 'Fornecedor A LTDA',
        cashforceTax: '123456789',
        responsibleName: 'João da Silva',
        responsibleEmail: 'joao.silva@fornecedora.com.br',
        responsiblePosition: 'Gerente',
        responsiblePhone: '11987654321',
        responsibleMobile: '11912345678',
        website: 'www.fornecedora.com.br',
        postalCode: '12345678',
        address: 'Rua Exemplo',
        number: '123',
        complement: 'Apto 1',
        neighborhood: 'Centro',
        city: 'São Paulo',
        state: 'SP',
        bank: 'Banco Exemplo',
        bankAgency: '0001',
        account: '123456',
        documents: 'documento.pdf',
        phoneNumber: '11987654321',
        situation: 'Ativo',
        situationDate: '2024-08-01',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 1,
        email: 'fornecedorA@exemplo.com.br'
      },
      {
        name: 'Fornecedor B',
        tradingName: 'Fornecedor B LTDA',
        cashforceTax: '987654321',
        responsibleName: 'Maria Oliveira',
        responsibleEmail: 'maria.oliveira@fornecedorb.com.br',
        responsiblePosition: 'Diretora',
        responsiblePhone: '21987654321',
        responsibleMobile: '21912345678',
        website: 'www.fornecedorb.com.br',
        postalCode: '87654321',
        address: 'Avenida Exemplo',
        number: '456',
        complement: 'Sala 2',
        neighborhood: 'Jardim',
        city: 'Rio de Janeiro',
        state: 'RJ',
        bank: 'Banco Exemplo B',
        bankAgency: '1234',
        account: '654321',
        documents: 'documentoB.pdf',
        phoneNumber: '21987654321',
        situation: 'Inativo',
        situationDate: '2024-07-01',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 2,
        email: 'fornecedorB@exemplo.com.br'
      },
      // Adicione mais registros conforme necessário
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Providers', null, {});
  }
};
