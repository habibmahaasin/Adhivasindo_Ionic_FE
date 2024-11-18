import React from "react";
import ModulLists from "@components/Layouts/moduleList.layout";
import useLearningModules from "@hooks/useLearningModules";

const CompetencyModulePage: React.FC = () => {
  const {
    learningModules,
    PaginatedModules,
    error,
    setLimit,
    setSearch,
    setPage,
    limit,
    search,
    page,
  } = useLearningModules();

  return (
    <div className="flex flex-col gap-12 pb-8">
      <ModulLists
        title="Modul Kompetensi"
        courses={learningModules}
        PaginatedModules={PaginatedModules}
      />
    </div>
  );
};

export default CompetencyModulePage;
