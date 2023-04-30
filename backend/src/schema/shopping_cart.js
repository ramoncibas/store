const ShoppingCartSchema = `  
  CREATE TABLE IF NOT EXISTS shopping_cart (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id TEXT NOT NULL,    
    name TEXT NOT NULL,
    size INTEGER NOT NULL,
    color TEXT NOT NULL,
    product_picture TEXT NOT NULL,
    price TEXT NOT NULL,
    number_of_installments INTEGER DEFAULT 0 NOT NULL,
    discount_percentage INTEGER DEFAULT 0 NOT NULL,    
    free_shipping BIT DEFAULT 0 NOT NULL,
    brand_product_id INTEGER NOT NULL,
    gender_product_id INTEGER NOT NULL,
    category_product_id INTEGER NOT NULL,
    FOREIGN KEY(product_id) REFERENCES product(id),
    FOREIGN KEY(brand_product_id) REFERENCES brand_product(id),
    FOREIGN KEY(gender_product_id) REFERENCES gender_product(id),
    FOREIGN KEY(category_product_id) REFERENCES category_product(id)    
  );
`;

// --Não preciso disso, posso referenciar so o id com o product
// --Fazer essa remoção, quando for implementar a feature de habilitar somente produtos cadastrados no banco, para comprar

module.exports = ShoppingCartSchema;