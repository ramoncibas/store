const updateUserModel = function (db, updateQuery, updateValues) {
  return new Promise(function (resolve, reject) {
    db.serialize(() => {
      db.run(updateQuery, updateValues,
        (error) => console.log(error)
      );
    });
  });
};

module.exports = updateUserModel;