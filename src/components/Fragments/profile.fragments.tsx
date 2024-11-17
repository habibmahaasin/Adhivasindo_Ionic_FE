import React from "react";

interface ProfileFragments {
  name: string;
}

const ProfileFragments: React.FC<ProfileFragments> = ({ name }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h6 className="uppercase font-bold">selamat datang, {name}</h6>
        <p className="text-sm text-[#959595]">Di LMS by Adhivasindo</p>
      </div>
    </div>
  );
};

export default ProfileFragments;
