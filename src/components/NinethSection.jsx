import React from "react";

const NinethSection = () => {
  return (
    <div className="bg-[#1E293B]">
      <div className="p-4 my-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          <div className="m-auto">
            <div className="md:p-[20px] lg:p-[50px]">
              <h2 className="text-2xl text-white font-bold lg:text-4xl p-1">
                Control the flow.
              </h2>
              <h2 className="text-2xl text-[#4f46e5] font-bold lg:text-4xl p-1">
                Work faster.
              </h2>
              <p className="text-white text-justify font-light text-md p-2">
                Scelerisque auctor dolor diam tortor, fames faucibus non
                interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum
                molestie adipiscing lacinia.
              </p>

              <button className="inline-flex startforfree my-10 items-center bg-[#4f46e5] text-[#fff] px-8 py-3 rounded mx-2">
                Start for free
              </button>
            </div>
          </div>
          <div className="">
            <div className="w-full">
              <img src="./img/Picture11.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NinethSection;
