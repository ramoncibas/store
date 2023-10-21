const getUser = require("./src/controller/User/getUser");
const getUsers = require("./src/controller/User/getUsers");
const saveUser = require("./src/controller/User/saveUser");

const saveProduct = require("./src/controller/Product/saveProduct");
const getProducts = require("./src/controller/Product/getProducts");
const getProductById = require("./src/controller/Product/getProductById");
const deleteProdut = require("./src/controller/Product/deleteProduct");
const updateProduct = require("./src/controller/Product/updateProduct");

const saveProductOnShoppingCart = require("./src/controller/ShoppingCart/saveProductOnShoppingCart");
const getShoppingCartProduct = require("./src/controller/ShoppingCart/getShoppingCartProduct");
const deleteShoppingCartProduct = require("./src/controller/ShoppingCart/deleteShoppingCartProduct");

const getAllAspects = require("./src/controller/Product/getAllAspects");
const getFilteredProduct = require("./src/controller/Product/getFilteredProduct");

const loginUser = require("./src/controller/Auth/loginUser");
const registerUser = require("./src/controller/Auth/registerUser");

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
