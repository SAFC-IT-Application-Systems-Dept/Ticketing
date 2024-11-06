import apiClient from "../apiClient";
// import handleErrors from "@/utils/handleErrors";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  user: {
    id: number;
    username: string;
  };
  message: string;
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post<LoginResponse>(
      "api/auth/login",
      data
    );
    console.log(response)
    return response.data;
  } catch (error) {
    // handleErrors(error);
    throw error;
  }
};
