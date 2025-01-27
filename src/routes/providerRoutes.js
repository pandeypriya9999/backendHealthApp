// src/routes/providerRoutes.js
const express = require("express");
const { getPatientsMetrics } = require("../controllers/providerController");
const router = express.Router();

router.get("/:providerId", getPatientsMetrics);

module.exports = router;
