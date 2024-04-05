import { api } from "./api";
import { AppError } from "@utils/AppError";

describe("api", () => {
  it("should create an axios instance with the correct baseURL", () => {
    expect(api.defaults.baseURL).toBe(process.env.EXPO_PUBLIC_BASE_URL);
  });

  it("should return the response directly if there is no error", async () => {
    const successResponse = { data: { message: "Success" } };
    jest.spyOn(api, "get").mockResolvedValue(successResponse);

    const response = await api.get("/test");
    expect(response).toEqual(successResponse);
  });
});
