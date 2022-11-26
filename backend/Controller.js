const getUser = require("./src/controller/user/getUser");
const getUsers = require("./src/controller/user/getUsers");
const saveUser = require("./src/controller/user/saveUser");

const saveProduct = require("./src/controller/product/saveProduct");
const getProducts = require("./src/controller/product/getProducts");
const deleteProdut = require("./src/controller/product/deleteProduct");
const updateProduct = require("./src/controller/product/updateProduct");

const saveShoppingCartProduct = require("./src/controller/shoppingCartProduct/saveProductOnShoppingCart");
const getShoppingCartProduct = require("./src/controller/shoppingCartProduct/getShoppingCartProduct");
const deleteShoppingCartProduct = require("./src/controller/shoppingCartProduct/deleteShoppingCartProduct");
const getAllAspects = require("./src/controller/product/getAllAspects");

// const getBrandProduct = require("./src/controller/brand/getBrands");
// const getGenderProduct = require("./src/controller/gender/getGender");
// const getCategoryProduct = require("./src/controller/category/getCategory");

module.exports = {
  getUser,
  getUsers,
  getProducts,
  getShoppingCartProduct,
  // getBrandProduct,
  // getGenderProduct,
  // getCategoryProduct,  
  getAllAspects,
  saveUser,
  saveProduct,  
  saveShoppingCartProduct,
  updateProduct,
  deleteProdut,
  deleteShoppingCartProduct
};
