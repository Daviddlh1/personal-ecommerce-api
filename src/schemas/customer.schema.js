const mongoose = require("mongoose");
const { Schema, model } = require("../database");

const customerSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  full_name: {
    type: Boolean,
    default: false,
    required: true,
  },
  default_address: {
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
  },
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
  country: {
    type: String,
  },
  phone: {
    type: String,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

customerSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = model("Customer", customerSchema);
