import React from "react";
import { IoArrowForward, IoCall, IoPerson, IoMail } from "react-icons/io5";
import AboutImg from "../../assets/about.png";

const About = () => {
  return (
    <div
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
      id="About"
    >
      <div className="">
        <div className="md:flex flex-wrap flex-col md:flex-row items-center justify-between">
          <img src={AboutImg} className="md:h-100 w-100 " />

          <ul>
            <h4 className="text-blue-700 ">My intro</h4>
            <h2 className="text-2xl md:text-4xl font-bold mb-5">About</h2>
            <div className="flex flex-wrap gap-3 py-4 flex-col">
              <span className="w-100">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Fresher skilled in JavaScript, React.js and learn backend
                  technologies Node.js, and MongoDB. Passionate about building
                  responsive and user-friendly web applications. Looking for an
                  entry-level role to apply technical skills and grow
                  professionally.
                </p>
              </span>

              <div className="flex flex-col py-4 items-start w-100">
                <div className="flex justify-center items-center gap-3 mb-3">
                  <IoPerson />
                  <h5>Name : Shubhi Gupta</h5>
                </div>
                <div className="flex justify-center items-center gap-3 mb-3">
                  <IoCall />
                  <h5>Phone : 9755XXXXXX</h5>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <IoMail />
                  <h5>Email : shubhi.gupta3579@gmail.com</h5>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
