const express = require("express");
const db = require("./db");
const app = express();

app.set("view engine", "ejs");

app.get("/", async function (req, res) {
  const users = await db.query("SELECT * FROM users");
  res.json(users);
});

app.get("/users/:id", async function (req, res) {
  const users = await db.query(
    `SELECT * FROM users WHERE id = ${req.params.id}`
  );
  res.json(users);
});

app.listen(3000, function () {
  console.log("Servidor corriendo en el puerto 3000");
  console.log("http://localhost:3000");
});
