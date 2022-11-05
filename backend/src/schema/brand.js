const BrandSchema = `
  CREATE TABLE IF NOT EXISTS brand (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  );
`;

module.exports = BrandSchema;