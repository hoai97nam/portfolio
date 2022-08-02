import React from "react";
import namRock from "../assets/images/nam-rock.jpg";
import hello from "../assets/images/hello-anime-nobg.png";

export const Summary = () => {
  return (
    <div className="absolute rounded top-1/4 left-1/4 opacity-100 w-7/12 h-40">
      <div className="flex justify-evenly items-center">
        <div className="">
          <div className="text-2xl font-extrabold">
            <div>Hey there! I am </div>
          </div>
          <div className="text-6xl font-semibold font-mono">NGUYEN HOAI NAM</div>
          <div className="text-xl font-semibold">
            A software developer focused on bulding Frontend designs.
          </div>
          <div>
            I love building website applications beside holding a curious mind with other aspects of software development.
          </div>
        </div>
        <div className="w-1/2 h-1/2">
          <div className="">
            <img src={hello} alt="sd" />
          </div>
        </div>
      </div>
    </div>
  );
};
