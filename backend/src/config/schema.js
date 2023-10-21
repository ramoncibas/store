const UserSchema = require('../schema/user');
const ProductSchema = require('../schema/product');
const ShoppingCartSchema = require('../schema/shopping_cart');
const BrandProductSchema = require('../schema/brand_product');
const GenderProductSchema = require('../schema/gender_product');
const SizeProductSchema = require('../schema/color_product');
const ColorProductSchema = require('../schema/size_product');
const CategoryProductSchema = require('../schema/category_product');
const PaymentCollectionSchema = require('../schema/payment_collection');
const ClientTransactionsSchema = require('../schema/client_transactions');

const schema = `
  ${UserSchema}
  ${ProductSchema}
  ${ShoppingCartSchema}
  ${CategoryProductSchema}
  ${GenderProductSchema}
  ${SizeProductSchema}
  ${ColorProductSchema}
  ${BrandProductSchema}  
  ${ClientTransactionsSchema}
  ${PaymentCollectionSchema}
`;

module.exports = schema