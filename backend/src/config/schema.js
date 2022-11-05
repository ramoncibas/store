const UserSchema = require('../schema/user');
const BrandSchema = require('../schema/brand');
const GenderSchema = require('../schema/gender');
const ProductSchema = require('../schema/product');
const CategorySchema = require('../schema/category');
const ShoppingCartSchema = require('../schema/shopping_cart');
const PaymentCollectionSchema = require('../schema/payment_collection');
const ClientTransactionsSchema = require('../schema/client_transactions');

const schema = `
  ${UserSchema}
  ${ProductSchema}
  ${ShoppingCartSchema}
  ${CategorySchema}
  ${GenderSchema}
  ${BrandSchema}
  ${ClientTransactionsSchema}
  ${PaymentCollectionSchema}
`;

module.exports = schema