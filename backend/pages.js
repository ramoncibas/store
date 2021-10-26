const Database = require("./database/db");
const saveUser = require("./utils/saveUsers");
const saveProduct = require("./utils/saveProduct");
const getAllProducts = require("./utils/getAllProducts");
const getAllShoppingCartProducts = require("./utils/getAllShoppingCartProducts");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  /**
   * Salva um produto e redireciona o usuario para home
   * @param {*} req requisição
   * @param {*} res resposta
   */
  saveProduct(req, res) {
    const fields = req.body;

    if (Object.values(fields).includes("")) {
      return res.send("Todos os campos devem ser preenchidos!");
    }

    try {
      const db = Database;

      saveProduct(db, {
        name: fields.name,
        picture: fields.picture,
        price: fields.price,
        discount: fields.discount,
        installments: fields.numberOfInstallments,
      });

      return res.redirect("/");
    } catch (error) {
      console.log(error);
      return res.send("Something went wrong, SaveProduct");
    }
  },

  /**
   * Salva o usuario na base de dados
   * @param {*} req requisição
   * @param {*} res resposta
   */
  saveUser(req, res) {
    const fields = req.body;

    if (Object.values(fields).includes("")) {
      return res.send("Todos os campos devem ser preenchidos!");
    }

    try {
      const db = Database;

      saveUser(db, {
        name: fields.name,
        email: fields.email,
        phone: fields.phone,
        picture: fields.picture,
      });

      return res.redirect("/profile");
    } catch (error) {
      console.log(error);
      return res.send("Something went wrong, SaveUser");
    }
  },

  /**
   * Pega todos os usuarios salvos
   * @param {*} req requisição
   * @param {*} res resposta
   * @returns uma coleção de usuarios
   */
  selectUser(req, res) {
    try {
      const db = Database;
      const user = db.run("SELECT MAX(id) FROM user");
      return res.render("/profile", { user });
    } catch (error) {
      console.log(error);
      return res.send("Something went wrong, Select All Users");
    }
  },

  /**
   * Pega todos os produtos salvos
   * @param {*} req requisição
   * @param {*} res resposta
   * @returns uma coleção de produtos
   */
  getAllProducts(req, res) {
    try {
      const db = Database;
      const products = getAllProducts(db);
      console.log(products);
      return res.render("/", { products });
    } catch (error) {
      console.log(error);
      return res.send("Something went wrong, Select All Products");
    }
  },

  /**
   * Pega todos os itens dentro do carrinho de compras do ususario
   * @param {*} req requisição
   * @param {*} res resposta
   * @returns uma coleção de produtos
   */
  getShoppingCartProduct(req, res) {
    //const id = req.query.id;
    try {
      const db = Database;
      const products = getAllShoppingCartProducts(db);
      return res.render("/cart", { products });
    } catch (error) {
      console.log(error);
      return res.send("Something went wrong, Select Shopping Cart");
    }
  },
};
