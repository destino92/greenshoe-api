'use strict';
module.exports = (sequelize, DataTypes) => {
  const DueListing = sequelize.define('DueListing', {
    debit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    interest: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loan_balance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    last_payement_date: {
      type: DataTypes.DATEONLY,
    },
    due_date: {
      type: DataTypes.DATEONLY,
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
        DueListing.belongsTo(models.Profile, {
          foreignKey: 'profileId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return DueListing;
};
