const express = require("express");
const { showHomepage, showAboutpage, showContactpage, showTeampage } = require("../controllers/pageController");

const router = express.Router();


router.get("/", showHomepage);
router.get("/about", showAboutpage);
router.get("/contact", showContactpage);
router.get("/team", showTeampage);

module.exports = router;
