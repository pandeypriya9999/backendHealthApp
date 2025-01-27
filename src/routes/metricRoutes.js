// src/routes/metricRoutes.js
const express = require("express");
const { logMetric, getMetrics } = require("../controllers/metricController");
const router = express.Router();

router.post("/", logMetric);
router.get("/:patientId", getMetrics);

module.exports = router;
