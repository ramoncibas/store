const saveUserModel = async function (db, data) {
  return new Promise(function (resolve, reject) {
    db.serialize(() => {
      db.all(        
        `INSERT INTO users (uuid, first_name, last_name, email, password, phone, user_picture) VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING *; `,
        [
          data.uuid,
          data.first_name,
          data.last_name,
          data.email,
          data.password,
          data.phone,
          data.user_picture
        ],
        (error, rows) => {
          if (error) {
            console.log(error)
          }
          resolve(rows);
          // db.close();
        }
      );      
    });

  });
};

module.exports = saveUserModel;
