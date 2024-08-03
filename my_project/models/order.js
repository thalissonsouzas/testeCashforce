'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define associations here
      // e.g., Order.belongsTo(models.Cnpj, { foreignKey: 'cnpjId' });
      // e.g., Order.belongsTo(models.User, { foreignKey: 'userId' });
      // e.g., Order.belongsTo(models.Buyer, { foreignKey: 'buyerId' });
      // e.g., Order.belongsTo(models.Provider, { foreignKey: 'providerId' });
    }
  }
  Order.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    orderNfId: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    orderNumber: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    orderPath: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    orderFileName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    orderOriginalName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emissionDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pdfFile: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emitedTo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nNf: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CTE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    buyerId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    providerId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orderStatusBuyer: {
      type: DataTypes.STRING(255),
      defaultValue: '0'
    },
    orderStatusProvider: {
      type: DataTypes.STRING(255),
      defaultValue: '0'
    },
    deliveryReceipt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cargoPackingList: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deliveryCtrc: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
