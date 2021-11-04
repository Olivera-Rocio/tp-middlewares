const router = require("express").Router();

const {index, contact, music, about, admin, login, noEntry} = require("../controllers/mainController");

const accesAdmin = require("../middlewares/accesAdmin");

router.get("/", index);
router.get("/contact", contact);
router.get("/about", about);
router.get("/music", music);
router.get("/admin", accesAdmin, admin);
router.get("/login", login)
router.get("/noEntry", noEntry)
module.exports = router;