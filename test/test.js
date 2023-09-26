const db = require('../src/database/models');
describe("Test DB",function(){
  it("Test findAll Usuarios",async function () {
    try {
      let usuarios = await db.user.findAll();
      return true;
    } catch (error) {
      return false;
    }
  });

  it("Test findAll Concierto",async function() {
    try {
      let conciertos = await db.Concierto.findAll();
      return true;
    } catch (error) {
      return false;
    }
  });
  it("Test findAll Generos",async function() {
    try {
      let generos = await db.Genero.findAll();
      return true;
    } catch (error) {
      return false;
    }
  });
  it("Test findAll Sectores",async function() {
    try {
      let sectores = await db.Sector.findAll();
      return true;
    } catch (error) {
      return false;
    }
  });
});