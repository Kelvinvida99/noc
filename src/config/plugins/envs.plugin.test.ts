import { envs } from "./envs.plugin";

describe("envs.plugin.ts", () => {
  test("should return evns options", () => {

    expect(envs).toEqual({
      PORT: 3000,
      MAILER_SERVICE: "gmail",
      MAILER_EMAIL: "vidalencarnacion299@gmail.com",
      MAILER_SECRET_KEY: "hfkbobzgutnsdeez",
      PROD: false,
      MONGO_URL: "mongodb://kelvin:123456@localhost:27017",
      MONGO_DB_NAME: "NOC-TEST",
      MONGO_USER: "kelvin",
      MONGO_PASS: "123456",
    });
  });

  test('should return error if not found env', async () => {

    jest.resetModules();
    process.env.PORT = 'abc';

    try {
      await import('./envs.plugin');
      expect(true).toBe(false);
    } catch (error) {
      expect(`${error}`).toContain(`"PORT" should be a valid integer`);
      return false;
    }
  })
});
