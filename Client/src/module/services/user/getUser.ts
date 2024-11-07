import { makeAuthenticatedRequest } from "@/module/api/apiHelpers";

interface User {
  id: number;
  username: string;
}

export const getUsers = async (): Promise<User[] | null> => {
  const { data, error } = await makeAuthenticatedRequest<User[]>(
    "api/users",
    "GET"
  );
  if (error) {
    console.error(`Fetching users failed: ${error}`);
    return null;
  }
  return data;
};
