import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LearningModuleService from "../services/learningModule";
import { LearningModule, PaginatedModules } from "../types/learningModule";

interface UseLearningModulesParams {
  limit?: number;
  search?: string;
  page?: number;
}

interface UseLearningModulesReturn {
  learningModules: LearningModule[];
  PaginatedModules?: PaginatedModules;
  error: string;
  setLimit: (limit: number) => void;
  setSearch: (search: string) => void;
  setPage: (page: number) => void;
  limit: number;
  search: string;
  page: number;
}

const useLearningModules = ({
  limit: initialLimit = 5,
  search: initialSearch = "",
  page: initialPage = 1,
}: UseLearningModulesParams = {}): UseLearningModulesReturn => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [limit, setLimit] = useState<number>(
    parseInt(queryParams.get("limit") || "") || initialLimit
  );
  const [search, setSearch] = useState<string>(
    queryParams.get("search") || initialSearch
  );
  const [page, setPage] = useState<number>(
    parseInt(queryParams.get("page") || "") || initialPage
  );

  const [learningModules, setLearningModules] = useState<LearningModule[]>([]);
  const [PaginatedModules, setPaginatedModules] = useState<PaginatedModules>();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const newLimit = parseInt(queryParams.get("limit") || "") || initialLimit;
    const newSearch = queryParams.get("search") || initialSearch;
    const newPage = parseInt(queryParams.get("page") || "") || initialPage;

    setLimit(newLimit);
    setSearch(newSearch);
    setPage(newPage);

    const fetchLearningModules = async () => {
      try {
        const response = await LearningModuleService.getLearningModules({
          limit: newLimit,
          search: newSearch,
          page: newPage,
        });
        setLearningModules(response.data.data.modules);
        setPaginatedModules(response.data.data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchLearningModules();
  }, [location.search, initialLimit, initialSearch, initialPage]); // Trigger when URL params change

  return {
    learningModules,
    PaginatedModules,
    error,
    setLimit,
    setSearch,
    setPage,
    limit,
    search,
    page,
  };
};

export default useLearningModules;
