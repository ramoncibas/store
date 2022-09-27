const saveProductOnShoppingCartDb = function (db, product) {
  return new Promise(function (resolve, reject) {
    db.serialize(() => {
      resolve(
        db.run(
          `INSERT INTO shopping_cart (product_id, name, product_picture, price, discount, number_of_installments, free_shipping) VALUES (?, ?, ?, ?, ?, ?, ?);`,
          [
            product.id,
            product.name,
            product.product_picture,
            product.price,
            product.discount,
            product.number_of_installments,
            product.free_shipping
          ],
          (error) => console.log
        )
      );
    });
  });
};

module.exports = saveProductOnShoppingCartDb;
