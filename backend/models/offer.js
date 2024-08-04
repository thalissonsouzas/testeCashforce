'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define associations here if needed
    // }
  }
  Offer.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    tax: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tariff: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    adValorem: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    float: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iof: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    expiresIn: {
      type: DataTypes.DATE,
      allowNull: false
    },
    paymentStatusSponsor: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    paymentStatusProvider: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sponsorId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Offer',
  });
  return Offer;
};
