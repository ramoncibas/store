const Database = require("../../config/db");
const deleteProductFromDb = require("../../models/deleteProductFromDb");

module.exports = {
  /**
   * Deleta o produto correspondente da base de dados (disponivel somente para admins)
   * @param {*} req requisição
   * @param {*} res resposta   
  */
   deleteProduct(req, res) {
    const id = req.body.id;
    try {      
      deleteProductFromDb(Database, id).then((product) => res.send(product));
    } catch (error) {
      console.log(error);
      return res.send("Something went wrong, Delete product from Shopping Cart");
    }
  }
}