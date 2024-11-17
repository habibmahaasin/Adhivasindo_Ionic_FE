import { LoginResponse, RegisterResponse, User } from "../types/user";
import apiClient from "./api";
import { AxiosResponse } from "axios";

const UserApiService = {
  register: async (
    userData: User
  ): Promise<AxiosResponse<RegisterResponse>> => {
    try {
      const response = await apiClient.post<RegisterResponse>(
        "/register",
        userData
      );
      return response;
    } catch (error) {
      throw new Error(`Error registering user: ${error}`);
    }
  },

  login: async (credentials: User): Promise<AxiosResponse<LoginResponse>> => {
    try {
      const response = await apiClient.post<LoginResponse>(
        "/auth/login",
        credentials
      );
      return response;
    } catch (error) {
      throw new Error(`Error logging in: ${error}`);
    }
  },
};

export default UserApiService;
