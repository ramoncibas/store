const ClientTransactionsSchema = `  
  CREATE TABLE IF NOT EXISTS client_transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    uuid TEXT,
    user_uuid TEXT FORWARD KEY Ref
  );
`;

module.exports = ClientTransactionsSchema;