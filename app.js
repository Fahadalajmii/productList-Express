const express = require("express");
const app = express();

let data = require("./data");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/products", (req, res) => {
  res.json(data);
});

app.get("/api/products/:id", (req, res) => {
  res.json(data.find((product) => +product.id === +req.params.id));
});

app.post("/api/products", (req, res) => {
  data.push(req.body);

  res.send("data have been added");
});

app.delete("/api/products/:productId", (req, res) => {
  data = data.filter((product) => +product.id !== +req.params.productId);

  res.status(204).send("data has been deleted");
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
