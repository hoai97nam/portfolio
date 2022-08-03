import React from "react";
import namRock from "../assets/images/nam-rock.jpg";

export const About = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute top-1/4 left-1/4 w-7/12">
        <div className="flex items-center justify-between">
          <div className="basis-2/3">
            <div className="flex flex-row text-center items-center">
                <div className="text-3xl font-san font-bold mb-4">
                    About Me
                </div>
                <div className="w-1/2 h-px bg-black m-auto"></div>
            </div>
            <div className="mr-2">
              <p className="mb-2">
                Hello, my name is <span className="font-semibold text-xl">Nam</span>, as software developer. 
                Currently, I focus
                on building website application from Frontend side. I work
                parallel at business and freelance projects.
              </p>
              <p className="mb-4">
                Researching and working with auto script tool are 2 facsinating
                things that I am pursuing. 
              </p>
              <p className="mb-4">
                Here are a few technologies I've been working with recently:
              </p>
              <div className="flex">
                <div className="basis-1/2">
                    <p>{'>'} Javascript</p>
                    <p>{'>'} ReactJS</p>
                    <p>{'>'} Tailwind</p>
                </div>
                <div className="basis-1/2">
                    <p>{'>'} Typescript</p>
                    <p>{'>'} Angular</p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="">
                <img className="rounded drop-shadow-2xl" src={namRock} alt="nam-rock" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
