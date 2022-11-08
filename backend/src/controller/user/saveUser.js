const Database = require("../../config/db");
const saveUser = require("../../models/saveUsers");

module.exports = {
  /**
   * Salva o usuario na base de dados
   * @param {*} req requisição
   * @param {*} res resposta
   */
   saveUser(req, res) {
    const fields = req.body;

    if (Object.values(fields).includes("")) {
      return res.send("Todos os campos devem ser preenchidos!");
    }

    try {      
      saveUser(Database, {
        name: fields.name,
        email: fields.email,
        phone: fields.phone,
        user_picture: fields.user_picture
      }).then(() => {
        res.redirect("profile");
      });
    } catch (error) {
      console.log(error);
      return res.send("Something went wrong, SaveUser");
    }
  }
}