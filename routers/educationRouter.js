const {
  getAll,
  add,
  edit,
  remove,
  getById,
} = require("../controllers/educationController");

const router = require("express").Router();

//sabit değişkenler
const getAllEducation = "/getAllEducation";
const getEducation = "/getEducation";
const education = "/education";

//router
router.get(getAllEducation, getAll);
router.get(getEducation, getById);
router.post(education, add);
router.put(education, edit);
router.delete(education, remove);

module.exports = router;
