'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Providers', [
      {
        name: 'Tech Innovations Ltda.',
        tradingName: 'Tech Innovations',
        cashforceTax: '0011223344',
        responsibleName: 'Lucas Martins',
        responsibleEmail: 'lucas.martins@techinnovations.com.br',
        responsiblePosition: 'Chief Technology Officer',
        responsiblePhone: '11987654321',
        responsibleMobile: '11912345678',
        website: 'www.techinnovations.com.br',
        postalCode: '10020304',
        address: 'Avenida das Tecnologias',
        number: '456',
        complement: 'Edifício Inova',
        neighborhood: 'Tech Park',
        city: 'São Paulo',
        state: 'SP',
        bank: 'Banco do Futuro',
        bankAgency: '0006',
        account: '654321789',
        documents: 'certificado_inovacao.pdf',
        phoneNumber: '11987654321',
        situation: 'Ativo',
        situationDate: '2024-08-01',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 6,
        email: 'contact@techinnovations.com.br'
      },
      {
        name: 'Green Solutions Inc.',
        tradingName: 'Green Solutions',
        cashforceTax: '2233445566',
        responsibleName: 'Amanda Pereira',
        responsibleEmail: 'amanda.pereira@greensolutions.com.br',
        responsiblePosition: 'Environmental Manager',
        responsiblePhone: '31987654321',
        responsibleMobile: '31912345678',
        website: 'www.greensolutions.com.br',
        postalCode: '20230405',
        address: 'Rua da Sustentabilidade',
        number: '789',
        complement: 'Bloco Verde',
        neighborhood: 'Eco Village',
        city: 'Belo Horizonte',
        state: 'MG',
        bank: 'Banco Verde',
        bankAgency: '0007',
        account: '789123456',
        documents: 'relatorio_sustentabilidade.pdf',
        phoneNumber: '31987654321',
        situation: 'Ativo',
        situationDate: '2024-08-02',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 7,
        email: 'info@greensolutions.com.br'
      },
      {
        name: 'Creative Arts Studio',
        tradingName: 'Creative Arts',
        cashforceTax: '5566778899',
        responsibleName: 'Roberta Silva',
        responsibleEmail: 'roberta.silva@creativearts.com.br',
        responsiblePosition: 'Art Director',
        responsiblePhone: '11976543210',
        responsibleMobile: '11987654321',
        website: 'www.creativearts.com.br',
        postalCode: '30340506',
        address: 'Praça das Artes',
        number: '1010',
        complement: 'Atelier 3',
        neighborhood: 'Centro Cultural',
        city: 'Rio de Janeiro',
        state: 'RJ',
        bank: 'Banco Criativo',
        bankAgency: '0008',
        account: '101010101',
        documents: 'portfolio_arte.pdf',
        phoneNumber: '11976543210',
        situation: 'Ativo',
        situationDate: '2024-08-03',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 8,
        email: 'contact@creativearts.com.br'
      },
      {
        name: 'Health Plus Corporation',
        tradingName: 'Health Plus',
        cashforceTax: '6677889900',
        responsibleName: 'Eduardo Costa',
        responsibleEmail: 'eduardo.costa@healthplus.com.br',
        responsiblePosition: 'Clinical Director',
        responsiblePhone: '21976543210',
        responsibleMobile: '21987654321',
        website: 'www.healthplus.com.br',
        postalCode: '40450607',
        address: 'Rua da Saúde',
        number: '2020',
        complement: 'Bloco A',
        neighborhood: 'Saúde',
        city: 'São Paulo',
        state: 'SP',
        bank: 'Banco da Saúde',
        bankAgency: '0009',
        account: '202020202',
        documents: 'relatorio_clinico.pdf',
        phoneNumber: '21976543210',
        situation: 'Ativo',
        situationDate: '2024-08-04',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 9,
        email: 'support@healthplus.com.br'
      },
      {
        name: 'EduTech Academy',
        tradingName: 'EduTech',
        cashforceTax: '7788990011',
        responsibleName: 'Sofia Oliveira',
        responsibleEmail: 'sofia.oliveira@edutech.com.br',
        responsiblePosition: 'Education Coordinator',
        responsiblePhone: '31976543210',
        responsibleMobile: '31987654321',
        website: 'www.edutech.com.br',
        postalCode: '50560708',
        address: 'Av. da Educação',
        number: '303',
        complement: 'Sala 5',
        neighborhood: 'Academia',
        city: 'Curitiba',
        state: 'PR',
        bank: 'Banco Educacional',
        bankAgency: '0010',
        account: '303030303',
        documents: 'certificado_educacao.pdf',
        phoneNumber: '31976543210',
        situation: 'Ativo',
        situationDate: '2024-08-05',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 10,
        email: 'info@edutech.com.br'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Providers', null, {});
  }
};
