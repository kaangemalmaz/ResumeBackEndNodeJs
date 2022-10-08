const { findById } = require("../models/certificate");
const Certificate = require("../models/certificate");
const Result = require("../utils/result");
const ResultData = require("../utils/resultData");
const { constant_getAll } = require("../utils/constant");

const getAll = async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res
      .status(200)
      .json(
        new ResultData(200, "Tüm Sertifika listelenmiştir.", certificates, null)
      );
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const add = async (req, res) => {
  const certificate = new Certificate(req.body);
  try {
    await certificate.save();
    res.status(200).json(certificate);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const remove = async (req, res) => {
  try {
    await Certificate.findByIdAndDelete(req.body.id);
    res.status(200).json({ message: "Başarıyla silinmiştir." });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const edit = async (req, res) => {
  try {
    // const ab = getById(req, res);
    // console.log(ab);
    //const certficate = Certificate.findById(req.body.id);
    await Certificate.findByIdAndUpdate(req.body.id, req.body);
    res
      .status(202)
      .json(new ResultData(202, "Güncelleme işlemi başarılıdır.", null));
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.body.id);
    res
      .status(200)
      .json(
        new ResultData(
          200,
          "Sertifika başarı ile getirilmiştir.",
          certificate,
          null
        )
      );
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
