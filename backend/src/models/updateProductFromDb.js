const updateProductFromDb = function (db, product) {    
  return new Promise(function (resolve, reject) {    
    db.serialize(() => {
      db.run(
        ` 
          UPDATE product 
          SET 
            name = ?,
            price = ?,
            discount_percentage = ?,
            number_of_installments = ?,
            product_picture = ?,
            free_shipping = ?
          WHERE id = ?;
        `,
        [
          product.name,
          product.price,
          product.discount_percentage,
          product.number_of_installments,
          product.product_picture,
          product.free_shipping,
          product.id
        ],
        (error) => console.log
      );
    });
  });
};

module.exports = updateProductFromDb;

/*

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

**/
