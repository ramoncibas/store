const updateUserModel = function (db, updateQuery, updateValues) {
  return new Promise(function (resolve, reject) {
    db.serialize(() => {
      db.run(updateQuery, updateValues,
        (error, rows) => {
          if (error) {
            console.log(error)
            reject();
          }
          resolve(rows);
          // db.close();
        }
      );
    });
  });
};

module.exports = updateUserModel;