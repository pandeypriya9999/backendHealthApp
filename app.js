const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");
const metricRoutes = require("./routes/metricRoutes");
const providerRoutes = require("./routes/providerRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/metrics", metricRoutes);
// app.use("/api/providers", providerRoutes);
// app.use("/api/messages", messageRoutes);

module.exports = app;
