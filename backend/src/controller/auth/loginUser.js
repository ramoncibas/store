require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const Database = require("../../config/db");
const findUserByEmail = require("../../models/fidUserByEmail");

/**
 * Realiza a autenticação de um usuário no banco
 * @param {*} req requisição
 * @param {*} res resposta
 */
const loginUser = async (req, res) => {
  console.log(req.body)
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate if user exist in our database
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    // Validate if user exist in our database
    const [user] = await findUserByEmail(Database, email);

    if (user && (await bcrypt.compare(password, user.password))) {

      // Create token
      const token = jwt.sign(
        { user_id: user.id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "1h" }
      );

      // save user token
      user.token = token;
      user.expiresIn = '1h';

      delete user.id;
      delete user.password;
      
      return res.status(200).json(user);
    } else {
      return res.status(400).send("Invalid Credentials");
    }

  } catch (error) {
    console.log(error)
    return res.send("Something went wrong to Login");
  }
}

module.exports = loginUser;