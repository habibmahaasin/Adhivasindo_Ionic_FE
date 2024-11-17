import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSearchbar,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./index.css";
import { Link } from "react-router-dom";
import { SIDEBARMENU } from "./utils/constant/sidebar";
import {
  peopleOutline,
  appsOutline,
  albumsOutline,
  chatboxEllipsesOutline,
} from "ionicons/icons";
import BannerComponent from "./components/Fragments/Banner.Fragment";
import ModulLayout from "@components/Layouts/module.layout";
setupIonicReact();

const App: React.FC = () => {
  const iconMap: { [key: string]: string } = {
    Dashboard: appsOutline,
    Modul: albumsOutline,
    Peserta: peopleOutline,
    "Group Chat": chatboxEllipsesOutline,
    Pemateri: peopleOutline,
  };

  return (
    <>
      <IonContent className="h-[100vh]">
        <div className="flex">
          <IonCol
            size="12"
            size-md="2"
            size-lg="2"
            className="fixed h-[100vh] w-full px-2 hidden md:block"
          >
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
                        className="flex items-center gap-4 text-[#9B97AE] hover:bg-gray-700 rounded-lg py-4 px-3 block text-[#9B97AE]"
                      >
                        <IonIcon icon={iconMap[item.label]} />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </IonCol>

          <div className="ml-auto w-full md:w-[calc(100%-17.66%)] lg:w-[calc(100%-17.66%)] flex">
            <IonCol size="12" size-md="8" size-lg="8" className="px-0 md:pr-4">
              <div className="flex gap-4 items-center justify-between sticky top-0 pt-2 py-2 bg-white z-10">
                <h1 className="font-bold text-lg">
                  Learning Management System
                </h1>
                <IonSearchbar
                  placeholder="Search for courses"
                  class="custom"
                ></IonSearchbar>
              </div>
              <div className="flex flex-col gap-12 pb-8">
                <BannerComponent />
                <ModulLayout
                  title="Modul Kompetensi"
                  courses={[
                    {
                      title: "Pemrograman",
                      description: "Materi Kompetensi",
                      competency: [
                        {
                          title:
                            "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
                          description:
                            "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
                          link: "/course/1",
                        },
                        {
                          title:
                            "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
                          description:
                            "Pemrograman Lanjutan adalah pemrograman paling bla bla paling bla bla...",
                          link: "/course/2",
                        },
                        {
                          title:
                            "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
                          description:
                            "Pemrograman Expert adalah pemrograman paling bla bla paling bla bla...",
                          link: "/course/3",
                        },
                      ],
                    },
                    {
                      title: "Pemrograman",
                      description: "Materi Kompetensi",
                      competency: [
                        {
                          title:
                            "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
                          description:
                            "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
                          link: "/course/1",
                        },
                        {
                          title:
                            "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
                          description:
                            "Pemrograman Lanjutan adalah pemrograman paling bla bla paling bla bla...",
                          link: "/course/2",
                        },
                        {
                          title:
                            "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
                          description:
                            "Pemrograman Expert adalah pemrograman paling bla bla paling bla bla...",
                          link: "/course/3",
                        },
                      ],
                    },
                    {
                      title: "Pemrograman",
                      description: "Materi Kompetensi",
                      competency: [
                        {
                          title:
                            "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
                          description:
                            "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
                          link: "/course/1",
                        },
                        {
                          title:
                            "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
                          description:
                            "Pemrograman Lanjutan adalah pemrograman paling bla bla paling bla bla...",
                          link: "/course/2",
                        },
                        {
                          title:
                            "Pemrograman Pertama adalah pemrograman paling bla bla paling bla bla...",
                          description:
                            "Pemrograman Expert adalah pemrograman paling bla bla paling bla bla...",
                          link: "/course/3",
                        },
                      ],
                    },
                  ]}
                />
                <div className="text-start">
                  <h3 className="text-xl font-bold py-4">Nilai Peserta</h3>
                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Name</th>
                          <th>Class</th>
                          <th>Module</th>
                          <th>Point</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>1</th>
                          <td>Cy Ganderton</td>
                          <td>Quality Control Specialist</td>
                          <td>Blue</td>
                          <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <th>2</th>
                          <td>Hart Hagerty</td>
                          <td>Desktop Support Technician</td>
                          <td>Purple</td>
                          <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <th>3</th>
                          <td>Brice Swyre</td>
                          <td>Tax Accountant</td>
                          <td>Red</td>
                          <td>Red</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </IonCol>
            <IonCol size="4" className="h-full pl-4 hidden md:block">
              <div className="bg-white p-4 sticky top-4 flex flex-col gap-8">
                <div className="flex flex-col gap-4 items-center">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <h6 className="uppercase font-bold">
                      selamat datang, mahaasin
                    </h6>
                    <p className="text-sm text-[#959595]">
                      Di LMS by Adhivasindo
                    </p>
                  </div>
                </div>
                <div className="bg-[#2A2545] h-[150px] rounded-lg"></div>
                <div className="text-start">
                  <h3 className="text-md font-bold py-4 uppercase">
                    Jadwal Pemateri
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <div className="w-12 h-12 bg-black rounded-md"></div>
                        <div>
                          <p className="font-bold text-sm">Pemrograman</p>
                          <p className="text-sm">Senin, 08:00 - 10:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </IonCol>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default App;
