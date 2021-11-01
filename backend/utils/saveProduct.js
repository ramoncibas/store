const saveProduct = function (db, product) {
  return new Promise(function (resolve, reject) {
    db.serialize(() => {
      db.run(
        `INSERT INTO product (name, price, discount, number_of_installments, product_picture) VALUES (?, ?, ?, ?, ?);`,
        [
          product.name,
          product.price,
          product.discount,
          product.number_of_installments,
          product.product_picture,
        ],
        (error) => console.log
      );
    });
  });
};

module.exports = saveProduct;
