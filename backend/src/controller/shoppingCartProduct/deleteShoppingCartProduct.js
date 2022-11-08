const Database = require("../../config/db");
const deleteShoppingCartProductFromDb = require("../../models/deleteShoppingCartProductFromDb");

module.exports = {
  /**
   * Deleta o produto correspondente do carrinho do usuário
   * @param {*} req requisição
   * @param {*} res resposta   
   */
   deleteShoppingCartProduct(req, res) {
    const id = req.body.id;
    try {
      deleteShoppingCartProductFromDb(Database, id).then((product) => res.send(product));
    } catch (error) {
      console.log(error);
      return res.send("Something went wrong, Delete product from Shopping Cart");
    }
  },
}