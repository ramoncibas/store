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
    console.log(fields)
  
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
        color: fields.color,
        size: fields.size,
        free_shipping: fields.free_shipping,
        brand_product_id: fields.brand_id,
        gender_product_id: fields.gender_id,
        category_product_id: fields.category_id        
      }).then(() => {
        res.redirect("/");
      });

    } catch (error) {
      return res.send("Something went wrong to Save the Product");
    }
  }
}