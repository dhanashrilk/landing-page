import React from "react";

const EightthSection = () => {
  return (
    <div className="container">
      <div className="m-[20px] border border-[#475569] rounded-[10px] grid grid-cols-1 md:grid-cols-2 relative">
        <div className="m-auto">
          <div className="p-[15px] md:p-[30px] lg:p-[50px]">
            <h2 className="text-xl leading-2 text-white font-bold lg:text-3xl p-1 mb-[10px]">
              Ultrices risus, sagittis, ullamcorper gravida aliquam auctor.
            </h2>
            <p className="text-white text-justify font-light text-md p-2">
              Risus sit suscipit et nibh. Morbi pretium volutpat eget habitasse
              habitant elementum dignissim arcu mauris. Ullamcorper euismod id
              commodo mi nec. Sit egestas mauris imperdiet feugiat eros, sapien
              at pellentesque.
            </p>
            <button className="inline-flex requestdemo my-10 items-center bg-[#334155] text-[#fff] px-8 py-3 rounded mx-2">
              Request more info
            </button>
          </div>
        </div>
        <div className="">
          <div className="w-full">
            <img src="./img/Vector10.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EightthSection;
