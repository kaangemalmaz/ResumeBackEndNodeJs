const SkillCategory = require("../models/skillCategory");

const getAll = async (req, res) => {
  try {
    const entities = await SkillCategory.find();
    res.status(200).json(entities);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const add = async (req, res) => {
  const entity = new SkillCategory(req.body);
  try {
    await entity.save();
    res.status(200).json(entity);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const remove = async (req, res) => {
  try {
    await SkillCategory.findByIdAndDelete(req.body.id);
    res.status(200).json({ message: "Başarıyla silinmiştir." });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const edit = async (req, res) => {
  try {
    await SkillCategory.findByIdAndUpdate(req.body.id, req.body);
    res.status(200).json({ message: "Başarıyla güncellenmiştir.." });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const skillCategory = await SkillCategory.findById(req.body.id);
    res.status(200).json(skillCategory);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAll,
  add,
  remove,
  edit,
  getById,
};
