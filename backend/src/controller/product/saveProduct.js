const Database = require("../../config/db");
const saveProduct = require("../../models/saveProduct");

module.exports = {
  /**
   * Salva um produto e redireciona o usuario para home
   * @param {*} req requisição
   * @param {*} res resposta
   */
  saveProduct(req, res) {
    const fields = req.body;
    console.log('a')
  
    if (Object.values(fields).includes("") || Object.values(fields).includes(undefined)) {      
      return res.send("Todos os campos devem ser preenchidos!");
    } else if(Object.values(fields.discount_percentage) > 90) {
      return res.send("Valor do desconto ultrapassou o limite de 90%");
    }

    try {      
      saveProduct(Database, {
        name: fields.name,
        price: fields.price,
        discount_percentage: Number(fields.discount_percentage),
        number_of_installments: fields.number_of_installments,
        product_picture: fields.product_picture,
        free_shipping: fields.free_shipping
      }).then(() => {
        res.redirect("/");
      });

    } catch (error) {
      return res.send("Something went wrong to Save the Product");
    }
  }
}