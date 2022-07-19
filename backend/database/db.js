let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(__dirname + "/database.sqlite");

//creating the database
function execute(db){
  return(
    db.serialize(() => db.exec(
    `
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
    `))
  );
};

module.exports = db.on("open", () => execute);