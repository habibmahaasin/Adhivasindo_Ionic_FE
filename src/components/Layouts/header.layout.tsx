import { IonSearchbar } from "@ionic/react";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex gap-4 items-center justify-between sticky top-0 pt-2 py-2 bg-white z-10">
      <h1 className="font-bold text-lg">Learning Management System</h1>
      <IonSearchbar
        placeholder="Search for courses"
        class="custom"
      ></IonSearchbar>
    </div>
  );
};

export default Header;
