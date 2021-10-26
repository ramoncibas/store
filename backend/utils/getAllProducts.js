async function getAllProducts(db) {
  return db.serialize(() => {
    db.all(`SELECT * FROM product`, [], (err, rows) => {
      if(err) {console.log(err)}
      rows.forEach(row => {
        console.log(row)
        return row;
      });
    });
  });
};

module.exports = getAllProducts;
