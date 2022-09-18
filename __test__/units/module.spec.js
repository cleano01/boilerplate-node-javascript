import { services } from "../../src/modules/module";

jest.mock("../../src/modules/module/repositories/module.repository", () => ({
  mod_repository: jest.fn(() => [
    {
      name: {
        title: "title_mock",
        description: "description_mock",
        maxLength: 30,
        minLength: 1,
        required: true,
      },
      jobTitle: {
        title: "title_mock",
        type: "mod_service_mock",
      },
    },
  ]),
}));

describe("mdoule.service", () => {
  test("should return object of database", () => {
    const response = services.mod_service.mod_service();
    expect(response).toEqual([
      {
        name: {
          title: "title_mock",
          description: "description_mock",
          maxLength: 30,
          minLength: 1,
          required: true,
        },
        jobTitle: {
          title: "title_mock",
          type: "mod_service_mock",
        },
      },
    ]);
  });
});
