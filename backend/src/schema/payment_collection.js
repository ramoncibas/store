const PaymentCollectionSchema = `  
  CREATE TABLE IF NOT EXISTS payment_collection (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    uuid TEXT,
    type TEXT,
    amount TEXT,
    client_transaction_uuid TEXT FORWARD KEY Ref
  );
`;

module.exports = PaymentCollectionSchema;