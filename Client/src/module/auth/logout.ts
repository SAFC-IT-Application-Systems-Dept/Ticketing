import { makeAuthenticatedRequest } from "../api/apiHelpers";

export const logout = async (): Promise<boolean> => {
  const { data, error } = await makeAuthenticatedRequest<{ isValid: boolean }>(
    "api/logout"
  );
  if (error) {
    console.error("Logout failed:", error);
    return false;
  }
  return data.isValid;
};
