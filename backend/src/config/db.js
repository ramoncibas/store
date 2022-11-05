let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("src/database/database.sqlite");
const schema = require('./schema')

//creating the database
function execute(db){
  return(
    db.serialize(() => db.exec(schema))
  );
};

module.exports = db.on("open", () => execute(db));