'use strict';
module.exports = (sequelize, DataTypes) => {
  const DueListing = sequelize.define('DueListing', {
    debit: {
      type: DataTypes.MONEY,
      allowNull: false,
    },
    interest: {
      type: DataTypes.MONEY,
      allowNull: false,
    },
    loan_balance: {
      type: DataTypes.MONEY,
      allowNull: false,
    },
    last_payement_date: {
      type: DataTypes.DATE
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        foreignKey: 'profileId',
        onDelete: 'CASCADE',
      }
    }
  });
  return DueListing;
};
