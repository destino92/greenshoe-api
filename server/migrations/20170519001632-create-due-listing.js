'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('DueListings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      debit: {
        type: Sequelize.MONEY
      },
      interest: {
        type: Sequelize.STRING
      },
      loan_balance: {
        type: Sequelize.MONEY
      },
      due_date: {
        type: Sequelize.DATE
      },
      paid_date: {
        type: Sequelize.DATE
      },
      complete: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('DueListings');
  }
};