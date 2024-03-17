const express = require("express");
require("dotenv").config();
const app = express();
const Routes = require("./routes/student.routes");
require("./adapters/studentdb");
app.use(express.json());

app.use("/add/studentdummy", Routes);
app.use("*", (req, res, next) => {
  return res
    .status(404)
    .json({ err: true, message: "page not found", data: null });
});

app.use((err, req, res, next) => {
  return res.status(404).json({ err: true, message: err.message, data: null });
});

app.listen(process.env.PORT, (req, res, next) => {
  console.log(`Server is Running On PORT ${process.env.PORT}`);
});