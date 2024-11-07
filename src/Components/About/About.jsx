import React from "react";
import { IoArrowForward } from "react-icons/io5";

import cImg from "../../assets/c.jpeg";
import pythonImg from "../../assets/python.jpeg";
import mysqlImg from "../../assets/mysql.jpeg";
import djangoImg from "../../assets/dj.png";
import fastapiImg from "../../assets/fastapi.png";
import gitImg from "../../assets/git.jpeg";
import jiraImg from "../../assets/jira.jpeg";
import htmlImg from "../../assets/html.jpeg";
import cssImg from "../../assets/css.jpeg";
import bootstrapImg from "../../assets/bootstrap.jpeg";
import jsImg from "../../assets/js.jpeg";
import reactImg from "../../assets/react.jpeg";


const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col justify-center items-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-20 rounded-lg p-8"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
        <p className="text-md md:text-xl  leading-relaxed ">
          I am a passionate and highly motivated software developer skilled in
          multiple technologies. My expertise lies in both frontend and backend
          development, making me proficient in building full-stack solutions
          with a focus on quality, performance, and user experience. I enjoy
          solving complex problems and continuously learning new technologies
          to stay updated in the ever-evolving tech industry.
        </p>
      </div>
      <div className="mt-10 w-full">
        <h3 className="text-2xl md:text-4xl font-bold text-center mb-8">My Skills</h3>

        <div className="flex flex-wrap">
          <div className="category md:w-[45%] my-8 pb-8 h-full mx-[20px] md:mx-auto w-full rounded-xl p-3 border-purple-600 border-2">
            <h1 className="md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6">Programming Languages</h1>
            <div className="skills flex flex-wrap gap-3 items-center justify-center h-full w-full pb-6">
              <div className="hover:bg-purple-400 hover:cursor-pointer flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                <img className="w-10" src={cImg} alt="C" />
                <p>C</p>
              </div>
              <div className="hover:bg-purple-400 hover:cursor-pointer flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                <img className="w-10" src={pythonImg} alt="Python" />
                <p>Python</p>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="category md:w-[45%] my-8 pb-8 h-full mx-[20px] md:mx-auto w-full rounded-xl p-3 border-purple-600 border-2">
            <h1 className="md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6">Database</h1>
            <div className="skills flex flex-wrap gap-3 items-center justify-center h-full w-full pb-6">
              <div className="hover:bg-purple-400 hover:cursor-pointer flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                <img className="w-10" src={mysqlImg} alt="MySQL" />
                <p>MySQL</p>
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div className="category md:w-[45%] my-8 pb-8 h-full mx-[20px] md:mx-auto w-full rounded-xl p-3 border-purple-600 border-2">
            <h1 className="md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6">Frameworks</h1>
            <div className="skills flex flex-wrap gap-3 items-center justify-center h-full w-full pb-6">
              <div className="hover:bg-purple-400 hover:cursor-pointer flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                <img className="w-10" src={djangoImg} alt="Django" />
                <p>Django</p>
              </div>
              <div className="hover:bg-purple-400 hover:cursor-pointer flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                <img className="w-10" src={fastapiImg} alt="FastAPI" />
                <p>FastAPI</p>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="category md:w-[45%] my-8 pb-8 h-full mx-[20px] md:mx-auto w-full rounded-xl p-3 border-purple-600 border-2">
            <h1 className="md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6">Tools</h1>
            <div className="skills flex flex-wrap gap-3 items-center justify-center h-full w-full pb-6">
              <div className="hover:bg-purple-400 hover:cursor-pointer flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                <img className="w-10" src={gitImg} alt="Git" />
                <p>Git</p>
              </div>
              <div className="hover:bg-purple-400 hover:cursor-pointer flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                <img className="w-10" src={jiraImg} alt="Jira" />
                <p>Jira</p>
              </div>
            </div>
          </div>

          {/* Web Technologies */}
          <div className="category md:w-[45%] my-8 pb-8 h-full mx-[20px] md:mx-auto w-full rounded-xl p-3 border-purple-600 border-2">
            <h1 className="md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6">Web Technologies</h1>
            <div className="skills flex flex-wrap gap-3 items-center justify-center h-full w-full pb-6">
              <div className="hover:bg-purple-400 hover:cursor-pointer flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                <img className="w-10" src={htmlImg} alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="hover:bg-purple-400 hover:cursor-pointer flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                <img className="w-10" src={cssImg} alt="CSS" />
                <p>CSS</p>
              </div>
              <div className="hover:bg-purple-400 hover:cursor-pointer flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                <img className="w-10" src={bootstrapImg} alt="Bootstrap" />
                <p>Bootstrap</p>
              </div>
              <div className="hover:bg-purple-400 hover:cursor-pointer flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                <img className="w-10" src={jsImg} alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="hover:bg-purple-400 hover:cursor-pointer flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                <img className="w-10" src={reactImg} alt="React.js" />
                <p>React.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

