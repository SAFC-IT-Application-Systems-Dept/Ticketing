import apiClient from "./apiClient";

interface HelloResponse {
  message: string;
}

export const fetchHelloMessage = async (): Promise<HelloResponse> => {
  try {
    const response = await apiClient.get<HelloResponse>("/api/hello");
    return response.data;
  } catch (error) {
    console.error("Error fetching hello message:", error);
    throw error;
  }
};
