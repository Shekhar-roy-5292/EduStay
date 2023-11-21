const mongoose = require("mongoose");
var mongoURL = "mongodb://localhost:27017/EduStay";
mongoose.connect(mongoURL);
var connection = mongoose.connection;
connection.on("error", () => {
  console.log("Mongo SB connection failed");
});
connection.on("connected", () => {
  console.log("Mongo DB connection successful");
});
module.exports = mongoose;
