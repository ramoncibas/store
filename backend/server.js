const express = require("express");
const session = require("express-session");
const fileupload = require("express-fileupload");
const fs = require("fs");
const cors = require("cors");
var path = require("path");
const page = require("./pages");
const app = express();
const db = require("./database/db");
const getAllProducts = require("./utils/getAllProducts");

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
// app.get("/", (req,res) =>  res.send(getAllProducts(db)))
// app.post("/profile", page.saveUser);
// app.get("/cart", page.getShoppingCartProduct);
// app.post("/add-product", page.saveProduct);
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

app.post("/profile", (req, res) => {
  const { name, email, phone, user_picture } = req.body;
  console.log(req.body);

  db.serialize(() => {
    db.run(
      `INSERT INTO user (name, email, phone, user_picture) VALUES (?, ?, ?, ?);`,
      [name, email, phone, user_picture],
      (error) => console.log
    );
  });
});

// Arrumar o get do profile, já esta salvando normalmente
app.get("/profile/:id", (req, res) => {
  const id = req.params.id;
  db.serialize(() => {
    db.all(`SELECT * FROM user WHERE id = "${id}"`, [], (err, rows) => {
      if (err) {
        console.log(err);
      }
      res.send(rows);
    });
  });
});

// Salva o produto no carrinho de produtos
app.post("/", (req, res) => {
  const { id, name, product_picture, price, discount, number_of_installments } = req.body;
  db.serialize(() => {
    db.run(
      `
      INSERT INTO shopping_cart (product_id, name, product_picture, price, discount, number_of_installments)
      VALUES (?, ?, ?, ?, ?, ?);`,
      [id, name, product_picture, price, discount, number_of_installments],
      (err) => console.log(err)
    );
  });
  return res.redirect("cart");
});

// Seleciona tudo qu estiver salvo no carrinho
app.get("/cart", (req, res) => {  
  db.serialize(() => {
    db.all(`SELECT * FROM shopping_cart`, [], (err, rows) => {
      if (err) {
        console.log(err);
      }
      res.send(rows);
    });
  });
});

// Adiciona o produto
app.post("/add-product", (req, res) => {
  const { name, price, discount, product_picture, number_of_installments } =
    req.body;

  db.serialize(() => {
    db.run(
      `
      INSERT INTO product (name, price, discount, number_of_installments, product_picture)
      VALUES (?, ?, ?, ?, ?);`,
      [name, price, discount, number_of_installments, product_picture],
      (err) => console.log(err)
    );
  });
  res.redirect("/");
});

app.listen(5000, () => {
  console.log("Server is running - Port: 5000...");
});
