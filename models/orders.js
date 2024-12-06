'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orders.init({
    customer_id: DataTypes.INTEGER,
    customer_name: DataTypes.STRING,
    address: DataTypes.STRING,
    products_ordered: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};