const getUser = require("./src/controller/user/getUser");
const getUsers = require("./src/controller/user/getUsers");
const saveUser = require("./src/controller/user/saveUser");

const saveProduct = require("./src/controller/product/saveProduct");
const getProducts = require("./src/controller/product/getProducts");
const getProductById = require("./src/controller/product/getProductById");
const deleteProdut = require("./src/controller/product/deleteProduct");
const updateProduct = require("./src/controller/product/updateProduct");

const saveProductOnShoppingCart = require("./src/controller/shoppingCartProduct/saveProductOnShoppingCart");
const getShoppingCartProduct = require("./src/controller/shoppingCartProduct/getShoppingCartProduct");
const deleteShoppingCartProduct = require("./src/controller/shoppingCartProduct/deleteShoppingCartProduct");

const getAllAspects = require("./src/controller/product/getAllAspects");
const getFilteredProduct = require("./src/controller/product/getFilteredProduct");

const loginUser = require("./src/controller/auth/loginUser");
const registerUser = require("./src/controller/auth/registerUser");

module.exports = {
  loginUser,
  registerUser,
  getUser,
  getUsers,
  getProducts,
  getProductById,
  getShoppingCartProduct,
  getAllAspects,
  saveUser,
  saveProduct,  
  saveProductOnShoppingCart,
  updateProduct,
  deleteProdut,
  deleteShoppingCartProduct,
  getFilteredProduct
};
