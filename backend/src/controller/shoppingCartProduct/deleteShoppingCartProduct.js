const Database = require("../../config/db");
const deleteShoppingCartProductModel = require("../../models/deleteShoppingCartProductModel");

/**
 * Deleta o produto correspondente do carrinho do usuário
 * @param {*} req requisição
 * @param {*} res resposta   
 */
const deleteShoppingCartProduct = (req, res) => {
  const id = req.body.id;
  try {
    deleteShoppingCartProductModel(Database, id).then((product) => res.send(product));
  } catch (error) {
    console.log(error);
    return res.send("Something went wrong, Delete product from Shopping Cart");
  }
}
module.exports = deleteShoppingCartProduct;