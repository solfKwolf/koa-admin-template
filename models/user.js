const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INET,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize,
    modelName: "User", // We need to choose the model name
    tableName: "sys_user",
    timestamps: false,
  }
);

module.exports = User;
