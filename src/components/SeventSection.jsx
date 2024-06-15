import React from "react";
import { FaCheck } from "react-icons/fa6";

const SeventSection = () => {
  return (
    <div className="">
      <div className="p-4 my-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          <div className="m-auto">
            <div className="md:p-[20px] lg:p-[50px]">
              <h2 className="text-2xl text-white font-bold lg:text-4xl p-1">
                Powerful tools.
              </h2>
              <h2 className="text-2xl text-[#4f46e5] font-bold lg:text-4xl p-1">
                More control.
              </h2>
              <p className="text-white text-justify font-light text-md p-2">
                Scelerisque auctor dolor diam tortor, fames faucibus non
                interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum
                molestie adipiscing lacinia.
              </p>
              <ul>
                <li className="px-2 py-1 pt-3 text-base text-white flex">
                  <span className="text-[#4f46e5]  pt-[5px] pr-[6px] pb-[4px] pl-[3px]">
                    <FaCheck className="" />
                  </span>
                  Interdum volutpat turpis malesuada ac turpis.
                </li>
                <li className="px-2 py-1 text-base text-white flex">
                  <span className="text-[#4f46e5] pt-[5px] pr-[6px] pb-[4px] pl-[3px]">
                    <FaCheck className="" />
                  </span>
                  Tortor ipsum pretium quis nunc.
                </li>
                <li className="px-2 py-1 text-base text-white flex">
                  <span className="text-[#4f46e5] pt-[5px] pr-[6px] pb-[4px] pl-[3px]">
                    <FaCheck className="" />
                  </span>
                  Vitae odio a id purus in.
                </li>
              </ul>
              <button className="inline-flex startforfree my-10 items-center bg-[#4f46e5] text-[#fff] px-8 py-3 rounded mx-2">
                Start for free
              </button>
            </div>
          </div>
          <div className="">
            <div className="w-full">
              <img src="./img/Picture9.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventSection;
