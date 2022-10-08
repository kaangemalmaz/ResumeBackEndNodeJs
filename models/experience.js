const mongoose = require("mongoose");
/*
public string Title { get; set; }
        public string SubTitle { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime FinishDate { get; set; }
*/

const experienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subTitle: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: String,
      required: true,
      trim: true,
    },
    finishDate: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: "experiences",
    timestamps: true,
  }
);

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
