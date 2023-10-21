const Database = require("../../config/db");
const getAllProductsModel = require("../../models/Product/getAllProductsModel");

/**
 * Pega todos os produtos salvos
 * @param {*} req requisição
 * @param {*} res resposta
 * @returns uma coleção de produtos
 */
const getAllProducts = (req, res) => {
  try {
    getAllProductsModel(Database).then((products) => res.send(products));
  } catch (error) {
    console.log(error);
    return res.send("Something went wrong, Select All Products");
  }
}

module.exports = getAllProducts;