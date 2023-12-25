require("dotenv").config();
const express = require("express");
const cookiesMiddleware = require('universal-cookie-express');
const session = require("express-session");
const cors = require("cors");
const app = express();

const Controller = require("./Controller");
const Middleware = require("./src/middleware");
const cleanupTempFiles = require("./src/utils/cleanupTempFiles");

const { PORT, BUCKET_USER_PICTURE } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesMiddleware());
// app.use(session({secret: 'key'}));
app.use('/profile/user_picture', express.static(BUCKET_USER_PICTURE));

// Autenticação
app.post("/login", Controller.loginUser);
app.post("/register", Controller.registerUser);

app.get("/", Controller.getProducts);
app.get("/filter", Controller.getFilteredProduct);
app.get("/product/aspects", Controller.getAllAspects);
app.get("/product/:id", Middleware.auth, Controller.getProductById);
app.get("/profile/:uuid", Middleware.auth, Controller.getUser);
app.get("/cart", Controller.getShoppingCartProduct);

app.post("/", Controller.saveProductOnShoppingCart);
app.post("/product", Middleware.auth, Controller.saveProduct);

app.patch("/profile/:uuid", Middleware.auth, Middleware.fileUpload, Controller.updateUser);
app.patch("/product", Middleware.auth, Controller.updateProduct);

app.delete("/cart", Controller.deleteShoppingCartProduct);
app.delete("/product", Middleware.auth, Controller.deleteProdut);

app.listen(PORT, () => {
  cleanupTempFiles();
  console.log(`Server is running - Port: ${PORT}...`);
});
