function userData(sequelize,Datatypes){
  let tbl='user';
  let cmp={
    id:{type:Datatypes.INTEGER,primaryKey:true,autoIncrement:true},
    mail:{type:Datatypes.STRING(50)},
    password:{type:Datatypes.STRING(20)},
    fullname:{type:Datatypes.STRING(50)},
    fiscal_type:{type:Datatypes.ENUM({
                                        values: ['value', 'another value']
                                      })},
    fiscal_value:{type:Datatypes.STRING(20)},
    create_date:{type:Datatypes.DATE},
    delete_date:{type:Datatypes.INTEGER},
    cbu_alias:{type:Datatypes.STRING(30)},
    count_type:{type:Datatypes.ENUM({
                                      values: ['value', 'another value']
                                    })}
  }
  let cfg={camelCase:false,timestamps:false}
  const user = sequelize.define(tbl,cmp,cfg);
  
  //Relacion con esta tabla desde consert
  // user.associate=function(modelos){
  //   user.belongsTo(modelos.users,{
  //     as:"users",
  //     foreingKey:'id'
  //   });
  // };

  //Relacion de esta tabla con consert
  // user.associate=function(modelos){
  //   user.hasMany(modelos.concert,{
  //     as:"concert",
  //     foreingKey:'id'
  //   });
  // };
  
   return user;

}
module.exports = userData;