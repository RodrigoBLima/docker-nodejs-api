const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi Docker with node js!!!");
});

app.listen(3000);