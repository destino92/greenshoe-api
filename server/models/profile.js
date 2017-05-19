'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: ["^[a-z]+$",'i'],
        min: 4
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: ["^[a-z]+$",'i'],
        min: 4
      }
    },
    national_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[^0]\d{9}/,
        min: 10,
        max: 10,
      }
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^0\d{9}/,
        min: 10,
        max: 10,
      }
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Profile;
};
