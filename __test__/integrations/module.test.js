import request from "supertest";
import app from "../../src/app.js";

describe("module", () => {
  it("should return array object of module", async () => {
    const response = await request(app).get("/api/v1/mods");

    expect(response.body).toEqual({
      type: "module",
      attributes: [
        {
          name: {
            title: "mod_service",
            description: "mod_service",
            maxLength: 30,
            minLength: 1,
            required: true,
          },
          jobTitle: {
            title: "mod_service",
            type: "mod_service",
          },
        },
      ],
    });
  });

  it("should return response status 200 of module ", async () => {
    const response = await request(app).get("/api/v1/mods");

    expect(response.status).toBe(200);
  });
});
