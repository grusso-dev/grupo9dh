const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const tbl = "user";
  const cmp = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    mail: { type: DataTypes.STRING(50) },
    password: { type: DataTypes.STRING(20) },
    fullname: { type: DataTypes.STRING(50) },
    fiscal_type: { type: DataTypes.ENUM('value', 'another value') },
    fiscal_value: { type: DataTypes.STRING(20), unique: true },
    create_date: { type: DataTypes.DATE },
    delete_date: { type: DataTypes.INTEGER },
    cbu_alias: { type: DataTypes.STRING(30) },
    count_type: { type: DataTypes.ENUM('value', 'another value') },
  };
  const cfg = { tableName: 'user', camelCase: false, timestamps: false };

  const User = sequelize.define(tbl, cmp, cfg);

  User.associate = function (models) {
    User.hasMany(models.Concierto, {
      as: "Conciertos",
      foreignKey: 'user_id'
    });
  };

  return User;
};
