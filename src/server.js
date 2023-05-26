import app from "./app.js";
import { logger } from "./common/utils/index.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server on port: ${port}`);
  logger.info(`🚀 Server on port: ${port}`);
});
