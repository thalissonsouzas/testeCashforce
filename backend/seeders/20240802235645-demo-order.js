'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        orderNfId: 'NF123456',
        orderNumber: '2024001',
        orderPath: 'orders/2024001.pdf',
        orderFileName: 'order_2024001.pdf',
        orderOriginalName: 'Order 2024001',
        emissionDate: '2024-07-01',
        pdfFile: 'orders/2024001.pdf',
        emitedTo: 'Company A',
        nNf: '123456789',
        CTE: 'CTE123456',
        value: '10000.00',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 1,  // Assumindo que o ID 1 existe na tabela CNPJ
        userId: 1,   // Assumindo que o ID 1 existe na tabela de Users
        buyerId: 1,  // Assumindo que o ID 1 existe na tabela Buyer
        providerId: 1, // Assumindo que o ID 1 existe na tabela Provider
        orderStatusBuyer: '0',
        orderStatusProvider: '0',
        deliveryReceipt: 'delivery_receipt_2024001.pdf',
        cargoPackingList: 'cargo_packing_list_2024001.pdf',
        deliveryCtrc: 'delivery_ctrc_2024001.pdf'
      },
      {
        orderNfId: 'NF654321',
        orderNumber: '2024002',
        orderPath: 'orders/2024002.pdf',
        orderFileName: 'order_2024002.pdf',
        orderOriginalName: 'Order 2024002',
        emissionDate: '2024-07-02',
        pdfFile: 'orders/2024002.pdf',
        emitedTo: 'Company B',
        nNf: '987654321',
        CTE: 'CTE654321',
        value: '15000.00',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 2,  // Assumindo que o ID 2 existe na tabela CNPJ
        userId: 2,   // Assumindo que o ID 2 existe na tabela de Users
        buyerId: 2,  // Assumindo que o ID 2 existe na tabela Buyer
        providerId: 2, // Assumindo que o ID 2 existe na tabela Provider
        orderStatusBuyer: '1',
        orderStatusProvider: '1',
        deliveryReceipt: 'delivery_receipt_2024002.pdf',
        cargoPackingList: 'cargo_packing_list_2024002.pdf',
        deliveryCtrc: 'delivery_ctrc_2024002.pdf'
      },
      {
        orderNfId: 'NF789012',
        orderNumber: '2024003',
        orderPath: 'orders/2024003.pdf',
        orderFileName: 'order_2024003.pdf',
        orderOriginalName: 'Order 2024003',
        emissionDate: '2024-07-03',
        pdfFile: 'orders/2024003.pdf',
        emitedTo: 'Company C',
        nNf: '456789012',
        CTE: 'CTE789012',
        value: '20000.00',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 3,  // Assumindo que o ID 3 existe na tabela CNPJ
        userId: 3,   // Assumindo que o ID 3 existe na tabela de Users
        buyerId: 3,  // Assumindo que o ID 3 existe na tabela Buyer
        providerId: 3, // Assumindo que o ID 3 existe na tabela Provider
        orderStatusBuyer: '0',
        orderStatusProvider: '1',
        deliveryReceipt: 'delivery_receipt_2024003.pdf',
        cargoPackingList: 'cargo_packing_list_2024003.pdf',
        deliveryCtrc: 'delivery_ctrc_2024003.pdf'
      },
      {
        orderNfId: 'NF345678',
        orderNumber: '2024004',
        orderPath: 'orders/2024004.pdf',
        orderFileName: 'order_2024004.pdf',
        orderOriginalName: 'Order 2024004',
        emissionDate: '2024-07-04',
        pdfFile: 'orders/2024004.pdf',
        emitedTo: 'Company D',
        nNf: '321654987',
        CTE: 'CTE345678',
        value: '25000.00',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 4,  // Assumindo que o ID 4 existe na tabela CNPJ
        userId: 4,   // Assumindo que o ID 4 existe na tabela de Users
        buyerId: 4,  // Assumindo que o ID 4 existe na tabela Buyer
        providerId: 4, // Assumindo que o ID 4 existe na tabela Provider
        orderStatusBuyer: '1',
        orderStatusProvider: '0',
        deliveryReceipt: 'delivery_receipt_2024004.pdf',
        cargoPackingList: 'cargo_packing_list_2024004.pdf',
        deliveryCtrc: 'delivery_ctrc_2024004.pdf'
      },
      {
        orderNfId: 'NF901234',
        orderNumber: '2024005',
        orderPath: 'orders/2024005.pdf',
        orderFileName: 'order_2024005.pdf',
        orderOriginalName: 'Order 2024005',
        emissionDate: '2024-07-05',
        pdfFile: 'orders/2024005.pdf',
        emitedTo: 'Company E',
        nNf: '654321098',
        CTE: 'CTE901234',
        value: '30000.00',
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 5,  // Assumindo que o ID 5 existe na tabela CNPJ
        userId: 5,   // Assumindo que o ID 5 existe na tabela de Users
        buyerId: 5,  // Assumindo que o ID 5 existe na tabela Buyer
        providerId: 5, // Assumindo que o ID 5 existe na tabela Provider
        orderStatusBuyer: '0',
        orderStatusProvider: '1',
        deliveryReceipt: 'delivery_receipt_2024005.pdf',
        cargoPackingList: 'cargo_packing_list_2024005.pdf',
        deliveryCtrc: 'delivery_ctrc_2024005.pdf'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
