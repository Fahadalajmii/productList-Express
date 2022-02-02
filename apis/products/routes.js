const express = require("express");
const router = express();

const {
  sayHello,
  getAllProducts,
  findId,
  addData,
  deleteData,
} = require("./controllers");

router.get("/", sayHello);

router.get("/api/products", getAllProducts);

router.get("/api/products/:id", findId);

router.post("/api/products", addData);

router.delete("/api/products/:productId", deleteData);

module.exports = router;
