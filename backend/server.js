require("dotenv").config();
const express = require("express");
const session = require("express-session");
const fileupload = require("express-fileupload");
const fs = require("fs");
const cors = require("cors");
var path = require("path");
const app = express();

const Controller = require("./Controller");
const auth = require("./src/middleware/auth");


const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(session({secret: 'key'}));
// app.use(
//   fileupload({
//     useTempFiles: true,
//     tempFileDir: path.join(__dirname, "temp"),
//   })
// );

// Rotas

// Autenticação
app.post("/login", Controller.loginUser);
app.post("/register", Controller.registerUser);

app.get("/", Controller.getProducts);
app.get("/cart", Controller.getShoppingCartProduct);
app.get("/profile/:id", auth, Controller.getUser);
app.get("/product", Controller.getAllAspects);

app.post("/", (req, res) => Controller.saveProductOnShoppingCart);
app.post("/profile", auth, (req, res) => Controller.saveUser);
app.post("/product", auth, Controller.saveProduct);
app.delete("/cart", (req, res) => Controller.deleteShoppingCartProduct);
app.delete("/product", auth, (req, res) => Controller.deleteProdut);
app.patch("/product", auth, (req, res) => Controller.updateProduct);

app.listen(port, () => {
  console.log(`Server is running - Port: ${port}`);
});
