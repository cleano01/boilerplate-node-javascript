import swagger from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

export default swagger.setup(
  swaggerJsdoc(
    {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Octopus Boilerplate",
          description: "Application to base/style code.",
          version: "1.0.0",
        },
      },
      apis: ["./src/common/swagger/*.yml"],
    },
    { explorer: false }
  )
);
