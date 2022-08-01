const schema = `
CREATE TABLE IF NOT EXISTS user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  phone TEXT,
  user_picture TEXT
);
CREATE TABLE IF NOT EXISTS product (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  price TEXT,
  discount TEXT,
  number_of_installments TEXT,
  product_picture TEXT
);  
CREATE TABLE IF NOT EXISTS shopping_cart (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id TEXT,
  name TEXT,
  product_picture TEXT,
  price TEXT,
  discount TEXT,
  number_of_installments TEXT
);
CREATE TABLE IF NOT EXISTS user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  uuid TEXT,
  name TEXT,
  lastname TEXT,
  cep TEXT,
  cpf TEXT,
  rg TEXT,
  visa TEXT
);      
CREATE TABLE IF NOT EXISTS client_transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  uuid TEXT,
  user_uuid TEXT FORWARD KEY Ref
);
CREATE TABLE IF NOT EXISTS payment_collection (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  uuid TEXT,
  type TEXT,
  amount TEXT,
  client_transaction_uuid TEXT FORWARD KEY Ref
);
`

module.exports = schema