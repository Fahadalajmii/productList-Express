let data = require("../../data");

exports.sayHello = (req, res) => {
  res.send("Hello World!");
};

exports.getAllProducts = (req, res) => {
  res.json(data);
};

exports.findId = (req, res) => {
  res.json(data.find((product) => +product.id === +req.params.id));
};
exports.addData = (req, res) => {
  data.push(req.body);

  res.send("data have been added");
};

exports.deleteData = (req, res) => {
  data = data.filter((product) => +product.id !== +req.params.productId);

  res.status(204).send("data has been deleted");
};
