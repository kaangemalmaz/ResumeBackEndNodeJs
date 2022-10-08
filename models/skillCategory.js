const { default: mongoose } = require("mongoose");

// public string Name { get; set; }
//         public IList<Skill>? Skills { get; set; }

const skillCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: "skillCategories",
    timestamps: true,
  }
);

const SkillCategory = mongoose.model("SkillCategory", skillCategorySchema);

module.exports = SkillCategory;
