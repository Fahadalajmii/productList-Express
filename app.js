const express = require("express");
const app = express();
const router = require("./apis/products/routes");
const dotenv = require("dotenv");
const connectDb = require("./db/database");
dotenv.config();

app.use(express.json());

app.use(router);
connectDb();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
