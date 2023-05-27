import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
    format.errors({ stack: true }),
    format.align(),
    format.printf(
      (info) =>
        `{timestamp: ${info.timestamp}}, {env: ${
          process.env.NODE_ENV
        }}, {service: ${process.env.SERVICE_NAME}}, {${
          info.level
        } ${info.message.trim()}}, {stack: ${info.stack}}`
    )
  ),
  exitOnError: false,
  transports: [new transports.Console({ handleExceptions: true })],
});

export default logger;
