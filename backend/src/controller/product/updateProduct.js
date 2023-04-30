const Database = require("../../config/db");
const updateProductModel = require("../../models/updateProductModel");

/**
 * Atualiza um produto
 * @param {*} req requisição
 * @param {*} res resposta
 */
const updateProduct = (req, res) => {
  const fields = req.body;
  
  console.log(fields.discount_percentage, 'chegou')
  if (Object.values(fields).includes("")) {
    return res.send("Todos os campos devem ser preenchidos!");
  }

  try {
    updateProductModel(Database, {
      id: fields.id,
      name: fields.name,
      price: fields.price,
      discount_percentage: fields.discount_percentage,
      number_of_installments: fields.number_of_installments,
      product_picture: fields.product_picture,
      free_shipping: fields.free_shipping
    }).then(() => {
      res.redirect("/");
    });

  } catch (error) {
    console.log(error);
    return res.send("Something went wrong, SaveProduct");
  }
}

module.exports = updateProduct;