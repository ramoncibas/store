const CategoryProductSchema = `
  CREATE TABLE IF NOT EXISTS category_product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  );
`;

module.exports = CategoryProductSchema;