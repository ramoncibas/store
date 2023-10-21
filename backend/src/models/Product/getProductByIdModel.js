const getProductById = function (db, id) {  
  return new Promise(function getProduct(resolve, reject) {
    db.serialize(() => {
      db.all(
        `
          SELECT 
            p.*,
            bp.name as brand_name,
            gp.name as gender_name,
            cp.name as category_name
          FROM product p
            INNER JOIN brand_product bp on p.brand_product_id = bp.id
            INNER JOIN gender_product gp on p.gender_product_id = gp.id
            INNER JOIN category_product cp on p.category_product_id = cp.id
          WHERE p.id = ?
        `, [id], (error, rows) => {
          if (error) {
            console.log(error);
          }
          resolve(rows);
        }
      );
    });
  });
};

module.exports = getProductById;