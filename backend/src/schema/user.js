const UserSchema = `
  CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    uuid TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    phone TEXT NOT NULL,
    user_picture TEXT,
    type TEXT DEFAULT user NOT NULL
  );
`;

module.exports = UserSchema;