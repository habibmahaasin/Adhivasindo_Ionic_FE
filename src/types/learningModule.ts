export interface Competence {
  id: string;
  name: string;
  description: string;
  learningModuleId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  competences: Competence[];
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface PaginatedModules {
  modules: LearningModule[];
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}

export interface GetLearningModulesParams {
  limit?: number;
  search?: string;
  page?: number;
}
