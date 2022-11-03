import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.align(),
    format.printf(
      (info) =>
        `[${info.timestamp}] -  [env: ${
          process.env.NODE_ENV || ""
        }] - [service: ${process.env.SERVICE_NAME || ""}]  - [${info.level}: ${
          info.message || ""
        }] - ${info.stack || ""} \n`
    )
  ),
  exitOnError: false,
  transports: [new transports.Console()],
});
export default logger;
