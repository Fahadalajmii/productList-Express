const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, default: 3 },
    quantity: { type: Number, min: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
