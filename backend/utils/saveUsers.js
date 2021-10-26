async function saveUser(db, user) {
  return db.serialize(() => {
    return db.run(`
      INSERT INTO user (name, email, phone, user_picture)
      VALUES ("${user.name}","${user.email}","${user.phone}","${user.picture}");
    `);
  });
}

module.exports = saveUser;
