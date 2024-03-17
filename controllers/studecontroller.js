const Student = require("../models/studentmodels");
const Joi = require("joi");

const studSchema = Joi.object({
  name: Joi.string().min(4).max(8).required({
    "string.base": "Name Must String",
    "string.min": "Name should contain minimum 4 charters",
    "string.empty": "Name is Mandatory",
  }),
  email: Joi.string().required(),
});

const addStudent = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const isStudent = await Student.find({ email });

    if (!isStudent) {
      console.log("is present");
    } else {
      const student = await Student.create({ name, email });

      return res
        .status(400)
        .json({ error: false, message: "successfully", data: student });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addStudent,
};