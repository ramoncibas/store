const Database = require("../../config/db");
const getAllAspectsProductModel = require("../../models/getAllAspectsProductModel");

/**
 * Pega generos de roupas disponiveis para todos os produtos
 * @param {*} req requisição
 * @param {*} res resposta
 * @returns uma coleção de generos
 */
const getAllAspects = async (req, res) => {
  try {
    const aspects = await getAllAspectsProductModel(Database);

    let brands = [];
    let genders = [];
    let categories = [];
    let colors = [];
    let sizes = [];

    console.log(aspects);

    aspects.map(
      ({
        brand_id,
        brand_name,
        gender_id,
        gender_name,
        category_id,
        category_name,
        color_id,
        color,
        size_id,
        size,
      }) => {
        if (brand_id || brand_name) {
          brands.push({ id: brand_id, name: brand_name });
        }
        if (gender_id || gender_name) {
          genders.push({ id: gender_id, name: gender_name });
        }
        if (category_id || category_name) {
          categories.push({ id: category_id, name: category_name });
        }
        if (color_id !== null || color !== null) {
          colors.push({ id: color_id, name: color });
        }
        if (size_id !== null || size !== null) {
          sizes.push({ id: size_id, name: size });
        }
      }
    );

    const data = {
      brands,
      genders,
      categories,
      colors,
      sizes,
    };

    console.log(data);

    res.send(data);
  } catch (error) {
    console.log(error);
    return res.send("Something went wrong, Select All Aspects");
  }
};

module.exports = getAllAspects;
