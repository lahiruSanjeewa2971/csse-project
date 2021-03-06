const request = require("supertest");
const app = require("../../server");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/supplier/order");
    expect(response.statusCode).toBe(200);
  });
});