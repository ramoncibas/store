const Database = require("../../config/db");
const getAllShoppingCartProductsModel = require("../../models/ShoppingCart/getAllShoppingCartModel");

/**
* Pega todos os itens dentro do carrinho de compras do ususario
* @param {*} req requisição
* @param {*} res resposta
* @returns uma coleção de produtos
*/
const getAllShoppingCartProduct = (req, res) => {
  //const id = req.query.id;
  try {
    getAllShoppingCartProductsModel(Database).then((products) => res.send(products));
  } catch (error) {
    console.log(error);
    return res.send("Something went wrong, Select Shopping Cart");
  }
}

module.exports = getAllShoppingCartProduct;