import React from "react";

const ProjectCard = ({ title, main, imgSrc, hrefs }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl items-center h-110 hover:scale-105 transition-all duration-300">
      <img src={imgSrc} className="p-4 w-full h-40" />
      <h1 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h1>
      <p className=" px-4 text-sm md:text-md leading-tight py-2 text-center  font-light tracking-wider">
        {main}
      </p>

      <a
        href={hrefs}
        className=" w-25 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:p-2 md:px-4 hover:opacity-85 duration-300 scale-105 font-semibold rounded-3xl bg-[#465697]"
      >
        Demo
      </a>
    </div>
  );
};

export default ProjectCard;
