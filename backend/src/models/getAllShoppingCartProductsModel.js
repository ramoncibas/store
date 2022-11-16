const getAllShoppingCartProductsModel = function (db) {
  return new Promise(function (resolve, reject) {
    db.serialize(() => {
      db.all(`SELECT * FROM shopping_cart`, [], (error, rows) => {
        if (error) {
          console.log(error);
        }
        resolve(rows);
      });
    });
  });
};

module.exports = getAllShoppingCartProductsModel;
