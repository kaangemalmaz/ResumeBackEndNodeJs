const {
  getAll,
  add,
  edit,
  remove,
  getById,
} = require("../controllers/contactController");

const router = require("express").Router();

//sabit değişkenler
const getAllContact = "/getAllContact";
const getContact = "/getContact";
const contact = "/contact";

//router
router.get(getAllContact, getAll);
router.get(getContact, getById);
router.post(contact, add);
router.put(contact, edit);
router.delete(contact, remove);

module.exports = router;
