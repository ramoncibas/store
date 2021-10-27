const express = require("express");
const session = require("express-session");
const fileupload = require("express-fileupload");
const fs = require("fs");
const cors = require("cors");
var path = require("path");
const page = require("./pages");
const db = require("./database/db");

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
app.get("/", (req, res) => {
  db.serialize(() => {
    db.all(`SELECT * FROM product`, [], (err, rows) => {
      if (err) {
        console.log(err);
      }
      res.send(rows);
    });
  });
});
app.post("/profile", page.saveUser);
app.get("/cart", page.getShoppingCartProduct);
app.post("/add-product", page.saveProduct);

app.listen(5000, () => {
  console.log("Server is running at port 5000...");
});
