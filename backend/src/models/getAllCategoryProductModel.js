const getAllCategoryProductModel = function (db) {
  return new Promise(function getAllCategoryProduct(resolve, reject) {
    db.serialize(() => {
      db.all(`SELECT * FROM category_product`, [], (error, rows) => {      
        error ? console.log(error) : resolve(rows);
      });
    });
  });
};

module.exports = getAllCategoryProductModel;
