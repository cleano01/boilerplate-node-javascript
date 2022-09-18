import express from "express";

import { controllers } from "../index";

import { module_validator } from "../validators";

const router = express.Router();

router.get("/", controllers.module_controller.module);
router.get("/errors", controllers.module_controller.module_error);
router.post(
  "/validators",
  module_validator,
  controllers.module_controller.module_service_validator
);

export default router;
