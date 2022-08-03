import React from "react";

export const Contact = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute top-1/4 left-1/4 w-7/12">
        <div className="text-center">
          <div className="mb-7 text-3xl font-san font-bold">Keep in touch</div>
          <div>
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </div>
          <div className="my-10">
            <a href="mailto:nhnam97@gmail.com">
                <button className="border border-black py-5 px-7 rounded hover:bg-slate-400">Contact me</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
