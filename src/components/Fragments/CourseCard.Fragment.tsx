import React from "react";

interface Competency {
  title: string;
  description: string;
  link: string;
}

interface CourseCardProps {
  title?: string;
  description: string;
  competency: Competency[];
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  competency,
}) => {
  return (
    <div className="w-full h-fit flex flex-col gap-0">
      <div className="h-[200px] bg-red-500 rounded-lg flex items-center justify-center">
        {title}
      </div>

      <p className="font-bold text-md mt-4">Materi Kompetensi</p>
      <div className="flex flex-col gap-2 divide-y">
        {competency.map((item, index) => (
          <div key={index} className="competency-item pt-3 py-1">
            <p className="font-medium text-sm line-clamp-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
