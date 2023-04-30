const Database = require("../../config/db");
const getProductByIdModel = require("../../models/getProductByIdModel");

/**
 * Pega todos os produtos salvos
 * @param {*} req requisição
 * @param {*} res resposta
 * @returns uma coleção de produtos
 */
const getProductById = (req, res) => {  
  const { id } = req.params
    
  try {
    getProductByIdModel(Database, id).then((product) => res.send(product));
  } catch (error) { 
    console.log(error);
    return res.send("Something went wrong, Select All Products");
  }
}

module.exports = getProductById;