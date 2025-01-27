const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    unique: true // Ensures that each patient is tied to a unique user
  },
  dateOfBirth: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  allergies: [{ type: String }], // List of allergies
  medications: [{ type: String }], // List of medications
  disease: [{ type: String }], // List of medications
  medicalConditions: [{ type: String }], // E.g., diabetes, hypertension
  provider: {type: String, required: true},
  isConsent: {type: Boolean, required: true},
  PatientStatus: { type: String, enum: ["Needs Attention", "Stable"] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Automatically update the `updatedAt` field on every update
patientSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Patient", patientSchema);
