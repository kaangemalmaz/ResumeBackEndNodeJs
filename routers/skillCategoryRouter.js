const {
  getAll,
  add,
  edit,
  remove,
  getById,
} = require("../controllers/skillCategoryController");

const router = require("express").Router();

//sabit değişkenler
const getAllSkillCategory = "/getAllSkillCategory";
const getSkillCategory = "/getSkillCategory";
const skillCategory = "/skillCategory";

//router
router.get(getAllSkillCategory, getAll);
router.get(getSkillCategory, getById);
router.post(skillCategory, add);
router.put(skillCategory, edit);
router.delete(skillCategory, remove);

module.exports = router;
