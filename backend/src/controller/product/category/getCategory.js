const Database = require("../../config/db");
const getAllCategoryProductModel = require("../../models/getAllCategoryProductModel");

/**
 * Pega categorias disponiveis para todos os produtos
 * @param {*} req requisição
 * @param {*} res resposta
 * @returns uma coleção de categorias
 */
const getAllCategories = (req, res) => {
  try {
    getAllCategoryProductModel(Database).then((category) => res.send({categories: category}));
  } catch (error) {
    console.log(error);
    return res.send("Something went wrong, Select All Products");
  }
}

module.exports = getAllCategories;