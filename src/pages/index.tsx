import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import BannerComponent from "@components/Fragments/Banner.Fragment";
import ModulLayout from "@components/Layouts/module.layout";
import ScoreTable from "@components/Fragments/scoreTable.fragment";
import useLearningModules from "@hooks/useLearningModules";

const IndexPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const {
    learningModules,
    error,
    setLimit,
    setSearch,
    setPage,
    limit,
    search,
    page,
  } = useLearningModules({ limit: 3 });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const limitParam = queryParams.get("limit");
    const searchParam = queryParams.get("search");
    const pageParam = queryParams.get("page");

    if (limitParam !== null || searchParam !== null || pageParam !== null) {
      if (limitParam) setLimit(Number(limitParam));
      if (searchParam) setSearch(searchParam || "");
      if (pageParam) setPage(Number(pageParam));

      const newQueryParams = new URLSearchParams();
      if (limit) newQueryParams.set("limit", String(limit));
      if (search) newQueryParams.set("search", search);
      if (page) newQueryParams.set("page", String(page));

      const newUrl = `/competency-module?${newQueryParams.toString()}`;

      if (location.pathname + location.search !== newUrl) {
        history.replace(newUrl);
      }
    }
  }, [limit, search, page, history, location]);

  return (
    <div className="flex flex-col gap-12 pb-8">
      <BannerComponent />
      <ModulLayout title="Modul Kompetensi" courses={learningModules} />
      <ScoreTable />
    </div>
  );
};

export default IndexPage;
