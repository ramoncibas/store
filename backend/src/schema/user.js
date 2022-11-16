const UserSchema = `
  CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    uuid TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    user_picture TEXT
  );
`;

// CREATE TABLE IF NOT EXISTS user (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   uuid TEXT,
//   name TEXT,
//   lastname TEXT,
//   cep TEXT,
//   cpf TEXT,
//   rg TEXT,
//   visa TEXT
// );      
module.exports = UserSchema;