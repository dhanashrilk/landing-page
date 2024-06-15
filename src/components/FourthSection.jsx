import React from "react";

const FourthSection = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2">
      <div className="md:p-[20px] lg:p-[50px]">
        <h2 className="text-xl text-white font-bold lg:text-3xl p-1">
          Bigger Team.
        </h2>
        <h2 className="text-xl text-[#4f46e5] font-bold lg:text-3xl p-1">
          More Time.
        </h2>
        <p className="text-white text-justify font-light text-sm p-2">
          Quam quis orci turpis vulputate platea. Urna ipsum suscipit nullam
          ipsum nam leo fringilla eget lorem. Sit vestibulum phasellus integer
          et et diam malesuada. Sed tortor orci mauris proin ac. Venenatis
          euismod mauris quis sit purus nisi. Sed quis eget augue ut aliquam
          sed.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5">
        <div className="col-span-2 space-y-1">
          <div className="">
            <img src="./img/Picture.png" alt="" className="object-fill" />
          </div>
          <div className="">
            {" "}
            <img src="./img/Picture3.png" alt="" className="  mt-0" />
          </div>
        </div>
        <div className="col-span-3 space-y-8">
          <div>
            <img src="./img/Picture2.png" alt="" className=" " />
          </div>
          <div>
            <img src="./img/Picture4.png" alt="" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
