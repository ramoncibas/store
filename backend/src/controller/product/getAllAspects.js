const Database = require("../../config/db");
const getAllBrandProductModel = require("../../models/getAllBrandProductModel");
const getAllGenderProductModel = require("../../models/getAllGenderProductModel");
const getAllCategoryProductModel = require("../../models/getAllCategoryProductModel");

/**
 * Pega generos de roupas disponiveis para todos os produtos
 * @param {*} req requisição
 * @param {*} res resposta
 * @returns uma coleção de generos
 */
const getAllAspects =  (req, res) => {  
  try {
    const brand = getAllBrandProductModel(Database);
    const gender = getAllGenderProductModel(Database);
    const category = getAllCategoryProductModel(Database);

    Promise.all([brand, gender, category])
      .then((promisses) => {
        const [brand, gender, category] = promisses        
        const data = {
          brands: brand,
          genders: gender,
          categories: category
        };
        console.log(data)
        res.send(data)
      })
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
    return res.send("Something went wrong, Select All Aspects");
  }
}

module.exports = getAllAspects;