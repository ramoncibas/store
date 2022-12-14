const findUserByEmail = function (db, user) {
  return new Promise(function (resolve, reject) {
    db.serialize(() => {
      db.all(`SELECT * FROM users WHERE email = ?;`, [user.email], (error, rows) => {
        error ? console.log(error) : resolve(rows);        
      });      
    });
    // db.close();
  });
};

module.exports = findUserByEmail;
