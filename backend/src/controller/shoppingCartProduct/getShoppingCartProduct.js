const Database = require("../../config/db");
const getAllShoppingCartProducts = require("../../models/getAllShoppingCartProducts");

module.exports = {
  /**
 * Pega todos os itens dentro do carrinho de compras do ususario
 * @param {*} req requisição
 * @param {*} res resposta
 * @returns uma coleção de produtos
 */
  getShoppingCartProduct(req, res) {
    //const id = req.query.id;    
    try {
      getAllShoppingCartProducts(Database).then((products) => res.send(products));
    } catch (error) {
      console.log(error);
      return res.send("Something went wrong, Select Shopping Cart");
    }
  }
}