'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buyer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Buyer.hasMany(models.Order, { foreignKey: 'buyerId', as: 'orders' });
    }
  }
  Buyer.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tradingName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cashforceTax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    responsibleName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    responsibleEmail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    responsiblePosition: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    responsiblePhone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    responsibleMobile: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    postalCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    complement: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    neighborhood: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    situation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    situationDate: {
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
    confirm: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
 
  
  }, {
    sequelize,
    modelName: 'Buyer',
  });
  return Buyer;
};