import { IonButton, IonIcon } from "@ionic/react";
import { BANNERDATA } from "@utils/constant/banner";

const BannerComponent = () => {
  return (
    <div className="bg-gradient-to-t from-purple-600 to-indigo-400 h-[300px] rounded-xl text-start p-8">
      <div className="h-full flex justify-between flex-col">
        <p className="uppercase text-[#F1DB7B] font-bold">{BANNERDATA.title}</p>
        <div className="text-white flex flex-col gap-2 lg:w-8/12">
          <h2 className="text-2xl font-bold">{BANNERDATA.description}</h2>
          <span className="line-clamp-3 text-xs">{BANNERDATA.textContent}</span>
        </div>
        <div className="flex justify-between">
          <div className="text-white flex gap-12">
            <div className="flex gap-2 items-center text-sm">
              <IonIcon icon={BANNERDATA.presenter.icon} className="w-5 h-5" />
              <p>{BANNERDATA.presenter.text}</p>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <IonIcon icon={BANNERDATA.date.icon} className="w-5 h-5" />
              <p>{BANNERDATA.date.text}</p>
            </div>
          </div>
          <IonButton color={BANNERDATA.button.color}>
            {BANNERDATA.button.text}
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
