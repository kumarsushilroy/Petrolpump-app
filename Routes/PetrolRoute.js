
const express = require('express');
const { addReport, getReport, singleInfo } = require('../Controllers/PetrolController');

const router = express.Router();

router.post('/create/report', addReport);

router.get('/get/reports', getReport);

router.get('/single/info/:id',singleInfo);


module.exports = router;