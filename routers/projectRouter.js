const {
  getAll,
  add,
  edit,
  remove,
  getById,
} = require("../controllers/projectController");

const router = require("express").Router();

//sabit değişkenler
const getAllProject = "/getAllProject";
const getProject = "/getProject";
const project = "/project";

//router
router.get(getAllProject, getAll);
router.get(getProject, getById);
router.post(project, add);
router.put(project, edit);
router.delete(project, remove);

module.exports = router;
