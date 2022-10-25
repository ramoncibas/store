const saveProduct = function (db, product) {  
  return new Promise(function (resolve, reject) {
    db.serialize(() => {
      db.run(
        `INSERT INTO product (
            name,
            price,
            product_picture,
            discount_percentage,
            number_of_installments,
            free_shipping
          ) VALUES (?, ?, ?, ?, ?, ?);`
        ,[
          product.name,
          product.price,
          product.product_picture,
          product.discount_percentage,
          product.number_of_installments,
          product.free_shipping
        ],
        (error) => console.log(error)
      );
    });
  });
};

module.exports = saveProduct;
