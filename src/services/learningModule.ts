import { AxiosResponse } from "axios";
import apiClient from "./api";
import {
  ApiResponse,
  GetLearningModulesParams,
  LearningModule,
  PaginatedModules,
} from "../types/learningModule";

const LearningModuleService = {
  createLearningModule: async (
    moduleData: Omit<LearningModule, "id" | "createdAt" | "updatedAt">
  ): Promise<AxiosResponse<ApiResponse<LearningModule>>> => {
    try {
      const response = await apiClient.post<ApiResponse<LearningModule>>(
        "/learning-modules",
        moduleData
      );
      return response;
    } catch (error) {
      throw new Error(`Error creating learning module: ${error}`);
    }
  },

  getLearningModules: async ({
    limit = 5,
    search = "",
    page = 1,
  }: GetLearningModulesParams): Promise<
    AxiosResponse<ApiResponse<PaginatedModules>>
  > => {
    try {
      const params = new URLSearchParams();
      params.append("limit", limit.toString());
      if (search) params.append("search", search);
      params.append("page", page.toString());
      params.append("show_competency", "true");

      const response = await apiClient.get<ApiResponse<PaginatedModules>>(
        `/learning-modules?${params.toString()}`
      );

      return response;
    } catch (error) {
      throw new Error(`Error fetching learning modules: ${error}`);
    }
  },

  getLearningModuleById: async (
    id: string
  ): Promise<AxiosResponse<ApiResponse<LearningModule>>> => {
    try {
      const response = await apiClient.get<ApiResponse<LearningModule>>(
        `/learning-modules/${id}`
      );
      return response;
    } catch (error) {
      throw new Error(`Error fetching learning module by ID: ${error}`);
    }
  },

  updateLearningModule: async (
    id: string,
    updatedData: Partial<LearningModule>
  ): Promise<AxiosResponse<ApiResponse<LearningModule>>> => {
    try {
      const response = await apiClient.put<ApiResponse<LearningModule>>(
        `/learning-modules/${id}`,
        updatedData
      );
      return response;
    } catch (error) {
      throw new Error(`Error updating learning module: ${error}`);
    }
  },

  deleteLearningModule: async (
    id: string
  ): Promise<AxiosResponse<ApiResponse<null>>> => {
    try {
      const response = await apiClient.delete<ApiResponse<null>>(
        `/learning-modules/${id}`
      );
      return response;
    } catch (error) {
      throw new Error(`Error deleting learning module: ${error}`);
    }
  },
};

export default LearningModuleService;
