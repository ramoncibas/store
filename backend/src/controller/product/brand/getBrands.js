const Database = require("../../config/db");
const getAllBrandProductModel = require("../../models/getAllBrandProductModel");

/**
 * Pega marcas disponiveis para todos os produtos
 * @param {*} req requisição
 * @param {*} res resposta
 * @returns uma coleção de marcas
 */
const getAllBrands = (req, res) => {
  console.log('passou')
  try {
    getAllBrandProductModel(Database).then((brand) => res.send({brands: brand}));
  } catch (error) {
    console.log(error);
    return res.send("Something went wrong, Select All Brands");
  }
}

module.exports = getAllBrands;