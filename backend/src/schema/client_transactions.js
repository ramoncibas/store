const ClientTransactionsSchema = `  
  CREATE TABLE IF NOT EXISTS client_transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    uuid TEXT,    
    user_uuid TEXT NULL,    
    FOREIGN KEY(user_uuid) REFERENCES user(uuid)
  );
`;

module.exports = ClientTransactionsSchema;