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
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate if user exist in our database
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // Validate if user exist in our database
    const [user] = await findUserByEmail(Database, { email });

    if (user && (await bcrypt.compare(password, user.password))) {

      // Create token
      const token = jwt.sign(
        { user_id: user.id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "1h" }
      );

      // save user token
      user.token = token;

      console.log(user)
      // user
      res.status(200).json(user);
    } else {
      res.status(400).send("Invalid Credentials");
    }

  } catch (error) {
    res.send("Something went wrong to Save the Product");
    console.log(error)
  }
}

module.exports = loginUser;