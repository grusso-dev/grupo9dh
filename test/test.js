const db = require('../src/database/models');
describe("Test DB",function(){
  it("Test Usuarios",async function () {
    try {
      let usuarios = await db.user.findAll();
      return true;
    } catch (error) {
      return false;
    }
  });

  it("Test Concierto",async function() {
    try {
      let usuarios = await db.Concierto.findAll();
      return true;
    } catch (error) {
      return false;
    }
    
  });
});