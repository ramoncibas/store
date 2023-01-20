const findUserByEmail = function (db, email) {
  return new Promise(function (resolve, reject) {
    db.serialize(() => {
      db.all(`SELECT * FROM users WHERE email = ?;`, [email], (error, rows) => {
        error ? console.log(error) : resolve(rows);
      });
    });
    // db.close();
  });
};

module.exports = findUserByEmail;

// Fazer uma classe "findBy" .id .uuid .email .cpf_cnpj