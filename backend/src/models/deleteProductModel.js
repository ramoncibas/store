const deleteProductModel = function (db, id) {
  return new Promise(function (resolve, reject) {    
    db.serialize(() => {
      db.run(
        `DELETE FROM product WHERE id = ?;`, [id], (error) => console.log(error)
      );
    });
  });
};

module.exports = deleteProductModel;
