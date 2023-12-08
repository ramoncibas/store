const findUserBy = require("../../models/User/findUserBy");

/** 
 * Pega informações do usuario
 * @param {*} req requisição
 * @param {*} res resposta
 * @returns um objeto contendo as informações do usuario
*/
const getUser = async (req, res) => {
  const { uuid } = req.params
    
  try {
    const findUser = new findUserBy();
    const [userProfile] = await findUser.uuid(uuid);


    if (userProfile.user_picture_name) {
      const filePath = `http://localhost:5000/uploads/user_picture/${userProfile.user_picture_name}`;
      userProfile.user_picture_url = filePath;
    }

    return res.send(userProfile);
  } catch (error) { 
    console.log(error);
    return res.send("Something went wrong, Select All Products");
  }
}

module.exports = getUser;