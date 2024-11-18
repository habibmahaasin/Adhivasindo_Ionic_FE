import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LearningModule, PaginatedModules } from "../../types/learningModule";
import CourseCardSmall from "@components/Fragments/coursecardsmall.fragment";

interface ModulListsProps {
  title: string;
  courses: LearningModule[];
  PaginatedModules?: PaginatedModules;
}

const ModulLists: React.FC<ModulListsProps> = ({
  title,
  courses,
  PaginatedModules,
}) => {
  const history = useHistory();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = PaginatedModules ? PaginatedModules.totalPages : 1;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get("page") as string) || 1;
    setCurrentPage(page);
  }, [location.search]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("page", page.toString());

      history.push({
        pathname: location.pathname,
        search: queryParams.toString(),
      });
      setCurrentPage(page);
    }
  };

  return (
    <div className="text-start">
      <h3 className="text-xl font-bold py-4">{title}</h3>
      <div className="md:flex w-full gap-4 flex-col gap-4">
        {courses.map((course, index) => (
          <CourseCardSmall
            key={course.id || index}
            title={course.title}
            description={course.description}
            competency={course.competences.map((competence) => ({
              title: competence.name,
              description: competence.description,
              link: "#",
            }))}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="w-full flex items-center justify-center mt-8">
          <div className="join">
            <button
              className="join-item btn btn-sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {[...Array(totalPages).keys()].map((pageNum) => (
              <button
                key={pageNum}
                className={`join-item btn btn-sm ${
                  currentPage === pageNum + 1 ? "btn-active" : ""
                }`}
                onClick={() => handlePageChange(pageNum + 1)}
              >
                {pageNum + 1}
              </button>
            ))}
            <button
              className="join-item btn btn-sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModulLists;
