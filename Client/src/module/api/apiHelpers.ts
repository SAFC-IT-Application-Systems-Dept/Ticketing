import apiClient from "./apiClient";

interface ApiResponse<T> {
  data: T;
  error?: string;
}

export const makeAuthenticatedRequest = async <T>(
  endpoint: string,
  method: "POST" | "GET" = "POST",
  body: Record<string, any> = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await apiClient.request({
      url: endpoint,
      method: method,
      data: method === "POST" ? body : undefined,
    });
    return { data: response.data };
  } catch (error: any) {
    console.error(`Request to ${endpoint} failed`, error);

    return { data: null as any, error: error };
  }
};
