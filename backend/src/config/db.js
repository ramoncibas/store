let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(process.env.DATABASE_URL, (err) => {
  if (err) console.error('Error connecting to database:', err.message);
});
const schema = require('./schema');

//creating the database
function execute(db) {
  return (
    db.serialize(() => db.exec(schema))
  );
};

module.exports = db.on("open", () => execute(db));