import React from "react";

interface Speaker {
  title: string;
  dateTime: string;
}

const SpeakerCardFragment: React.FC<{ speaker: Speaker }> = ({ speaker }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="w-12 h-12 bg-black rounded-md"></div>
        <div>
          <p className="font-bold text-sm">{speaker.title}</p>
          <p className="text-sm">{speaker.dateTime}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCardFragment;
