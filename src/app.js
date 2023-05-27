import "dotenv/config";
import express from "express";
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";

import router from "./routes.js";

import { config_cors } from "./common/configs/index.js";
import { AppError, error_message } from "./common/errors/index.js";
import { logger } from "./common/utils/index.js";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(config_cors));
/*
app.use((req, res, next) => {
  const format_request_log = {
    http_method: req.method,
    body: req.body,
    params: req.params,
    url: req.url,
    status: res.statusCode,
  };
  logger.info(JSON.stringify({ ...format_request_log }));
  next();
});
*/

app.use("/api/v1", router);

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    const format_error = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    logger.error(JSON.stringify({ ...format_error }));
    return res.status(error.status).json({
      errors: [{ ...format_error }],
    });
  }

  logger.error(error);

  return res.status(500).json({
    errors: [
      {
        code: error_message[0].code,
        status: error_message[0].status,
        message: error_message[0].message,
      },
    ],
  });
});

export default app;
