const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required",
    unique: true,
  },

  age: {
    type: Number,
    required: true
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  registered: Boolean,

  hobbies: Array,

  createdAt: {
    type: Date,
    default: Date.now
  },

  bio: {
    type: String,
    validate: [({ length }) => length >= 6, "Longstring should be longer."],
    required: true
  }
});

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;