import React, { ReactNode } from "react";
import { IonCol, IonContent } from "@ionic/react";
import Sidebar from "./sidebar.layout";
import Header from "./header.layout";
import RightLayout from "./right.layout";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <IonContent className="h-[100vh]">
      <div className="flex">
        <IonCol
          size="12"
          size-md="2"
          size-lg="2"
          className="fixed h-[100vh] w-full px-2 hidden md:block"
        >
          <Sidebar />
        </IonCol>

        <div className="ml-auto w-full md:w-[calc(100%-17.66%)] lg:w-[calc(100%-17.66%)] flex px-4 md:px-0">
          <IonCol size="12" size-md="8" size-lg="8" className="px-0 md:pr-4">
            <Header />
            {children} {/* Properly render the children here */}
          </IonCol>
          <IonCol size="4" className="h-full pl-4 hidden md:block">
            <RightLayout />
          </IonCol>
        </div>
      </div>
    </IonContent>
  );
};

export default MainLayout;
