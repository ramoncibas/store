require("dotenv").config();
const express = require("express");
const cookiesMiddleware = require('universal-cookie-express');
// const cookieParser = require('cookie-parser');
const session = require("express-session");
const fileupload = require("express-fileupload");
const fs = require("fs");
const cors = require("cors");
var path = require("path");
const app = express();

const Controller = require("./Controller");
const auth = require("./src/middleware/auth");
const isAdmin = require("./src/middleware/isAdmin");

const { PORT, BUCKET_USER_PICTURE } = process.env;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesMiddleware());
// app.use(cookieParser());
// app.use(session({secret: 'key'}));
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "temp"),
  })
);
app.use(
  '/uploads/user_picture',
  express.static(path.join(__dirname, BUCKET_USER_PICTURE))
);

// Autenticação
app.post("/login", Controller.loginUser);
app.post("/register", Controller.registerUser);

app.get("/", Controller.getProducts);
app.get("/filter", Controller.getFilteredProduct);
app.get("/product/aspects", Controller.getAllAspects);
app.get("/product/:id",  auth, Controller.getProductById);
app.get("/profile/:uuid", auth, Controller.getUser);
app.get("/cart", Controller.getShoppingCartProduct);

app.post("/", Controller.saveProductOnShoppingCart);
app.post("/product", auth, Controller.saveProduct);

// autenticado somente para admins adicionarem e editar usuários (post / patch)
app.patch("/profile/:uuid", auth, isAdmin, Controller.saveUser);

app.patch("/product", auth, Controller.updateProduct);

app.delete("/cart", Controller.deleteShoppingCartProduct);
app.delete("/product", auth, Controller.deleteProdut);


app.listen(PORT, () => {
  console.log(`Server is running - Port: ${PORT}...`);
});
