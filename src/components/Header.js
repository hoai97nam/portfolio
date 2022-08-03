import React from "react";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-fit z-50 bg-slate-300">
      <div className="flex p-4 justify-between">
        <div className="font-semibold text-2xl uppercase">
          <div className="border-r-2 border-r-black whitespace-nowrap mx-auto animate-ff overflow-hidden
           cursor-pointer">
            <a href="/">
              Welcome to my site.{" "}
            </a>
          </div>
        </div>
        <div className="basis-4/12 justify-evenly items-center flex">
          <div className="font-medium hover:border-b-2 hover:font-bold border-b-black cursor-pointer">
            <a href="#about">About</a>
          </div>
          {/* <div className="font-medium hover:border-b-2 hover:font-bold border-b-black cursor-pointer">
            <a href="#experience">Experience</a>
          </div> */}
          {/* <div className="font-medium hover:border-b-2 hover:font-bold border-b-black cursor-pointer">
            <a href="#work">Work</a>
          </div> */}
          <div className="font-medium hover:border-b-2 hover:font-bold border-b-black cursor-pointer">
            <a href="#contact">Contact</a>
          </div>
          <div className="font-medium hover:font-bold border-b-black cursor-pointer">
            <a href="https://drive.google.com/file/d/1Df2MPtNvM6qSMWEN33Aknlcej6mFubG5/view?usp=sharing" target='_blank' rel="noreferrer">
              <button className="border border-green-700 px-5 py-1 rounded hover:bg-lime-500">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
