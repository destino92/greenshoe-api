'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('DueListings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      debit: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      interest: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      loan_balance: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      due_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      last_payement_date: {
        type: Sequelize.DATE,
      },
      complete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      profileId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Profiles',
          key: 'id',
          as: 'profileId',
        },
      },
    }),
  down: (queryInterface/*, Sequelize */) =>
    queryInterface.dropTable('DueListings'),
};
