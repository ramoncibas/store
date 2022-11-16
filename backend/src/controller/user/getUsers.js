//import

/**
  * Pega todos os usuarios salvos
  * @param {*} req requisição
  * @param {*} res resposta
  * @returns uma coleção de usuarios
  */
const getAllUser = (req, res) => {
  const id = req.params.id;
  try {
    // Code...
  } catch (error) {
    console.log(error);
    return res.send("Something went wrong, Select All Users");
  }
}

module.exports = getAllUser;