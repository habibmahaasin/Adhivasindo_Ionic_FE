import { IonIcon } from "@ionic/react";
import { SIDEBARMENU } from "@utils/constant/sidebar";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  peopleOutline,
  appsOutline,
  albumsOutline,
  chatboxEllipsesOutline,
} from "ionicons/icons";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const iconMap: { [key: string]: string } = {
    Dashboard: appsOutline,
    Modul: albumsOutline,
    Peserta: peopleOutline,
    "Group Chat": chatboxEllipsesOutline,
    Pemateri: peopleOutline,
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="h-full flex flex-col ">
      <h4 className="text-2xl font-bold h-20 flex items-center justify-center">
        Adhivasindo
      </h4>
      <div className="py-6 px-6 bg-[#2A2545] h-full-available mb-1 text-white z-10 shadow-lg rounded-md rounded-tr-[36px]">
        <ul className="menu p-0 border-b-2 pb-4 border-[#413C5C]">
          {SIDEBARMENU.map((item, index) => (
            <li key={index} className="my-0">
              <Link
                to={item.link}
                className={`flex items-center gap-4 text-[#9B97AE] hover:bg-gray-700 rounded-lg py-4 px-3 block ${
                  isActiveRoute(item.link) ? "bg-white text-black" : ""
                }`}
              >
                <IonIcon icon={iconMap[item.label]} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
