const { Schema, model } = require("../database");

const producSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [String],
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  disable: {
    type: Boolean,
    default: false,
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});



module.exports = model("Product", producSchema);