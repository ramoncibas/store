const ShoppingCartSchema = `  
  CREATE TABLE IF NOT EXISTS shopping_cart (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id TEXT NOT NULL,    
    name TEXT NOT NULL,
    product_picture TEXT NOT NULL,
    price TEXT NOT NULL,
    number_of_installments TEXT NOT NULL,
    discount_percentage INTEGER DEFAULT 0 NOT NULL,
    free_shipping BIT DEFAULT 0 NOT NULL
  );
`;

// --Não preciso disso, posso referenciar so o id com o product
// --Fazer essa remoção, quando for implementar a feature de habilitar somente produtos cadastrados no banco, para comprar

module.exports = ShoppingCartSchema;