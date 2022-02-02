const express = require("express");
const app = express();
const router = require("./apis/products/routes");

app.use(express.json());

app.use(router);

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
