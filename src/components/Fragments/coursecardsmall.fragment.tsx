import React from "react";

interface Competency {
  title: string;
}

interface CourseCardSmallProps {
  title?: string;
  description: string;
  competency: Competency[];
}

const CourseCardSmall: React.FC<CourseCardSmallProps> = ({
  title,
  description,
  competency,
}) => {
  return (
    <div className="w-full h-fit flex gap-0 items-center gap-4 bg-gray-100 p-2 rounded-md">
      <div className="h-16 w-16 bg-red-500 rounded-lg flex items-center justify-center"></div>

      <div>
        <p className="font-bold ">{title}</p>
        <p className="text-xs">
          <b>Materi Kompetensi : </b>
          {competency.map((item) => item.title).join(", ") || "-"}
        </p>
      </div>
    </div>
  );
};

export default CourseCardSmall;
