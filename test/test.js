const db = require('../src/database/models');
describe("Test DB",function(){
  it("Test findAll Usuarios",async function () {
    let usuarios;
    try {
      usuarios = await db.user.findAll();
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
  it("Test findAll Checkout",async function() {
    try {
      let checkout = await db.Checkout.findAll();
      return true;
    } catch (error) {
      return false; 
    }
  });
  it("Test findAll CheckoutItem",async function() {
    let checkoutItem ;
    try {
      checkoutItem = await db.CheckoutItem.findAll();
      return true;
    } catch (error) {
      return false; 
    }
    console.log(checkoutItem);

  });
});