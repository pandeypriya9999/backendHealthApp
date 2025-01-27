// src/routes/metricRoutes.js
const express = require("express");
const { logMetric, getMetrics } = require("../controllers/metricController");
const router = express.Router();

router.post("/", logMetric); // Log metrics
router.get("/:patientId", getMetrics); // Get recent metrics

module.exports = router;
