const saveUser = function (db, user) {
  return new Promise(function (resolve, reject) {
    db.serialize(() => {
      resolve(
        db.run(
          `INSERT INTO user (name, email, phone, user_picture) VALUES (?, ?, ?, ?);`,
          [user.name, user.email, user.phone, user.user_picture],
          (error) => console.log
        )
      );
    });
  });
};

module.exports = saveUser;
