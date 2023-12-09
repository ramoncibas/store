const Database = require("../../config/db");
const fs = require("fs");
const path = require("path");

const updateUserModel = require("../../models/User/updateUser");
const { JWT_TOKEN_KEY, BUCKET_USER_PICTURE } = process.env;


/**
 * Atualiza o usuário na base de dados
 * @param {*} req requisição
 * @param {*} res resposta
 */
const updateUser = (req, res) => {
  const { phone, email, user_picture = req.files.user_picture } = req.body;

  const fields = {
    phone,
    email,
    user_picture_name: user_picture
  }

  console.log(user_picture)

  try {
    const allowedFields = ["phone", "email", "user_picture_name"];
    const validFields = Object.keys(fields).filter(field => allowedFields.includes(field));
    const userUUID = req.params.uuid;

    const updateData = {};
    validFields.forEach(field => {
      updateData[field] = fields[field];
    });

    if (user_picture && user_picture.data) {
      const pictureName = `${userUUID}_${user_picture.name}`;
      const picturePath = path.join(BUCKET_USER_PICTURE, pictureName);

      const directory = path.dirname(BUCKET_USER_PICTURE);
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
      }

      const decodedImage = Buffer.from(user_picture.data, "base64");

      fs.writeFileSync(picturePath, decodedImage);

      updateData.user_picture_name = pictureName;
    }

    const updateQuery = `
      UPDATE user
      SET ${validFields.map(field => `${field} = ?`).join(", ")}
      WHERE uuid = ?
    `;

    const updateValues = [...validFields.map(field => updateData[field]), userUUID];

    return updateUserModel(Database, updateQuery, updateValues).then(() => {
      res.status(200).send("Usuário atualizado com sucesso!");
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Algo deu errado, updateUser");
  }
};

module.exports = updateUser;
