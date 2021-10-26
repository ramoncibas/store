async function getShoppingCartProduct(db) {
  return db.serialize(() => {
    db.all(`SELECT * FROM shopping_cart`, [], (err, rows) => {
      if(err) {console.log(err)}
      rows.forEach(row => {
        console.log(row)
        return row;
      });
    });
  });
};

module.exports = getShoppingCartProduct;