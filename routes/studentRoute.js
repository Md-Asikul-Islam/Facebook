const express = require('express');
const { getAllStudent,createStudent, editStudent,getSingleStudent,studentDataStore} = require('../controllers/studerntController');
const multer = require('multer');
// initialize router 

const router = express.Router();

// multer config
const storage = multer.diskStorage();

const studentPhotoMulter = multer().single('')

// routes

router.get('/', getAllStudent);
router.get('/create',createStudent);
router.post('/create',studentDataStore);
router.get('/edit/:id', getSingleStudent);
router.get('/:id', editStudent);


// export module 

module.exports = router; 