import React from "react";

import Logo1 from "../../Assets/Airbnb.png";
import Logo2 from '../../Assets/nike.jpeg';
import Logo3 from '../../Assets/tiktok.jpeg';
import Logo4 from '../../Assets/huawei.png';
import Logo5 from '../../Assets/nescafe.png';
import Logo6 from '../../Assets/oracle.png';
import Logo7 from '../../Assets/microsoft.png';


import { BiTimeFive } from "react-icons/bi";

// For all the other jobs, we will use the high order array method called Map.
// In this case we shall list all the jobs into array called Data..

const Data = [
  {
    id: 1,
    image: Logo1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, earum.",
    company: "AirBnB",
  },
  {
    id: 2,
    image: Logo2,
    title: "Product Manager",
    time: '2 days',
    location: "New York",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, earum.",
    company: "Nike",
  },
  {
    id: 3,
    image: Logo3,
    title: "Graphic Designer",
    time: "3 days",
    location: "Ireland",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, earum.",
    company: "TikTok",
  },
  {
    id: 4,
    image: Logo4,
    title: "Back-End Developer",
    time: "48H",
    location: "Lagos",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, earum.",
    company: "Huawei",
  },
  {
    id: 5,
    image: Logo5,
    title: "Data Engineer",
    time: "72H",
    location: "Ireland",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, earum.",
    company: "Nescafe",
  },
  {
    id: 6,
    image: Logo6,
    title: "UX Designer",
    time: "3 days",
    location: "Ireland",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, earum.",
    company: "Oracle",
  },
  {
    id: 7,
    image: Logo7,
    title: "Brand Manager",
    time: "96H",
    location: "China",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, earum.",
    company: "Microsoft",
  },
  {
    id: 8,
    image: Logo6,
    title: "Data Engineer",
    time: "3 days",
    location: "Lagos",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, earum.",
    company: "Oracle",
  },
];

const Jobs = () => {
  return (
    <div>
      <div
        className="jobContainer flex gap-10 justify-center flex-wrap items-center
        py-10">

        {Data.map(({ id, image, title, time, location, desc, company }) => {

          return (
            <div key={id}
              className="group group/item singleJob w-[270px] p-[20px] bg-white
                    rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1
                  className="text-[16px] font-semibold text-textColor
                            group-hover:text-white"
                >
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>

              <p
                className="text-[13px] text-[#ccc] pt-[20px] border-t-[2px] mt-[20px]
                        group-hover:text-white"
              >
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="Company Logo" className="w-[15%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button
                className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] 
                        font-semibold text-textColor hover:bg-white group-hover/item:text-textColor
                        group-hover:text-blueColor"
              >
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
