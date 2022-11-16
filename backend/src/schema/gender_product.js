const GenderProductSchema = `
  CREATE TABLE IF NOT EXISTS gender_product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  );
`;

module.exports = GenderProductSchema;