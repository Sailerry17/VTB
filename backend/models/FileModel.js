const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  filename: String,
  url: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("File", FileSchema);
