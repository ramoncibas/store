const express = require("express");
const session = require("express-session");
const fileupload = require("express-fileupload");
const fs = require("fs");
const cors = require("cors");
var path = require("path");
const page = require("./pages");
const app = express();

app.use(cors());
// app.use(session({secret: 'key'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "temp"),
  })
);

// Rotas
app.get("/", (req, res) => page.getAllProducts);
app.get("/cart", (req, res) => page.getShoppingCartProduct);
app.get("/profile/:id", (req, res) => page.getUser);
app.post("/", (req, res) => page.saveProductOnShoppingCart);
app.post("/profile", (req, res) => page.saveUser);
app.post("/product", (req, res) => page.saveProduct);
app.delete("/cart", (req, res) => page.removeShoppingCartProduct);
app.delete("/product", (req, res) => page.removeProduct);
app.patch("/product", (req, res) => page.updateProduct);

app.listen(5000, () => {
  console.log("Server is running - Port: 5000...");
});
