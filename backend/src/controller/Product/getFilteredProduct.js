const Database = require("../../config/db");
const getFilterProduct = require("../../models/Product/getFilterProduct");

const getFilteredProduct = async (req, res) => {
  try {
    if (!req.query) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const product = await getFilterProduct(Database, req.query);

    res.send(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong, Select All Aspects" });
  }
};

module.exports = getFilteredProduct;
