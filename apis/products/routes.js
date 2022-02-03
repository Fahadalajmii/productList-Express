const express = require("express");
const router = express();

const {
  sayHello,
  getAllProducts,
  addData,
  deleteData,
  updateData,
} = require("./controllers");

router.get("/", sayHello);

router.get("/api/products", getAllProducts);

router.post("/api/products", addData);

router.delete("/api/products/:productId", deleteData);

router.put("/api/products/:productId", updateData);

module.exports = router;
