import React from "react";
import hello from "../assets/images/hello-anime-nobg.png";
import { About } from "./About";
import { Contact } from "./Contact";
export const Summary = () => {
  return (
    <div className="h-full overflow-hidden animate-scroll">
      <div className="h-screen bg-yellow-400">
        <div className="absolute rounded top-1/3 left-1/4 opacity-100 w-7/12">
          <div className="flex justify-evenly items-center">
            <div className="">
              <div className="text-2xl font-extrabold">
                <div>Hi there! I am </div>
              </div>
              <div className="text-5xl font-semibold font-serif mb-5">
                NGUYEN HOAI NAM
              </div>
              <div className="text-xl font-semibold mb-5">
                A software developer focused on bulding Frontend designs.
              </div>
              <div className="">
                I love building website applications beside holding a curious
                mind with other aspects of software development.
              </div>
            </div>
            <div className="w-1/2 h-1/2">
              <div className="">
                <img src={hello} alt="sd" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="h-screen bg-green-500">
        <About />
      </div>
      {/* <div id="experience" className="h-screen bg-red-500">
        <Experience />
      </div> */}
      <div id="contact" className="h-screen bg-cyan-50">
        <Contact />
      </div>
    </div>
  );
};
