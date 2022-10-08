const Skill = require("../models/skill");

const getAll = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const add = async (req, res) => {
  const skill = new Skill(req.body);
  try {
    await skill.save();
    res.status(200).json(skill);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const remove = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.body.id);
    res.status(200).json({ message: "Başarıyla silinmiştir." });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const edit = async (req, res) => {
  try {
    await Skill.findByIdAndUpdate(req.body.id, req.body);
    res.status(200).json({ message: "Başarıyla güncellenmiştir.." });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.body.id);
    res.status(200).json(skill);
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
