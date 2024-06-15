import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const sliderImageUrl = [
  {
    symbol: "./img/Group 45.png",
    brand: "Smartfinder",
    img: "./img/user1.png",
    fullName: "Hellena John",
    headLine: "Co-founder",
  },
  {
    symbol: "./img/Vector.png",
    brand: "Zoomerr",
    img: "./img/User2.png",
    fullName: "David Oshodi",
    headLine: "Team Lead",
  },
  {
    symbol: "./img/Vector3.png",
    brand: "SHELLS",
    img: "./img/User3.png",
    fullName: "Hellen Jummy",
    headLine: "Manager",
  },
  {
    symbol: "./img/Vector4.png",
    brand: "WAVES",
    img: "./img/user1.png",
    fullName: "David Oshodi",
    headLine: "Software Engineer",
  },
  {
    symbol: "./img/Group 46.png",
    brand: "ArtVenue",
    img: "./img/User2.png",
    fullName: "Hellen Jummy",
    headLine: "Junior Developer",
  },
];

const CarouselSection = () => {
  return (
    <div className="container">
      <div className="md:p-[20px] lg:p-[50px]">
        <h2 className="text-2xl text-white font-bold lg:text-4xl p-2 text-center">
          Our partners. Our Friends.
        </h2>
        <h2 className="text-2xl text-[#4f46e5] font-bold lg:text-4xl p-2 text-center">
          They love us.
        </h2>
        <p className="text-white font-light text-md p-2 text-center">
          Sem malesuada sed lectus id nunc mattis est eget tincidunt.
        </p>
      </div>
      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={true}
          // dotListClass="custom-dot-list-style"
        >
          {sliderImageUrl.map((item, index) => {
            return (
              <div
                className="slider card p-1 bg-[#334155] rounded-[10px]"
                key={index}
              >
                <div className="flex flex-col justify-between">
                  <li className="inline-block flex m-[10px] text-center">
                    <img
                      src={item.symbol}
                      alt="Smart Finder"
                      className="h-[25px] max-w-[25px] mt-[5px]"
                    />
                    <p className="text-md font-bold text-[#94a3b8] p-1 ml-2">
                      {item.brand}
                    </p>
                  </li>
                  <p className="text-white font-light text-md px-3 py-1 text-justify">
                    Aliquet ridiculus mi porta habitant vulputate rhoncus,
                    mattis amet enim. Sit purus venenatis velit semper lectus
                    sed ornare quam nulla. Lacus, ut congue sagittis vel nisi
                    integer imperdiet a vitae.
                  </p>
                  <div className="flex justify-start ml-[15px] mt-[10px]">
                    <img
                      src={item.img}
                      alt=""
                      className="max-w-[50px] h-[50px]"
                    />
                    <div className="mt-[10px] ml-2">
                      <p className="text-xs font-light text-white">
                        {item.fullName}
                      </p>
                      <p className="text-[#94A3B8] text-[10px] ">
                        {item.headLine}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSection;
