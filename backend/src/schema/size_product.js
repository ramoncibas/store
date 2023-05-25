const SizeProductSchema = `
  CREATE TABLE IF NOT EXISTS size_product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    size TEXT NOT NULL
  );
`;

module.exports = SizeProductSchema;