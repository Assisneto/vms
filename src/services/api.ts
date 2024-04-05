import { AppError } from "@utils/AppError";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      const appError = new AppError();
      appError.setError(error.response.data);

      return Promise.reject(appError);
    }
  }
);
