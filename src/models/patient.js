// src/models/Patient.js
const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  id: { type: String, required: true }, // Unique ID for the patient
  provider: { type: mongoose.Schema.Types.ObjectId, ref: "Provider", required: false }, // Reference to the Provider model
  isConsent: { type: Boolean, required: true }, // Whether the patient has given consent
  status: { type: String, enum: ["Stable", "Critical", "Under Observation"], required: true }, // Patient status
  disease: { type: String, required: true }, // Disease information
});

module.exports = mongoose.model("Patient", patientSchema);
