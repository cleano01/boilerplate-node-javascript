import request from "supertest";
import app from "../../src/app.js";

describe("utils.health_check", () => {
  it("should return object of healthcheck with message 'OK' ", async () => {
    const response = await request(app).get("/api/v1/health");
    expect(response.body.attributes.health_checker_api.message).toBe("OK");
  });

  it("should return response status 200 of healthcheck ", async () => {
    const response = await request(app).get("/api/v1/health");
    expect(response.status).toBe(200);
  });
});
