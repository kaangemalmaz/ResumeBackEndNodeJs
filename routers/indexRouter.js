const router = require("express").Router(); //router yapısı çekilir.

const skillRouter = require("./skillRouter"); // gerekli router için yol çekilir.
const certificateRouter = require("./certificateRouter"); // gerekli router için yol çekilir.
const contactRouter = require("./contactRouter"); // gerekli router için yol çekilir.
const educationRouter = require("./educationRouter"); // gerekli router için yol çekilir.
const experienceRouter = require("./experienceRouter"); // gerekli router için yol çekilir.
const projectRouter = require("./projectRouter"); // gerekli router için yol çekilir.
const skillCategoryRouter = require("./skillCategoryRouter"); // gerekli router için yol çekilir.

router.use(skillRouter); // bu use'i kullan demektir.
router.use(certificateRouter); // bu use'i kullan demektir.
router.use(contactRouter); // bu use'i kullan demektir.
router.use(educationRouter); // bu use'i kullan demektir.
router.use(experienceRouter); // bu use'i kullan demektir.
router.use(projectRouter); // bu use'i kullan demektir.
router.use(skillCategoryRouter); // bu use'i kullan demektir.

module.exports = router;
