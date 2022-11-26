const Database = require("../../config/db");
const getAllGenderProductModel = require("../../models/getAllGenderProductModel");

/**
 * Pega generos de roupas disponiveis para todos os produtos
 * @param {*} req requisição
 * @param {*} res resposta
 * @returns uma coleção de generos
 */
const getAllGenders = (req, res) => {
  try {
    getAllGenderProductModel(Database).then((gender) => res.send({genders: gender}));
  } catch (error) {
    console.log(error);
    return res.send("Something went wrong, Select All Products");
  }
}

module.exports = getAllGenders;