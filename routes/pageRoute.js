const express = require('express');
const showHomepage = require('./showHomepage'); 

const router = express.Router();

router.get('/', showHomepage);

module.exports = router;
