const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const uuidv4 = require("../../utils/uuidv4");
const Database = require("../../config/db");
const saveUserModel = require("../../models/saveUserModel");
const findUserByEmail = require("../../models/fidUserByEmail");

/**
 * Registra um usuário e realiza o login do mesmo
 * @param {*} req requisição
 * @param {*} res resposta
 */
const registerUser = async (req, res) => {
  try {
    // Get user input
    const {
      first_name,
      last_name,
      email,
      password,
      phone,
      user_picture
    } = req.body;

    // Validate user input
    if (!(email && password && first_name && last_name)) {
      console.log(email,password,first_name,last_name)
      return res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const [oldUser] = await findUserByEmail(Database, { email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const [user] = await saveUserModel(Database, {
      uuid: uuidv4(),
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      phone,
      user_picture
    })

    const token = jwt.sign(
      { user_id: user.id, email },
      process.env.TOKEN_KEY,
      { expiresIn: "1h" }
    );

    user.token = token;
    console.log(user)
    return res.status(201).json(user)

  } catch (error) {
    console.log("Something went wrong to Save the User", error);
    return res.status(404).send(error)
  }
}

module.exports = registerUser;