const {
  getAll,
  add,
  edit,
  remove,
  getById,
} = require("../controllers/experienceController");

const router = require("express").Router();

//sabit değişkenler
const getAllExperience = "/getAllExperience";
const getExperience = "/getExperience";
const experience = "/experience";

//router
router.get(getAllExperience, getAll);
router.get(getExperience, getById);
router.post(experience, add);
router.put(experience, edit);
router.delete(experience, remove);

module.exports = router;
