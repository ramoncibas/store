const express = require("express");
const session = require("express-session");
const fileupload = require("express-fileupload");
const fs = require("fs");
const cors = require("cors");
var path = require("path");
const Controller = require("./Controller");
const app = express();

app.use(cors());
// app.use(session({secret: 'key'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   fileupload({
//     useTempFiles: true,
//     tempFileDir: path.join(__dirname, "temp"),
//   })
// );

// Rotas
app.get("/", Controller.getProducts);
app.get("/cart", Controller.getShoppingCartProduct);
app.get("/profile/:id", Controller.getUser);
app.get("/product", Controller.getAllAspects);

app.post("/", (req, res) => Controller.saveProductOnShoppingCart);
app.post("/profile", (req, res) => Controller.saveUser);
app.post("/product", Controller.saveProduct);
app.delete("/cart", (req, res) => Controller.deleteShoppingCartProduct);
app.delete("/product", (req, res) => Controller.deleteProdut);
app.patch("/product", (req, res) => Controller.updateProduct);

app.listen(5000, () => {
  console.log("Server is running - Port: 5000...");
});
