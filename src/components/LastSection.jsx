import React from "react";

const LastSection = () => {
  return (
    <div className="container py-8">
      <div className="">
        <h2 className="text-2xl text-white font-bold lg:text-4xl text-center p-2">
          Your team. Your projects.
        </h2>
        <h2 className="text-2xl text-[#4f46e5] font-bold lg:text-4xl text-center p-2">
          Always together.
        </h2>
        <p className="text-white font-light text-sm text-center p-2">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex startforfree my-10 items-center bg-[#4f46e5] text-[#fff] px-8 py-3 rounded mx-2">
            Start for free
          </button>
          <button className="inline-flex requestdemo my-10 items-center bg-[#334155] text-[#fff] px-8 py-3 rounded mx-2">
            Request more info
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
