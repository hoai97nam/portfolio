import React from "react";
import namRock from "../assets/images/nam-rock.jpg";

export const Summary = () => {
  return (
    <div className="absolute rounded top-1/4 left-1/4 opacity-100 w-7/12 h-40">
      <div className="flex justify-evenly">
        <div className="">
          <div className="text-2xl font-extrabold">
            Hey there! I am NGUYEN-HOAI NAM
          </div>
          <div className="text-xl font-semibold">
            I am a software engineer focus on Front End design: prefer Angular and
            ReacJS
          </div>
        </div>
        <div className="w-1/2 h-1/2">
          <div className="">
            <img src={namRock} alt="sd" />
          </div>
        </div>
      </div>
    </div>
  );
};
