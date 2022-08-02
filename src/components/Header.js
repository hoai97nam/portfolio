import React from "react";

export const Header = () => {
  return (
    <div className="flex p-4 justify-between">
      <div className="font-semibold text-2xl uppercase">
        <div className="border-r-2 border-r-black whitespace-nowrap mx-auto animate-ff overflow-hidden cursor-pointer">
          Welcome to my site. {' '}
        </div>
      </div>
      <div className="basis-4/12 justify-evenly flex">
        <div className="font-medium hover:border-b-2 hover:font-bold border-b-black cursor-pointer">About</div>
        <div className="font-medium hover:border-b-2 hover:font-bold border-b-black cursor-pointer">Experience</div>
        <div className="font-medium hover:border-b-2 hover:font-bold border-b-black cursor-pointer">Work</div>
        <div className="font-medium hover:border-b-2 hover:font-bold border-b-black cursor-pointer">Contact</div>
        <div className="font-medium hover:border-b-2 hover:font-bold border-b-black cursor-pointer">More</div>
      </div>
    </div>
  );
};

