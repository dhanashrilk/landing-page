import React from "react";

const teamData = [
  {
    image: "./img/Group 45.png",
    name: "Smartfinder",
  },
  {
    image: "./img/Vector.png",
    name: "Zoomerr",
  },
  {
    image: "./img/Vector3.png",
    name: "SHELLS",
  },
  {
    image: "./img/Vector4.png",
    name: "WAVES",
  },
  {
    image: "./img/Group 46.png",
    name: "ArtVenue",
  },
];
const SecondSection = () => {
  return (
    <div className="container text-center text-white py-4">
      <div className="text-lg font-bold text-center">
        Trusted by teams from leading companies
      </div>
      <div className="py-8">
        <ul className="inline-block sm:flex sm:justify-center">
          {teamData.map((data) => (
            <li className="inline-block flex m-[10px]">
              <img
                src={data.image}
                alt="Smart Finder"
                className="h-6 w-auto mt-[5px]"
              />
              <p className="text-md font-medium p-1">{data.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondSection;
