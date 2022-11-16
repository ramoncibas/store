const Database = require("../../config/db");
const saveProductOnShoppingCartModel = require("../../models/saveProductOnShoppingCartModel");

/**
   * Salva um produto no carrinho de compras do usuário
   * @param {*} req requisição
   * @param {*} res resposta
   */
 const saveProductOnShoppingCart = (req, res) => {
  const data = req.body;    
  console.log(data)
  try {      
    saveProductOnShoppingCartModel(Database, {
      id: data.id,
      name: data.name,
      product_picture: data.product_picture,
      price: data.price,
      discount_percentage: data.discount_percentage,
      number_of_installments: data.number_of_installments,
      free_shipping: data.free_shipping
    });

  } catch (error) {
    console.log(error)
    return res.send("Something went wrong, saveProductOnShoppingCart");
  }
}

module.exports = saveProductOnShoppingCart;