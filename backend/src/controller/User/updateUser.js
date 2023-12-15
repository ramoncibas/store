const Database = require("../../config/db");
const fs = require("fs");
const path = require("path");

const updateUserModel = require("../../models/User/updateUser");
const doesFileExist = require("../../utils/doesFileExist");
const { BUCKET_USER_PICTURE } = process.env;

/**
 * Atualiza o usuário na base de dados
 * @param {*} req requisição
 * @param {*} res resposta
 */
const updateUser = async(req, res) => {
  const { phone, email } = req.body;
  const { user_picture } = req.files

  const fields = {
    phone,
    email,
    user_picture_name: user_picture
  }

  async function deleteUserPicture(userPicture) {
    try {
      if (userPicture) {
        await fs.unlink(userPicture, (error) => {
          if (error) throw error;
        });
      }
    } catch (error) {
      console.error('Error deleting user picture:', error);
    }
  }

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

      const userPictureExist = await doesFileExist(userUUID,BUCKET_USER_PICTURE)

      if(userPictureExist) {
        const picturePathToDelete = path.join(BUCKET_USER_PICTURE, userPictureExist);

        await deleteUserPicture(picturePathToDelete);
      }

      // Entender o motivo de o codigo abaixo não funcionar para inserir imagens
      // const decodedImage = Buffer.from(user_picture.data, "base64");
      // fs.writeFileSync(picturePath, decodedImage);
      
      req.files.user_picture.mv(picturePath, (error) => {
        if (error) {
          res.status(500).send(`Erro ao salvar a imagem: ${error}`);
        }
      });

      updateData.user_picture_name = pictureName;
    }

    const updateQuery = `
      UPDATE user
      SET ${validFields.map(field => `${field} = ?`).join(", ")}
      WHERE uuid = ?
    `;

    const updateValues = [...validFields.map(field => updateData[field]), userUUID];

    await updateUserModel(Database, updateQuery, updateValues);
    
    return res.status(200).send({type: "success", title: "Sucesso", message: "O seu perfil foi atualizado!"});
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).send({type: "error", title: "Falhou", message: "Parece que algo deu errado!"});
  }
};

module.exports = updateUser;
