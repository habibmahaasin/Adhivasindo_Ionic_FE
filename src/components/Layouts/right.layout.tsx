import ProfileFragments from "@components/Fragments/profile.fragments";
import SpeakerCardFragment from "@components/Fragments/speakerCard.fragments";
import { SPEAKERLISTS } from "@utils/constant/speaker";
import React from "react";

const RightLayout: React.FC = () => {
  return (
    <div className="bg-white p-4 sticky top-4 flex flex-col gap-8">
      <ProfileFragments name="Mahaasin" />
      <div className="bg-[#2A2545] h-[150px] rounded-lg"></div>
      <div className="text-start">
        <h3 className="text-md font-bold py-4 uppercase">Jadwal Pemateri</h3>
        <div className="flex flex-col gap-4">
          {SPEAKERLISTS?.map((speaker, index) => (
            <SpeakerCardFragment key={index} speaker={speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightLayout;
