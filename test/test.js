const db = require('../src/database/models');
describe("Test DB",function(){
  it("Test Usuarios",function () {
    db.user.findAll().then(()=>{
      console.log('Listo');
      return true;
    });
  });

  it("Test Concierto",function () {
    db.Concierto.findAll().then(()=>{
      return true;
    });
  });
});