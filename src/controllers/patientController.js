// src/controllers/metricController.js
const Patient = require("./models/Patient");

const logPatient = async (req, res) => {
  try {
    const {id,provider,isConsent,patientStatus, disease } = req.body;
    const patient = new Patient({ id,provider,isConsent,patientStatus, disease });
    await patient.save();
    res.status(201).json({ message: "Patient logged successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPatient = async (req, res) => {
  try {
    const { patientId } = req.params;
    const patient = await Patient.find({ patientId }).sort({ date: -1 }).limit(7);
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { logPatient, getPatient };
