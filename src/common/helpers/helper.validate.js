import { validationResult } from "express-validator";
import { logger } from "../utils/index.js";

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  let extractedErrors = [];
  errors
    .array()
    .map((err) => typeof err.msg !== "string" && extractedErrors.push(err.msg));
  extractedErrors = [...new Set(extractedErrors)];

  logger.error(JSON.stringify({ ...extractedErrors }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

export { validate };
