const Database = require("./database/db");
const saveUser = require("./utils/saveUsers");
const saveProduct = require("./utils/saveProduct");
const getAllProductsFromDb = require("./utils/getAllProductsFromDb");
const getAllShoppingCartProducts = require("./utils/getAllShoppingCartProducts");
const saveProductOnShoppingCartDb = require("./utils/saveProductOnShoppingCartDb")
const deleteShoppingCartProductFromDb = require("./utils/deleteShoppingCartProductFromDb")

module.exports = {
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
        price: fields.price,
        discount: fields.discount,
        number_of_installments: fields.number_of_installments,
        product_picture: fields.product_picture,
      }).then(() => {
        res.redirect("/");
      });

    } catch (error) {
      console.log(error);
      return res.send("Something went wrong, SaveProduct");
    }
  },

  saveProductOnShoppingCart(req, res) {
    const data = req.body;  
    try {
      const db = Database;

      saveProductOnShoppingCartDb(db, {
        id: data.id, 
        name: data.name, 
        product_picture: data.product_picture, 
        price: data.price, 
        discount: data.discount, 
        number_of_installments: data.number_of_installments
      });

    } catch(error) {
      console.log(error)
      return res.send("Something went wrong, saveProductOnShoppingCart");
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
        user_picture: fields.user_picture
      }).then(() => {
        res.redirect("profile");
      });
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
    const id = req.params.id;
    try {
      // Code...
    } catch (error) {
      console.log(error);
      return res.send("Something went wrong, Select All Users");
    }
  },

  getUser(req, res) {
    // Code...
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
      getAllProductsFromDb(db).then((products) => res.send(products));
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
      getAllShoppingCartProducts(db).then((products) => res.send(products));
    } catch (error) {
      console.log(error);
      return res.send("Something went wrong, Select Shopping Cart");
    }
  },

  /**
   * Remove o produto correspondente do carrinho do usuário
   * @param {*} req requisição
   * @param {*} res resposta
   * @returns uma coleção de produtos
   */
  removeShoppingCartProduct(req, res) {
    const id = req.body.id;
    try {
      const db = Database;
      deleteShoppingCartProductFromDb(db, id).then((product) => res.send(product));
    } catch (error) {
      console.log(error);
      return res.send("Something went wrong, Delete product from Shopping Cart");
    }
  }
};