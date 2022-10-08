const router = require("express").Router();
const {
  getAll,
  add,
  remove,
  getById,
  edit,
} = require("../controllers/skillController");

//sabit değişkenler
const getAllSkill = "/getAllSkill";
const getSkill = "/getSkill";
const skill = "/skill";

//router
router.get(getAllSkill, getAll);
router.get(getSkill + getById);
router.post(skill, add);
router.put(skill, edit);
router.delete(skill, remove);

module.exports = router;
