const GenderSchema = `
  CREATE TABLE IF NOT EXISTS gender (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  );
`;

module.exports = GenderSchema;