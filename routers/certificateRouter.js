const {
  getAll,
  add,
  edit,
  remove,
  getById,
} = require("../controllers/certificateController");

const router = require("express").Router();

//sabit değişkenler
const getAllCertificate = "/getAllCertificate";
const getCertificate = "/getCertificate";
const certificate = "/certificate";

//router
router.get(getAllCertificate, getAll);
router.get(getCertificate, getById);
router.post(certificate, add);
router.put(certificate, edit);
router.delete(certificate, remove);

module.exports = router;
