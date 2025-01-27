// src/models/Patient.js
const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", // Reference to the User model
    required: true,
    unique: true // Ensures that each patient is tied to a unique user
  },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  allergies: [{ type: String }], // List of allergies
  medications: [{ type: String }], // List of medications
  medicalConditions: [{ type: String }], // E.g., diabetes, hypertension
  providerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" // Reference to the healthcare provider (if applicable)
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Automatically update the `updatedAt` field on every update
patientSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Patient", patientSchema);
