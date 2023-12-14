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
        console.log(userPicture)
        await fs.unlink(userPicture, (err) => {
          if (err) throw err;
          console.log(`${userPicture} was deleted`);
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
      
      req.files.user_picture.mv(picturePath, (err) => {
        if (err) {
          console.error('Erro ao salvar a imagem:', err);
          res.status(500).send('Erro ao salvar a imagem');
        } else {
          console.log('Imagem salva com sucesso!');
          // Continue com a lógica para responder à requisição conforme necessário
          res.status(200).send('Imagem salva com sucesso');
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

    const userUpdated = await updateUserModel(Database, updateQuery, updateValues)

    return userUpdated && res.status(200).send("Usuário atualizado com sucesso!");
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).send("Algo deu errado, updateUser");
  }
};

module.exports = updateUser;
