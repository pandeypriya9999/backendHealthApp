const Metric = require("../models/Metric");

const logMetric = async (req, res) => {
  try {
    const { patientId, bloodSugar, bloodPressure, weight } = req.body;
    const metric = new Metric({ patientId, bloodSugar, bloodPressure, weight });
    await metric.save();
    res.status(201).json({ message: "Metric logged successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMetrics = async (req, res) => {
  try {
    const { patientId } = req.params;
    const metrics = await Metric.find({ patientId }).sort({ date: -1 }).limit(7);
    res.status(200).json(metrics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { logMetric, getMetrics };
