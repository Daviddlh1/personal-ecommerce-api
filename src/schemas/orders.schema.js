const mongoose = require("mongoose");
const { Schema, model } = require("../database");

const orderSchema = new Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  ammount: {
    type: Number,
    required: true,
  },
  shipping_address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  order_email: {
    type: String,
    required: true,
  },
  order_date: {
    type: Date,
    required: true,
  },
  order_status: {
    type: String,
    required: true,
    default: "IN_PROGRESS"
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

orderSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = model("Order", orderSchema);
