const mongoose = require("mongoose");

//https://mongoosejs.com/docs/validation.html

const skillSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    skillCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SkillCategory",
    },
  },
  {
    collection: "skills",
    timestamps: true,
  }
);

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
