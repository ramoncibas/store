const PaymentCollectionSchema = `  
  CREATE TABLE IF NOT EXISTS payment_collection (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    uuid TEXT,
    type TEXT,
    amount TEXT,     
    client_transaction_uuid TEXT NULL,    
    FOREIGN KEY(client_transaction_uuid) REFERENCES client_transaction(uuid)
  );
`;

module.exports = PaymentCollectionSchema;