const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crudapp"
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.get("/", (req, res) => {
  const insert = "INSERT INTO backoffice (product_name, price, description) VALUES (`MacBook`, `6500`, `Pro`)"

  db.query(insert, (err, result)=>{
    res.send("successfully added")
  })  
  res.send("Success Called API");
});
app.listen("3001", () => {
  console.log("Server is running");
});
