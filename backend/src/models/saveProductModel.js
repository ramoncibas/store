const saveProductModel = function (db, product) {  
  return new Promise(function (resolve, reject) {
    db.serialize(() => {
      db.run(
        `INSERT INTO product (
            name,
            price,
            color,
            size,
            product_picture,
            discount_percentage,
            number_of_installments,
            free_shipping,
            brand_product_id,
            gender_product_id,
            category_product_id
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
        ,[
          product.name,
          product.price,
          product.color,
          product.size,
          product.product_picture,
          product.discount_percentage,
          product.number_of_installments,
          product.free_shipping,
          product.brand_product_id,
          product.gender_product_id,
          product.category_product_id
        ],
        (error) => console.log(error)
      );
    });
  });
};

module.exports = saveProductModel;
