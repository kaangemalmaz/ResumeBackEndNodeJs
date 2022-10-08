const Contact = require("../models/contact");

const getAll = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const add = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const remove = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.body.id);
    res.status(200).json({ message: "Başarıyla silinmiştir." });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const edit = async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.body.id, req.body);
    res.status(200).json({ message: "Başarıyla güncellenmiştir.." });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.body.id);
    res.status(200).json(contact);
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
