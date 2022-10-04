const { Schema, model } = require("../database");

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  disable: {
    type: Boolean,
    default: false,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

categorySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = model("Category", categorySchema);
