const express = require('express');
const { logPatient, getPatient } = require('./controllers/patientController');
const router = express.Router();

router.post('/patient', logPatient);
router.get('/patient', getPatient);

module.exports = router;