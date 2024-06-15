import React from "react";
// import "./animation.css";

const TopPart = () => {
  return (
    <div className="container text-center p-[30px]">
      <p className="text-md font-medium text-[#4f46e5] py-2">
        Team Progress Tracking Tool
      </p>
      <p className="text-2xl lg:text-4xl font-bold text-white text-center py-2">
        Track your team progress
      </p>
      <p className="text-md py-2 font-light text-gray-200 text-center p-0 md:px-[40px]  ">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
      </p>
      <button className="inline-flex my-10 startforfree items-center bg-[#4f46e5] text-[#fff] px-8 py-3 rounded mx-2">
        <a href="./Login.jsx"> Start for free</a>
      </button>
      <button className="inline-flex requestdemo my-10 items-center bg-[#334155] text-[#fff] px-8 py-3 rounded mx-2">
        Request more info
      </button>
      <div className="p-[50px] flex justify-center">
        <div className="square-box h-[230px] w-[230px] border-2 border-[#4f46e5]">
          <div className="square-box h-[219px] w-[219px] border-2 border-[#4f46e5] rotate-[77deg]">
            <div className="square-box h-[204px] w-[204px] border-2 border-[#4f46e5] rotate-[77deg]">
              <div className="square-box h-[193px] w-[189px] border-2 border-[#4f46e5] rotate-[77deg]">
                <div className="relative square-box h-[175px] w-[175px] bg-[#4f46e5] rotate-[77deg]">
                  {/* <span className="rotate-[77deg]"></span>
                  <span className="rotate-[77deg]"></span>
                  <span className="rotate-[77deg]"></span>
                  <span className="rotate-[77deg]"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
