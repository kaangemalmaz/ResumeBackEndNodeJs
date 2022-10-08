const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    school: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    gpa: {
      type: String,
      required: true,
      trim: true,
      min: 2,
      max: 4,
    },
    startDate: {
      type: Date,
      required: true,
      trim: true,
    },
    finishDate: {
      type: Date,
      required: true,
      trim: true,
    },
  },
  {
    collection: "educations",
    timestamps: true,
  }
);

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;
