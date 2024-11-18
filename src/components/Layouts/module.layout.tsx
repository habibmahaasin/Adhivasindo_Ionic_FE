import React from "react";
import CourseCard from "@components/Fragments/CourseCard.Fragment";
import { LearningModule } from "../../types/learningModule";
import { Link } from "react-router-dom";

interface ModulLayoutProps {
  title: string;
  courses: LearningModule[];
}

const ModulLayout: React.FC<ModulLayoutProps> = ({ title, courses }) => {
  return (
    <div className="text-start">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold py-4">{title}</h3>
        <Link to="/competency-module" className="text-blue-500">
          Lihat semua
        </Link>
      </div>
      <div className="md:flex w-full gap-4">
        {courses.map((course, index) => (
          <CourseCard
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
    </div>
  );
};

export default ModulLayout;
