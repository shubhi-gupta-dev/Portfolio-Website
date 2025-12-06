import React from "react";
import ProjectCard from "./ProjectCard";
import p3 from "../../assets/project-3.jpeg";
import p1 from "../../assets/project-1.png";
import p2 from "../../assets/p-2.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
        Projects
      </h1>
      <div className="flex flex-wrap py-12 px-8 gap-5 items-center justify-center md:justify-around ">
        <ProjectCard
          title="TechTreak Website"
          main="TechTreak sells earbuds, headphones, and smartwatches.
A modern, user-friendly shopping website."
          imgSrc={p3}
          hrefs={"https://shubhi-gupta-dev.github.io/Responsive-Online-Gadgets-Website/index.html"}
        />
        <ProjectCard
          title="Coffee Website"
          main="A modern coffee website displaying brews, menus, and offers.
Built with React.js for dynamic components and Tailwind CSS for elegant styling."
          imgSrc={p1}
          hrefs={"https://coffeewebsitereactjs.netlify.app/"}
        />
        <ProjectCard
          title="Cake Website"
          main="A cake website showcasing delicious cakes with images and descriptions.
Built using HTML, CSS, and JavaScript ."
          imgSrc={p2}
          hrefs={"https://online-cakes-order.netlify.app/#"}
        />
      </div>
    </div>
  );
};

export default Projects;
