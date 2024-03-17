const { Schema, model } = require("mongoose");

const Sschema = new Schema({
  name: {
    type: String,
    required: [true, "mand"],
    min: [4, "dew"],
    max: [10, "djwo"],
  },
  email: {
    type: String,
    required: [true, "s"],

    min: [4, "dew"],
    max: [10, "djwo"],
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = new model("studentd", Sschema);

// const { Schema, model } = require("mongoose");

// const stuentSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       min: [4, "msk"],
//       max: [6, "xsnj"],
//     },
//   },
//   { timestamp: true }
// );

// module.exports = new model("sbh", stuentSchema);