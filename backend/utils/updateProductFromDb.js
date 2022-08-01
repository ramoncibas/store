const updateProductFromDb = function (db, product) {    
  return new Promise(function (resolve, reject) {    
    db.serialize(() => {
      db.run(
        ` 
          UPDATE product 
          SET 
            name = ?,
            price = ?,
            discount = ?,
            number_of_installments = ?,
            product_picture = ?
          WHERE id = ?;
        `,
        [
          product.name,
          product.price,
          product.discount,
          product.number_of_installments,
          product.product_picture,
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
