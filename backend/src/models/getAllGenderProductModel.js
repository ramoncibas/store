const getAllGenderProductModel = function (db) {
  return new Promise(function getAllGenderProduct(resolve, reject) {
    db.serialize(() => {
      db.all(`SELECT * FROM gender_product`, [], (error, rows) => {      
        error ? console.log(error) : resolve(rows);
      });
    });
  });
};

module.exports = getAllGenderProductModel;
