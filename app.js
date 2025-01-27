const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./src/routes/authRoutes");
const metricRoutes = require("./src/routes/metricRoutes");
const providerRoutes = require("./src/routes/providerRoutes");
const messageRoutes = require("./src/routes/messageRoutes");
const patientRoutes = require("./src/routes/patient");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/metrics", metricRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api", patientRoutes);

module.exports = app;
