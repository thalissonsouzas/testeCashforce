'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sponsor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  Sponsor.init({
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
    bank: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bankAgency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account: {
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
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Sponsor',
  });
  return Sponsor;
};
