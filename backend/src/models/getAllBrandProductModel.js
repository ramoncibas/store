const getAllBrandProductModel = function (db) {
  return new Promise(function getAllBrandProduct(resolve, reject) {
    db.serialize(() => {
      db.all(`SELECT * FROM brand_product`, [], (error, rows) => {
        console.log(rows)
        error ? console.log(error) : resolve(rows);
      });
    });
  });
};

module.exports = getAllBrandProductModel;
