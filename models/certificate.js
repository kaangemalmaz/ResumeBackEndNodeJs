const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: "certificates",
    timestamps: true,
  }
);

const Certificate = mongoose.model("certificate", certificateSchema);

module.exports = Certificate;
