const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const { randomUUID } = require('crypto');
const Database = require("../../config/db");
const saveUserModel = require("../../models/User/saveUserModel");
const findUserBy = require("../../models/User/findUserBy");

/**
 * Registra um usuário e realiza o login do mesmo
 * @param {*} req requisição
 * @param {*} res resposta
 */
const registerUser = async (req, res) => {
  const { JWT_TOKEN_KEY, BUCKET_USER_PICTURE } = process.env;

  try {
    const {
      first_name,
      last_name,
      email,
      password,
      phone
    } = req.body;

    const { user_picture } = req.files;

    if (!(email && password && first_name && last_name)) {
      return res.status(400).send("All input is required");
    }

    const findUser = new findUserBy();    
    const [oldUser] = await findUser.email(email);

    // check if user already exist
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    const userUUID = randomUUID();
    
    if (user_picture) {
      user_picture.mv(`${BUCKET_USER_PICTURE}/${userUUID}_${user_picture.name}`, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const [user] = await saveUserModel(Database, {
      uuid: userUUID,
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      phone,
      user_picture_name: `${userUUID}_${user_picture.name}` ?? null
    })
    
    const token = jwt.sign(
      { user_id: user.id, email },
      JWT_TOKEN_KEY,
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