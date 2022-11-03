import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  defaultMeta: { service: "boilerplate-node-js" },
  exitOnError: false,
  transports: [new transports.Console()],
});

export default logger;
