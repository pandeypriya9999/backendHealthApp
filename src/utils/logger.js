const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "info", // Set the default log level (e.g., info, debug, warn, error)
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
  ),
  transports: [
    new transports.Console(), // Logs to the console
    new transports.File({ filename: "logs/app.log" }), // Logs to a file
  ],
});

module.exports = logger;
