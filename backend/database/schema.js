const schema = `
CREATE TABLE IF NOT EXISTS user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  user_picture TEXT
);
CREATE TABLE IF NOT EXISTS product (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  discount_percentage INTEGER DEFAULT 0 NOT NULL,
  product_price TEXT NOT NULL,
  number_of_installments INTEGER DEFAULT 0 NOT NULL,
  free_shipping BIT DEFAULT 0 NOT NULL
);  
CREATE TABLE IF NOT EXISTS shopping_cart (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id TEXT NOT NULL,
  --Não preciso disso, posso referenciar so o id com o product
  --Fazer essa remoção, quando for implementar a feature de habilitar somente produtos cadastrados no banco, para comprar
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