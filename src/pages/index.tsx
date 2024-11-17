import React, { useEffect, useState } from "react";
import { IonCol, IonContent } from "@ionic/react";
import Sidebar from "@components/Layouts/sidebar.layout";
import Header from "@components/Layouts/header.layout";
import BannerComponent from "@components/Fragments/Banner.Fragment";
import ModulLayout from "@components/Layouts/module.layout";
import ScoreTable from "@components/Fragments/scoreTable.fragment";
import RightLayout from "@components/Layouts/right.layout";
import LearningModuleService from "../services/learningModule";
import { LearningModule } from "../types/learningModule";
import { COURSES } from "@utils/constant/module";

const IndexPage: React.FC = () => {
  const [learningModules, setLearningModules] = useState<LearningModule[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchLearningModules = async () => {
      try {
        const response = await LearningModuleService.getLearningModules();
        setLearningModules(response.data.data);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchLearningModules();
  }, []);

  console.log("learningModules", learningModules);

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
            <div className="flex flex-col gap-12 pb-8">
              <BannerComponent />
              <ModulLayout title="Modul Kompetensi" courses={COURSES} />
              <ScoreTable />
            </div>
          </IonCol>
          <IonCol size="4" className="h-full pl-4 hidden md:block">
            <RightLayout />
          </IonCol>
        </div>
      </div>
    </IonContent>
  );
};

export default IndexPage;
