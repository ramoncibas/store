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
app.get("/", page.getAllProducts);
app.get("/cart", page.getShoppingCartProduct);
app.get("/profile/:id", page.getUser);
app.post("/", page.saveProductOnShoppingCart);
app.post("/profile", page.saveUser);
app.post("/product", page.saveProduct);
app.delete("/cart", page.removeShoppingCartProduct);
app.delete("/product", page.removeProduct);
app.patch("/product", page.updateProduct);

app.listen(5000, () => {
  console.log("Server is running - Port: 5000...");
});
