require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const findUserBy = require("../../models/User/findUserBy");

/**
 * Realiza a autenticação de um usuário no banco
 * @param {*} req requisição
 * @param {*} res resposta
 */
const loginUser = async (req, res) => {
  // console.log(req.body)
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    const findUser = new findUserBy();
    const [user] = await findUser.email(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user.id, email },
        process.env.JWT_TOKEN_KEY,
        { expiresIn: "1h" }
      );

      user.token = token;
      user.expiresIn = '1h';

      delete user.id;
      delete user.password;
      console.log('Usuario Logado:' ,user)
      
      return res.status(200).json(user);
    } else {
      return res.status(400).send("Invalid Credentials");
    }

  } catch (error) {
    console.log(error)
    return res.status(500).send("Something went wrong to Login");
  }
}

module.exports = loginUser;