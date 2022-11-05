const ShoppingCartSchema = `  
  CREATE TABLE IF NOT EXISTS shopping_cart (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id TEXT NOT NULL,    
    name TEXT,
    product_picture TEXT,
    price TEXT,
    discount TEXT,
    number_of_installments TEXT
  );
`;

// --Não preciso disso, posso referenciar so o id com o product
// --Fazer essa remoção, quando for implementar a feature de habilitar somente produtos cadastrados no banco, para comprar

module.exports = ShoppingCartSchema;