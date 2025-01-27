// src/models/Metric.js
const mongoose = require("mongoose");

const metricSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bloodSugar: { type: Number },
  bloodPressure: { type: String },
  weight: { type: Number },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Metric", metricSchema);
