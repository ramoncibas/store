const Database = require("../../config/db");
const deleteProductModel = require("../../models/Product/deleteProductModel");

/**
 * Deleta o produto correspondente da base de dados (disponivel somente para admins)
 * @param {*} req requisição
 * @param {*} res resposta   
*/
const deleteProduct = (req, res) => {
  const id = req.body.id;
  try {
    deleteProductModel(Database, id).then((product) => res.send(product));
  } catch (error) {
    console.log(error);
    return res.send("Something went wrong, Delete product from Shopping Cart");
  }
}

module.exports = deleteProduct;