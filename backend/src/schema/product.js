const ProductSchema = `
  CREATE TABLE IF NOT EXISTS product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price TEXT NOT NULL,
    discount_percentage INTEGER DEFAULT 0 NOT NULL,
    product_picture TEXT NOT NULL,
    number_of_installments INTEGER DEFAULT 0 NOT NULL,
    free_shipping BIT DEFAULT 0 NOT NULL
  );
`;

module.exports = ProductSchema;