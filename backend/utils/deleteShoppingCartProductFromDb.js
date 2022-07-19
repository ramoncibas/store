const deleteShoppingCartProductFromDb = function (db, id) {
  return new Promise(function (resolve, reject) {    
    db.serialize(() => {
      db.run(
        `DELETE FROM shopping_cart WHERE id = ?;`, 
        [
          id
        ],
        (error) => console.log
      );
    });
  });
};

module.exports = deleteShoppingCartProductFromDb;
