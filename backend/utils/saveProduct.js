async function saveProduct(db, product) {  
  return db.serialize(() => {
    return db.run(`
      INSERT INTO product (name, price, discount, number_of_installments, product_picture) 
      VALUES ("${product.name}","${product.price}","${product.discount}","${product.number_of_installments}", "${product.picture}");
    `);
  });
}

module.exports = saveProduct;
