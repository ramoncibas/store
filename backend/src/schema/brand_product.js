const BrandProductSchema = `
  CREATE TABLE IF NOT EXISTS brand_product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  );
`;

module.exports = BrandProductSchema;