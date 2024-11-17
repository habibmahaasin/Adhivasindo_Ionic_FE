import CourseCard from "@components/Fragments/CourseCard.Fragment";
import React from "react";

interface Competency {
  title: string;
  description: string;
  link: string;
}

interface Course {
  title: string;
  description: string;
  competency: Competency[];
}

interface ModulLayoutProps {
  title: string;
  courses: Course[];
}

const ModulLayout: React.FC<ModulLayoutProps> = ({ title, courses }) => {
  return (
    <div className="text-start">
      <h3 className="text-xl font-bold py-4">{title}</h3>
      <div className="md:flex w-full gap-4">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            competency={course.competency}
          />
        ))}
      </div>
    </div>
  );
};

export default ModulLayout;
