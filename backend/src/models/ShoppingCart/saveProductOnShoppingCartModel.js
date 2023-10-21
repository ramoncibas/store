const saveProductOnShoppingCartModel = function (db, product) {
  console.log(product, 'data')
  return new Promise(function (resolve, reject) {
    db.serialize(() => {
      resolve(
        db.run(
          `INSERT INTO shopping_cart (
            product_id,             
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
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
          [
            product.id,
            product.name,
            product.size,
            product.color,
            product.price,
            product.product_picture,            
            product.discount_percentage,
            product.number_of_installments,
            product.free_shipping,
            product.brand_product_id,
            product.gender_product_id,
            product.category_product_id
          ],
          (error) => console.log(error)
        )
      );
    });

    // db.close();
  });
};

module.exports = saveProductOnShoppingCartModel;