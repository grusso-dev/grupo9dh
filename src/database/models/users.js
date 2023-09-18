function userData(sequelize, DataTypes) { 
  let tbl = 'user'; 
  let cmp = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      mail: { type: DataTypes.STRING(50) },
      password: { type: DataTypes.STRING(20) },
      fullname: { type: DataTypes.STRING(50) },
      fiscal_type: { type: DataTypes.ENUM('type1', 'type2') },
      fiscal_value: { type: DataTypes.STRING(20), unique: true },
      create_date: { type: DataTypes.DATE },
      delete_date: { type: DataTypes.INTEGER },
      count_type: { type: DataTypes.ENUM('type1', 'type2') },
      cbu_alias: { type: DataTypes.STRING(30) }
  }
  let cfg = { camelCase: false, timestamps: false, tableName: 'users' };

  const User = sequelize.define(tbl, cmp, cfg);

  User.associate = function (modelos) {
      User.hasMany(modelos.Conciertos, {
          as: "conciertos",
          foreignKey: 'user_id'
      });
  };

  return User;
}

module.exports = userData;
