import axios from "axios";
import router from "next/router";
import { parseCookies } from "nookies";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const cookies = parseCookies();
    const token = cookies.userToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Log the error if needed or handle it
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      router.push("/");
    } else {
      // Optional: handle other status codes or errors globally
      console.error("API error:", error.response?.status, error.response?.data);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
