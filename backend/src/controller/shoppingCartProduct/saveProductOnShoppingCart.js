const Database = require("../../config/db");
const saveProductOnShoppingCartModel = require("../../models/saveProductOnShoppingCartModel");

/**
   * Salva um produto no carrinho de compras do usuário
   * @param {*} req requisição
   * @param {*} res resposta
   */
const saveProductOnShoppingCart = (req, res) => {
  const {
    id,
    name,
    size,
    color,
    price,
    product_picture,    
    discount_percentage,
    number_of_installments,
    free_shipping,
    brand_product_id,
    gender_product_id,
    category_product_id
  } = req.body;

  try {
    saveProductOnShoppingCartModel(Database, {
      id,
      name,
      price,
      size,
      color,
      product_picture,
      discount_percentage,
      number_of_installments,
      free_shipping,
      brand_product_id,
      gender_product_id,
      category_product_id
    });

  } catch (error) {
    console.log(error)
    return res.send("Something went wrong, saveProductOnShoppingCart");
  }
}

module.exports = saveProductOnShoppingCart;