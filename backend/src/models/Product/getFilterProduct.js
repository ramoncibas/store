const getFilterProduct = async function (db, filter) {
  try {
    if (!filter) return;

    const { gender, category, brand, color, size } = filter;

    let sql = "SELECT * FROM product WHERE 1=1";
    const params = [];

    if (gender) {
      sql += " AND gender_product_id = ?";
      params.push(gender);
    }

    if (category) {
      sql += " AND category_product_id >= ?";
      params.push(category);
    }

    if (brand) {
      sql += " AND brand_product_id >= ?";
      params.push(brand);
    }

    if (color) {
      sql += " AND color_id >= ?";
      params.push(color);
    }

    if (size) {
      sql += " AND size_id >= ?";
      params.push(size);
    }

    const rows = await new Promise((resolve, reject) => {
      db.all(sql, params, (error, rows) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows);
        }
      });
    });

    console.log(rows)

    return rows;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

module.exports = getFilterProduct;
