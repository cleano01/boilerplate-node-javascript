import httpStatus from "http-status";
import express from "express";

import { helper_serializer } from "../helpers/index.js";

const health_checker = (req, res, next) => {
  try {
    const health_checker_api = {
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
    };

    const response = helper_serializer.serializer("health_checker", {
      health_checker_api,
    });

    return res.status(httpStatus.OK).json(response);
  } catch (error) {
    next(error);
  }
};
const router = express.Router();

router.get("/", health_checker);

export default router;
