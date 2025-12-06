import React from "react";
import avatarImg from "../../assets/home.jpg";
import TextChange from "../../TextChange";

const Home = () => {
  return (
    <div
      className="text-white flex w-full justify-between items-start p-10 md:p-20"
      id="Home"
    >
      <div className="md:w-2/4 md:pt-5">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          {" "}
          {/* Hello' I am Shubhi Gupta */}
          <TextChange />
        </h1>

        <p className="mt-1 text-sm md:text-2xl tracking-tight font-light">
          Fresher skilled in JavaScript, React, Node.js, and MongoDB. Passionate
          about building responsive and user-friendly web applications. Looking
          for an entry-level role to apply technical skills and grow
          professionally.
        </p>
        <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>

      <div className="md:w-2/4 flex justify-center">
        <img src={avatarImg} className="md:w-100 w-150 rounded-full" />
      </div>
    </div>
  );
};

export default Home;
