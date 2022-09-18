import request from "supertest";
import app from "../../src/app";

describe("utils.health_check", () => {
  test("should return object of healthcheck with message 'OK' ", async () => {
    const response = await request(app).get("/v1/health");
    expect(response.body.attributes.health_checker_api.message).toBe("OK");
  });

  test("should return response status 200 of healthcheck ", async () => {
    const response = await request(app).get("/v1/health");
    expect(response.status).toBe(200);
  });
});
