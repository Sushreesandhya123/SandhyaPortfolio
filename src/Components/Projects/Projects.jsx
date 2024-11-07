import React from "react";
import utsahImage from "../../assets/projects.jpeg";
import estateImage from "../../assets/projects.jpeg";
import lyfeImage from "../../assets/projects.jpeg"; 
const Projects = () => {
  return (
    <div id="Projects" className="bg-[#1b1c2b] h-full w-full py-6">
      <h1 className="font-bold text-3xl md:text-5xl text-white text-center">Projects</h1>
      <p className="text-center py-4 text-xl font-semibold text-white">
      Explore My web development Projects
      </p>
      {/* <p className="text-center pb-5 text-xl font-semibold text-gray-400">
        Explore my web development projects crafted with HTML, Tailwind CSS, CSS, JavaScript, and React.js.
      </p> */}
      <div className="project-box p-4 h-full w-full flex flex-col space-y-11 md:space-y-0 md:flex-row mx-auto pb-11">
        <div className="project-box rounded-xl py-2 h-fit md:h-[650px] md:w-[30%] flex flex-col mx-auto border-2">
          <h1 className="text-center font-bold text-2xl text-white py-3">Gurukul School Automation</h1>
          <div className="image">
            <img src={utsahImage} alt="Utsah (GITA Annual Fest 2024)" className="w-[80%] mx-auto py-3 rounded-lg" />
          </div>
          <a href="" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <button className="px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600">
              Project Link
            </button>
          </a>
          <p className="text-white font-semibold py-2 px-5 text-left">
            <span className="font-bold text-xl block text-left text-white">Desc:</span>
            A web app utilizing React.js and TailwindCSS, streamlined festival details and participant registration through Google Forms, drawing 1692 unique users and enhancing the registration experience.
          </p>
          <p className="text-gray-400 font-semibold py-2 px-5">
            <span className="font-bold text-xl block text-left text-white">Technology used:</span>
            <span className="text-white">Python, Django, FastAPI, React.js, JavaScript, Bootstrap</span>
          </p>
        </div>
        <div className="project-box rounded-xl py-2 h-fit md:h-[650px] md:w-[30%] flex flex-col mx-auto border-2">
          <h1 className="text-center font-bold text-2xl text-white py-3">Feedback Solution</h1>
          <div className="image">
            <img src={lyfeImage} alt="Utsah (GITA Annual Fest 2024)" className="w-[80%] mx-auto py-3 rounded-lg" />
          </div>
          <a href="" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <button className="px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600">
              Project Link
            </button>
          </a>
          <p className="text-white font-semibold py-2 px-5 text-left">
            <span className="font-bold text-xl block text-left text-white">Desc:</span>
            A web app utilizing React.js and TailwindCSS, streamlined festival details and participant registration through Google Forms, drawing 1692 unique users and enhancing the registration experience.
          </p>
          <p className="text-gray-400 font-semibold py-2 px-5">
            <span className="font-bold text-xl block text-left text-white">Technology used:</span>
            <span className="text-white">Python, Django, FastAPI, React.js, JavaScript, Bootstrap</span>
          </p>
        </div>
        <div className="project-box rounded-xl py-2 h-fit md:h-[650px] md:w-[30%] flex flex-col mx-auto border-2">
          <h1 className="text-center font-bold text-2xl text-white py-3">Hospital Management System</h1>
          <div className="image">
            <img src={estateImage} alt="Utsah (GITA Annual Fest 2024)" className="w-[80%] mx-auto py-3 rounded-lg" />
          </div>
          <a href="" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <button className="px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600">
              Project Link
            </button>
          </a>
          <p className="text-white font-semibold py-2 px-5 text-left">
            <span className="font-bold text-xl block text-left text-white">Desc:</span>
            A web app utilizing React.js and TailwindCSS, streamlined festival details and participant registration through Google Forms, drawing 1692 unique users and enhancing the registration experience.
          </p>
          <p className="text-gray-400 font-semibold py-2 px-5">
            <span className="font-bold text-xl block text-left text-white">Technology used:</span>
            <span className="text-white">Python, Django, FastAPI, React.js, JavaScript, Bootstrap</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
