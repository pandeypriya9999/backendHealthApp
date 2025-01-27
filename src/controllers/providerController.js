// src/controllers/providerController.js
const Metric = require("../models/Metric");
const User = require("../models/User");

const getPatientsMetrics = async (req, res) => {
  try {
    const { providerId } = req.params;
    const patients = await User.find({ role: "patient", providerId }); // Assuming patients are assigned to a provider
    const metrics = await Metric.find({ patientId: { $in: patients.map(p => p._id) } });
    res.status(200).json(metrics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPatientsMetrics };
