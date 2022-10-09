const { findById } = require("../models/certificate");
const Certificate = require("../models/certificate");
const ResultData = require("../utils/resultData");
const { add_certificate, updated_certificate, deleted_certificate, selected_certificate, constant_not_found, all_selected_certificate } = require("../utils/constant");
const {success, error} = require("../utils/responseApi");

const getAll = async (req, res) => {
  await Certificate.find()
  .then((resp)=> {
    if(resp == null)
    {
      return res.status(200).json(error(constant_not_found, 404)) 
    }else{
      return res.status(200).json(success(all_selected_certificate, resp, 200)) 
    }
  })
  .catch((err)=> {return res.status(500).json(error(err.message, 500))})
};

const add = async (req, res) => {
  const certificate = new Certificate(req.body);
  await certificate.save()
    .then((resp)=>{return res.status(200).json(success(add_certificate, resp, 200)) })
    .catch((err)=>{return res.status(500).json(error(err.message, 500)) })
};

const remove = async (req, res) => {
    await Certificate.findByIdAndDelete(req.body.id)
    .then((resp)=>{return res.status(200).json(success(deleted_certificate, resp, 200)) })
    .catch((err)=>{return res.status(500).json(error(err.message, 500)) })
};

const edit = async (req, res) => {
    await Certificate.findByIdAndUpdate(req.body.id, req.body)
    .then((resp)=> {return res.status(200).json(success(updated_certificate, resp, 200)) })
    .catch((err)=> {return res.status(500).json(error(err.message, 500))})
};

const getById = async (req, res) => {
  await Certificate.findById(req.body.id)
  .then((resp)=> {
    if(resp == null)
    {
      return res.status(200).json(error(constant_not_found, 404)) 
    }else{
      return res.status(200).json(success(selected_certificate, resp, 200)) 
    }
  })
  .catch((err)=> {return res.status(500).json(error(err.message, 500))})
};

module.exports = {
  getAll,
  add,
  remove,
  edit,
  getById,
};
