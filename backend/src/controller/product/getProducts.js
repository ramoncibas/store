const Database = require("../../config/db");
const getAllProductsFromDb = require("../../models/getAllProductsFromDb");

module.exports = {
  /**
   * Pega todos os produtos salvos
   * @param {*} req requisição
   * @param {*} res resposta
   * @returns uma coleção de produtos
   */
  getAllProducts(req, res) {    
    try {
      getAllProductsFromDb(Database).then((products) => res.send(products));
    } catch (error) {
      console.log(error);
      return res.send("Something went wrong, Select All Products");
    }
  }
}