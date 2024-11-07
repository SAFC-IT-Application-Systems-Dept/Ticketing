import { makeAuthenticatedRequest } from "../api/apiHelpers";

export const validateToken = async (): Promise<boolean> => {
  const { data, error } = await makeAuthenticatedRequest<{ isValid: boolean }>(
    "api/auth/validate-token"
  );
  if (error) {
    console.error("Token validation failed:", error);
    return false;
  }
  return data.isValid;
};
