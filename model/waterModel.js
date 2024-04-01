const mongoose = require("mongoose");

const waterSchema = new mongoose.Schema({
  waterLevel: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Water", waterSchema);
