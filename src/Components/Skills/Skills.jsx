import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";


const Skills = () => {
  return (
    <div className="p-10 md:p-20" id="Skills">
      <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
        Skills
      </h1>
      <div className="flex flex-col items-center md:flex-row py-10 justify-center gap-8">
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 size={50} color="#E34F26" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 size={50} color="#1572b6" />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs size={50} color="#F7DF1E" />
          </span>
        </div>

        <div className="flex flex-wrap gap-8 items-center justify-center ">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaBootstrap size={50} color="#6628e0" />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact size={50} color="#61DAF8" />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma size={50} color="#F24E1E" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
