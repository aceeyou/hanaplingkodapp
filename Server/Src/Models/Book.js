const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const bookSchema = new mongoose.Schema({
  rConfirm: String,
  wConfirm: String,
  status: String,
  OTP: String,
  requestId: { type: Schema.Types.ObjectId, ref: "Request" },
});

module.exports = mongoose.model("Book", bookSchema);
