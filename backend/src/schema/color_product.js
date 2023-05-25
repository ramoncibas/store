const ColorProductSchema = `
  CREATE TABLE IF NOT EXISTS color_product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    color TEXT NOT NULL
  );
`;

module.exports = ColorProductSchema;