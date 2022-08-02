import React from "react";

export const Header = () => {
  return (
    <div className="flex p-4 justify-between">
      <div className="font-semibold text-2xl uppercase">
        <div className="border-r-2 border-r-black whitespace-nowrap mx-auto animate-ff overflow-hidden">
          Welcome to my site. {' '}
        </div>
      </div>
      <div className="basis-4/12 justify-evenly flex">
        <div className="font-medium hover:border-b-2 hover:font-bold border-b-black">About</div>
        <div className="font-medium hover:border-b-2 hover:font-bold border-b-black">Experience</div>
        <div className="font-medium hover:border-b-2 hover:font-bold border-b-black">Work</div>
        <div className="font-medium hover:border-b-2 hover:font-bold border-b-black">Contact</div>
        <div className="font-medium hover:border-b-2 hover:font-bold border-b-black">More</div>
      </div>
    </div>
  );
};

