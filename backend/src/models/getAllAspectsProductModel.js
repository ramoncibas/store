const getAllAspectsProductModel = function (db) {
  return new Promise(function a(resolve, reject)  {
    db.serialize(() => {
      db.all(
        `
        SELECT
            t1.id AS brand_id,
            t1.name AS brand_name,
            t2.id AS gender_id,
            t2.name AS gender_name,
            t3.id AS category_id,
            t3.name AS category_name,
            t5.id AS color_id,
            t5.color AS color,
            t6.id AS size_id,
            t6.size AS size
        FROM brand_product t1
        LEFT JOIN gender_product t2 ON t1.id = t2.id
        LEFT JOIN category_product t3 ON t1.id = t3.id
        LEFT JOIN color_product t5 ON t1.id = t5.id
        LEFT JOIN size_product t6 ON t1.id = t6.id
        
        UNION ALL
        
        SELECT 
            t1.id AS brand_id,
            t1.name AS brand_name,
            t2.id AS gender_id,
            t2.name AS gender_name,
            t3.id AS category_id,
            t3.name AS category_name,
            t5.id AS color_id,
            t5.color AS color,
            t6.id AS size_id,
            t6.size AS size
        FROM gender_product t2
        LEFT JOIN brand_product t1 ON t1.id = t2.id
        LEFT JOIN category_product t3 ON t2.id = t3.id
        LEFT JOIN color_product t5 ON t2.id = t5.id
        LEFT JOIN size_product t6 ON t2.id = t6.id
        WHERE t1.id IS NULL
        
        UNION ALL
        
        SELECT 
            t1.id AS brand_id,
            t1.name AS brand_name,
            t2.id AS gender_id,
            t2.name AS gender_name,
            t3.id AS category_id,
            t3.name AS category_name,
            t5.id AS color_id,
            t5.color AS color,
            t6.id AS size_id,
            t6.size AS size
        FROM category_product t3
        LEFT JOIN brand_product t1 ON t1.id = t3.id
        LEFT JOIN gender_product t2 ON t2.id = t3.id
        LEFT JOIN color_product t5 ON t3.id = t5.id
        LEFT JOIN size_product t6 ON t3.id = t6.id
        WHERE t1.id IS NULL AND t2.id IS NULL
        
        UNION ALL
        
        SELECT 
            t1.id AS brand_id,
            t1.name AS brand_name,
            t2.id AS gender_id,
            t2.name AS gender_name,
            t3.id AS category_id,
            t3.name AS category_name,
            t5.id AS color_id,
            t5.color AS color,
            t6.id AS size_id,
            t6.size AS size
        FROM color_product t5
        LEFT JOIN brand_product t1 ON t1.id = t5.id
        LEFT JOIN gender_product t2 ON t2.id = t5.id
        LEFT JOIN category_product t3 ON t3.id = t5.id
        LEFT JOIN size_product t6 ON t5.id = t6.id
        WHERE t1.id IS NULL AND t2.id IS NULL AND t3.id IS NULL
        
        UNION ALL
        
        SELECT 
            t1.id AS brand_id,
            t1.name AS brand_name,
            t2.id AS gender_id,
            t2.name AS gender_name,
            t3.id AS category_id,
            t3.name AS category_name,
            t5.id AS color_id,
            t5.color AS color,
            t6.id AS size_id,
            t6.size AS size
        FROM size_product t6
        LEFT JOIN brand_product t1 ON t1.id = t6.id
        LEFT JOIN gender_product t2 ON t2.id = t6.id
        LEFT JOIN category_product t3 ON t3.id = t6.id
        LEFT JOIN color_product t5 ON t6.id = t5.id
        WHERE t1.id IS NULL AND t2.id IS NULL AND t3.id IS NULL AND t5.id IS NULL
      `,
        [],
        (error, rows) => {
          if(error) {
            console.error(error)
            reject(error);
            return;
          }
          resolve(rows);
        }
      );
    });

    // db.close();
  });
};

module.exports = getAllAspectsProductModel;
