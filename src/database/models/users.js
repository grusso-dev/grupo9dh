function userData(sequelize,Datatypes){
  let tbl='user';
  let cmp={
    id:{type:Datatypes.INTEGER,primaryKey:true,autoIncrement:true},
    mail:{type:Datatypes.STRING(50)},
    password:{type:Datatypes.STRING(20)},
    fullname:{type:Datatypes.STRING(50)},
    fiscal_type:{type:Datatypes.ENUM({values: ['type1', 'type2']})},
    fiscal_value:{type:Datatypes.STRING(20)},
    create_date:{type:Datatypes.DATE},
    delete_date:{type:Datatypes.INTEGER},
    count_type:{type:Datatypes.ENUM({values: ['type1', 'type2']})},
    cbu_alias:{type:Datatypes.STRING(30)}
  }
  let cfg={camelCase:false,timestamps:false,tableName:'users'}
  const User = sequelize.define(tbl,cmp,cfg);

  User.associate=function(modelos){
    User.hasMany(modelos.conciertos, {
      as:"concierto",
      foreignKey: 'user_id'
    });
  };
  return User;

}
module.exports = userData;