import { Router } from "express";

import swaggerUi from "swagger-ui-express";
import swagger from "./common/swagger/index.js";

import { routes as router_mod } from "./modules/module/index.js";
import { health } from "./common/utils/index.js";

const router = Router();

process.env.NODE_ENV !== ("prd" || "prodution")
  ? router.use("/docs", swaggerUi.serve, swagger)
  : undefined;

router.use("/mods", router_mod.module_router);
router.use("/health", health);

export default router;
