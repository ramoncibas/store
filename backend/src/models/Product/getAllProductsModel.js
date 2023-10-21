const getAllProductsModel = function (db) {
  return new Promise(function getAllProducts(resolve, reject) {
    db.serialize(() => {
      db.all(`SELECT * FROM product`, [], (error, rows) => {
        if (error) {
          console.log(error);
        }
        resolve(rows);
      });
    });
  });
};

module.exports = getAllProductsModel;
