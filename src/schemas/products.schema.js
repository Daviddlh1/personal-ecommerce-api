const { Schema, model } = require("../database");

const productSchema = new Schema({
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

productSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})



module.exports = model("Product", productSchema);