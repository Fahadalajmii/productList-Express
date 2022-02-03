const dataBase = require("../../models/Product");
exports.sayHello = (req, res) => {
  res.send("Hello World!");
};

exports.getAllProducts = async (req, res) => {
  const allData = await dataBase.find();
  res.json(allData);
};

exports.addData = async (req, res) => {
  try {
    const addData = req.body;
    const newData = await dataBase.create(addData);
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const { productId } = req.params;
    const deleteProduct = await dataBase.findByIdAndDelete(productId);
    if (deleteProduct) {
      res.status(200).json({ msg: "product deleted" });
    } else {
      res.status(404).json({ msg: "product not found" });
    }
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

exports.updateData = async (req, res) => {
  try {
    const { productId } = req.params;
    const newData = req.body;
    const updateproduct = await dataBase.findByIdAndUpdate(productId, newData);
    if (updateproduct) {
      res.status(200).json(updateproduct);
    } else {
      res.status(404).json({ msg: "product not found" });
    }
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
