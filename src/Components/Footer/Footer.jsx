import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="flex justify-around bg-[#465697] p-10 md:p-12 text-white items-center"
    >
      <div className="text-center">
        <h1 className="text-2xl md:text-6xl font-bold ">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal ">
          {" "}
          Feel Free To react out
        </h3>
      </div>

      <ul className="text-sm md:text-xl ">
        <li className="flex gap-1 items-center my-2">
          <MdOutlineEmail size={20} />
          shubhi.gupta3579@gmail.com
        </li>
        <li className="flex gap-1 items-center my-2">
          <CiLinkedin size={20} />
         www.linkedin.com/in/shubhi-gupta-dev
        </li>
        <li className="flex gap-1 items-center my-2">
          <FaGithub size={20} />
          https://github.com/shubhi-gupta-dev
        </li>
      </ul>
    </div>
  );
};

export default Footer;
