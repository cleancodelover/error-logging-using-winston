const { format, createLogger, transports } = require("winston");
const { combine, timestamp, printf, errors } = format;

const buildDevLogger = () => {
  const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
  });

  return createLogger({
    //level: "debug",
    format: combine(
      format.colorize(),
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      errors({ stack: true }),
      logFormat
    ),
    transports: [
      new transports.File({
        level: "error",
        filename: "./logs/logs.log",
      }),
    ],
  });
};

module.exports = buildDevLogger;
