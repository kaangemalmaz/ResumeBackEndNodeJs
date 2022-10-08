const Project = require("../models/project");

const getAll = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const add = async (req, res) => {
  const project = new Project(req.body);
  try {
    await project.save();
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const remove = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.body.id);
    res.status(200).json({ message: "Başarıyla silinmiştir." });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const edit = async (req, res) => {
  try {
    await Project.findByIdAndUpdate(req.body.id, req.body);
    res.status(200).json({ message: "Başarıyla güncellenmiştir.." });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const project = await Project.findById(req.body.id);
    res.status(200).json(project);
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
