import apiClient from "../apiClient";

export const validateToken = async (token: string): Promise<boolean> => {
  try {
    const response = await apiClient.post(
      "api/auth/validate-token",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.isValid; // Assuming the backend returns { isValid: true/false }
  } catch (error) {
    console.error("Token validation failed", error);
    return false;
  }
};
