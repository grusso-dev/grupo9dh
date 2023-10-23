const path = require("path");
const indexController = {
  index: (req, res) => {
    res.render(path.join(__dirname, "../views/index.ejs"));
  },
  login: (req, res) => {
    res.render(path.join(__dirname, "../views/login.ejs"));
  },
  checkout: (req, res) => {
    const cart = req.session.cart;
    console.log(cart)
  if (cart) {
    res.render(path.join(__dirname, "../views/checkout.ejs"), { array: cart });
  } else {
    res.render(path.join(__dirname, "../views/checkout.ejs"), { array: [] });
  }
  },  
  register: (req, res) => {
    res.render("register");
  },
  detail: (req, res) => {
    res.render(path.join(__dirname, "../views/detail.ejs"));
  },
  todosLosConciertos: async (req, res) => {
    try {
      const conciertos = await db.Concierto.findAll({ include: [{ association: "Generos" }] });
      console.log(conciertos);
      res.render('todosLosConciertos', { concerts: conciertos });
    } catch (error) {
      console.error('Error al obtener la lista de conciertos:', error);
      // Manejar el error de alguna manera apropiada, como enviar una respuesta de error al cliente.
      res.status(500).send('Error al obtener la lista de conciertos');
    }
  },  
  registerdata: (req, res) => {
    res.render("registerdata");
  },
  addToCart: async (req, res) => {
    const { name, price } = req.body;

    try {
      const productData = {
        Name: name,
        Price: price,
        Quantity: 1,
      };

      if (!req.session.cart) {
        req.session.cart = [];
      }

      req.session.cart.push(productData);

      res.status(200).json({ message: 'Product added to cart' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = indexController;
