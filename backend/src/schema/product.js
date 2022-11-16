const ProductSchema = `
  CREATE TABLE IF NOT EXISTS product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price TEXT NOT NULL,
    size INTEGER NULL,
    color TEXT NULL,
    discount_percentage INTEGER DEFAULT 0 NOT NULL,
    product_picture TEXT NOT NULL,
    number_of_installments INTEGER DEFAULT 0 NOT NULL,
    free_shipping BIT DEFAULT 0 NOT NULL,
    brand_product_id INTEGER NULL,
    gender_product_id INTEGER NULL,
    category_product_id INTEGER NULL,
    FOREIGN KEY(brand_id) REFERENCES brand_product(id),
    FOREIGN KEY(gender_id) REFERENCES gender_product(id),
    FOREIGN KEY(category_id) REFERENCES category_product(id)
  );
`;

module.exports = ProductSchema;