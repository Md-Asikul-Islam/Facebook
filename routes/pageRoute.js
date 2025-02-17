const express = require('express');
const path = require('path');
const { showAboutpage, showHomepage, showContactpage, showTeampage } = require('../controllers/pageController');

const router = express.Router()

router.get('/', showHomepage);
router.get('/about', showAboutpage);
router.get('/contact', showContactpage);
router.get('/team', showTeampage);

module.exports = router;