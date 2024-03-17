// const { connect } = require("mongoose");
// require("dotenv").config();

//! Creating database and connecting to it (Use databaseName)

// connect(process.env.URL)
//   .then(() => {
//     console.log("Mongodb Connected Successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const { connect } = require("mongoose");

require("dotenv").config();

connect(process.env.URL)
  .then(() => console.log("Mongodb Connected Successfully"))
  .catch((err) => {
    console.log(err);
  });
