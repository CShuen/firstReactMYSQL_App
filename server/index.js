const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crudapp",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/add_product", (req, res) => {
  const prodName = req.body.prodName;
  const desc = req.body.desc;
  console.log("add product: ", prodName);
  const sqlInsert =
    "INSERT INTO backoffice (product_name, description) VALUES (?, ?)";
  // const select = "SELECT * FROM backoffice"
  db.query(sqlInsert, [prodName, desc], (err, result) => {
    res.send("Successfully added product into backoffice table");
  });
  // res.send("Success Called API - new");
});

app.get("/api/get_product", (req, res) => {
  const select = "SELECT * FROM backoffice";
  db.query(select, (err, result) => {
    res.send(result);
  });
});

app.delete("/api/delete_product/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE from backoffice WHERE id = ?";
  db.query(sqlDelete, [id], (err, result) => {
    if (err) console.log(err);
    res.send(`Deleted (id: ${id})`);
  });
});

app.put("/api/update_product/:id", (req, res) => {
  const id = req.params.id;
  const desc = req.body.description;
  const sqlUpdate = "UPDATE backoffice SET description = ? WHERE id = ?";

  db.query(sqlUpdate, [desc, id], (err, result) => {
    if (err) console.log(err);
    res.send(`Update success (id: ${id})`);
  });
});

app.listen("3001", () => {
  console.log("Server is running");
});
